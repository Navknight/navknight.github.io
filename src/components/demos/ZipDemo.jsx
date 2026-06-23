import { useState, useRef, useEffect } from 'react'

async function loadZipzap() {
  const mod = await import('/zipzap/zipzap.js')
  await mod.default('/zipzap/zipzap_bg.wasm')
  return mod
}

// Build a minimal stored ZIP in the browser (no deps)
async function makeZip(files) {
  function u16(n) { return [(n & 0xff), (n >> 8) & 0xff] }
  function u32(n) { return [(n & 0xff), (n >> 8) & 0xff, (n >> 16) & 0xff, (n >> 24) & 0xff] }
  function crc32(data) {
    const t = new Uint32Array(256)
    for (let i = 0; i < 256; i++) {
      let c = i
      for (let j = 0; j < 8; j++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1)
      t[i] = c
    }
    let crc = 0xFFFFFFFF
    for (const b of data) crc = t[(crc ^ b) & 0xff] ^ (crc >>> 8)
    return (crc ^ 0xFFFFFFFF) >>> 0
  }

  const enc = new TextEncoder()
  const entries = []
  let offset = 0
  const parts = []

  for (const [name, content] of files) {
    const nameB = enc.encode(name)
    const dataB = typeof content === 'string' ? enc.encode(content) : content
    const crc = crc32(dataB)
    const lfh = new Uint8Array([
      0x50, 0x4b, 0x03, 0x04,
      ...u16(20), ...u16(0), ...u16(0),
      ...u16(0), ...u16(0),
      ...u32(crc), ...u32(dataB.length), ...u32(dataB.length),
      ...u16(nameB.length), ...u16(0),
    ])
    entries.push({ nameB, dataB, crc, offset })
    offset += lfh.length + nameB.length + dataB.length
    parts.push(lfh, nameB, dataB)
  }

  const cdParts = []
  let cdSize = 0
  for (const e of entries) {
    const cd = new Uint8Array([
      0x50, 0x4b, 0x01, 0x02,
      ...u16(0x031e), ...u16(20), ...u16(0), ...u16(0), ...u16(0), ...u16(0),
      ...u32(e.crc), ...u32(e.dataB.length), ...u32(e.dataB.length),
      ...u16(e.nameB.length), ...u16(0), ...u16(0),
      ...u16(0), ...u16(0), ...u32(0), ...u32(e.offset),
    ])
    cdParts.push(cd, e.nameB)
    cdSize += cd.length + e.nameB.length
  }

  const eocd = new Uint8Array([
    0x50, 0x4b, 0x05, 0x06, ...u16(0), ...u16(0),
    ...u16(entries.length), ...u16(entries.length),
    ...u32(cdSize), ...u32(offset), ...u16(0),
  ])

  const all = [...parts, ...cdParts, eocd]
  const total = all.reduce((s, a) => s + a.length, 0)
  const out = new Uint8Array(total)
  let pos = 0
  for (const a of all) { out.set(a, pos); pos += a.length }
  return out
}

// Full JS rebuild (the slow path zipzap avoids)
async function jsRebuild(src, targetName, newContent) {
  const view = new DataView(src.buffer)
  const dec = new TextDecoder()
  const enc = new TextEncoder()
  function u16(off) { return view.getUint16(off, true) }
  function u32(off) { return view.getUint32(off, true) }

  let eocdOff = -1
  for (let i = src.length - 22; i >= 0; i--) {
    if (src[i] === 0x50 && src[i+1] === 0x4b && src[i+2] === 0x05 && src[i+3] === 0x06) {
      eocdOff = i; break
    }
  }
  const totalEntries = u16(eocdOff + 10)
  const cdOffset = u32(eocdOff + 16)

  const files = []
  let pos = cdOffset
  for (let i = 0; i < totalEntries; i++) {
    const nameLen = u16(pos + 28)
    const extraLen = u16(pos + 30)
    const cmtLen = u16(pos + 32)
    const lfhOff = u32(pos + 42)
    const name = dec.decode(src.slice(pos + 46, pos + 46 + nameLen))
    pos += 46 + nameLen + extraLen + cmtLen

    const lfhNameLen = u16(lfhOff + 26)
    const lfhExtraLen = u16(lfhOff + 28)
    const dataOff = lfhOff + 30 + lfhNameLen + lfhExtraLen
    const compSize = u32(lfhOff + 18)
    const data = name === targetName ? newContent : src.slice(dataOff, dataOff + compSize)
    files.push([name, data])
  }
  return makeZip(files)
}

const SIZES = [
  { label: '10 KB',  bytes: 10 * 1024 },
  { label: '100 KB', bytes: 100 * 1024 },
  { label: '1 MB',   bytes: 1024 * 1024 },
  { label: '5 MB',   bytes: 5 * 1024 * 1024 },
]

export default function ZipDemo() {
  const [status, setStatus] = useState('idle') // idle | loading | running | done | error
  const [results, setResults] = useState([])
  const [error, setError] = useState('')
  const [currentSize, setCurrentSize] = useState('')
  const zipzapRef = useRef(null)

  useEffect(() => {
    loadZipzap()
      .then(mod => { zipzapRef.current = mod })
      .catch(e => { setError('Failed to load WASM: ' + e.message); setStatus('error') })
  }, [])

  const runBenchmark = async () => {
    if (!zipzapRef.current) { setError('WASM not loaded yet'); return }
    setStatus('running')
    setResults([])
    setError('')

    const { zip_replace_or_add_stored } = zipzapRef.current
    const enc = new TextEncoder()
    const replacement = enc.encode('<updated/>')
    const RUNS = 50

    const out = []

    for (const { label, bytes } of SIZES) {
      setCurrentSize(label)
      const payload = new Uint8Array(bytes).fill(0x42)
      const src = await makeZip([['content.bin', payload], ['meta.xml', '<root/>'], ['config.json', '{"v":1}']])

      // zipzap
      let t0 = performance.now()
      for (let i = 0; i < RUNS; i++) {
        zip_replace_or_add_stored(src, 'meta.xml', replacement, undefined, undefined)
      }
      const zzMs = (performance.now() - t0) / RUNS

      // JS full rebuild
      t0 = performance.now()
      for (let i = 0; i < RUNS; i++) {
        await jsRebuild(src, 'meta.xml', replacement)
      }
      const jsMs = (performance.now() - t0) / RUNS

      out.push({ label, zzMs, jsMs, speedup: jsMs / zzMs })
      setResults([...out])
    }

    setStatus('done')
    setCurrentSize('')
  }

  const maxSpeedup = results.length ? Math.max(...results.map(r => r.speedup)) : 1

  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-mono text-lg text-terminal-green font-bold mb-1">zipzap — Live WASM Benchmark</h3>
          <p className="text-text-dim text-xs">
            Appends to ZIP tail instead of full rebuild. Real WASM running in your browser.
          </p>
        </div>
        <a
          href="https://github.com/Navknight/zipzap"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-mono text-text-dim hover:text-white border border-border hover:border-white/30 px-2.5 py-1.5 rounded transition-all whitespace-nowrap"
        >
          ↗ crates.io
        </a>
      </div>

      <button
        onClick={runBenchmark}
        disabled={status === 'running' || status === 'error'}
        className={`mb-6 px-4 py-2 font-mono text-xs rounded border transition-all ${
          status === 'running'
            ? 'border-terminal-amber text-terminal-amber opacity-60 cursor-not-allowed'
            : status === 'error'
            ? 'border-terminal-red text-terminal-red opacity-40 cursor-not-allowed'
            : 'border-terminal-green text-terminal-green hover:bg-terminal-green/10'
        }`}
      >
        {status === 'running'
          ? `▶ running ${currentSize}…`
          : status === 'done'
          ? '↺ run again'
          : '▶ run benchmark'}
      </button>

      {error && <p className="text-terminal-red font-mono text-xs mb-4">{error}</p>}

      {results.length > 0 && (
        <div className="space-y-3">
          {results.map(({ label, zzMs, jsMs, speedup }) => (
            <div key={label}>
              <div className="flex justify-between font-mono text-[11px] mb-1">
                <span className="text-text-dim">{label}</span>
                <span className="text-terminal-green font-bold">{speedup.toFixed(1)}x faster</span>
              </div>

              <div className="space-y-1">
                {/* zipzap bar */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-terminal-green w-14">zipzap</span>
                  <div className="flex-1 h-4 bg-white/5 rounded overflow-hidden">
                    <div
                      className="h-full bg-terminal-green/70 rounded transition-all duration-500"
                      style={{ width: `${Math.max(2, (zzMs / jsMs) * 100)}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-text-dim w-16 text-right">{zzMs.toFixed(2)} ms</span>
                </div>

                {/* JS rebuild bar */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-terminal-red/70 w-14">JS</span>
                  <div className="flex-1 h-4 bg-white/5 rounded overflow-hidden">
                    <div
                      className="h-full bg-terminal-red/50 rounded transition-all duration-500"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-text-dim w-16 text-right">{jsMs.toFixed(2)} ms</span>
                </div>
              </div>
            </div>
          ))}

          {status === 'done' && (
            <p className="font-mono text-[10px] text-text-dim pt-2 border-t border-border">
              {SIZES.length} sizes × 50 runs each · avg per-operation time · JS = full ZIP rebuild
            </p>
          )}
        </div>
      )}

      {status === 'idle' && results.length === 0 && (
        <div className="border border-dashed border-border rounded-xl h-32 flex items-center justify-center">
          <p className="font-mono text-xs text-text-dim">results appear here</p>
        </div>
      )}
    </div>
  )
}
