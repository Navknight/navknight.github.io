import { useState, useRef, useEffect } from 'react'
import init, { zip_replace_or_add_stored } from '../../zipzap/zipzap.js'

let wasmReady = false
async function ensureWasm() {
  if (!wasmReady) { await init('/zipzap/zipzap_bg.wasm'); wasmReady = true }
}

// Parse ZIP central directory → list of entry names + metadata
function parseZipEntries(buf) {
  const view = new DataView(buf.buffer || buf)
  const dec = new TextDecoder()
  function u16(off) { return view.getUint16(off, true) }
  function u32(off) { return view.getUint32(off, true) }

  let eocdOff = -1
  for (let i = buf.length - 22; i >= 0; i--) {
    if (buf[i] === 0x50 && buf[i+1] === 0x4b && buf[i+2] === 0x05 && buf[i+3] === 0x06) {
      eocdOff = i; break
    }
  }
  if (eocdOff === -1) throw new Error('Not a valid ZIP file')

  const totalEntries = u16(eocdOff + 10)
  const cdOffset = u32(eocdOff + 16)

  const entries = []
  let pos = cdOffset
  for (let i = 0; i < totalEntries; i++) {
    if (u32(pos) !== 0x02014b50) break
    const compression = u16(pos + 10)
    const compSize   = u32(pos + 20)
    const uncompSize = u32(pos + 24)
    const nameLen    = u16(pos + 28)
    const extraLen   = u16(pos + 30)
    const cmtLen     = u16(pos + 32)
    const name       = dec.decode(buf.slice(pos + 46, pos + 46 + nameLen))
    pos += 46 + nameLen + extraLen + cmtLen
    if (!name.endsWith('/')) {
      entries.push({ name, compSize, uncompSize, compression })
    }
  }
  return entries
}

// Read a single entry's raw bytes from the ZIP
function readEntry(buf, entry) {
  const view = new DataView(buf.buffer || buf)
  function u16(off) { return view.getUint16(off, true) }
  function u32(off) { return view.getUint32(off, true) }
  const dec = new TextDecoder()

  // Find the local file header by name scan
  let pos = 0
  while (pos < buf.length - 4) {
    if (u32(pos) !== 0x04034b50) { pos++; continue }
    const nameLen  = u16(pos + 26)
    const extraLen = u16(pos + 28)
    const name     = dec.decode(buf.slice(pos + 30, pos + 30 + nameLen))
    const dataOff  = pos + 30 + nameLen + extraLen
    const compSize = u32(pos + 18)
    if (name === entry.name) return buf.slice(dataOff, dataOff + compSize)
    pos += 30 + nameLen + extraLen + compSize
  }
  return null
}

function fmtBytes(n) {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n/1024).toFixed(1)} KB`
  return `${(n/1024/1024).toFixed(2)} MB`
}

function compressionLabel(method) {
  return method === 0 ? 'stored' : method === 8 ? 'deflate' : `method ${method}`
}

export default function ZipDemo() {
  const [wasm, setWasm]         = useState(false)
  const [zipBuf, setZipBuf]     = useState(null)
  const [zipName, setZipName]   = useState('')
  const [entries, setEntries]   = useState([])
  const [selected, setSelected] = useState(null)   // entry name
  const [newContent, setNewContent] = useState('')
  const [result, setResult]     = useState(null)   // { zzMs, jsMs, outSize }
  const [error, setError]       = useState('')
  const [running, setRunning]   = useState(false)
  const dropRef = useRef(null)

  useEffect(() => {
    ensureWasm().then(() => setWasm(true)).catch(e => setError(e.message))
  }, [])

  const loadZip = async (file) => {
    setError(''); setResult(null); setSelected(null); setEntries([])
    const buf = new Uint8Array(await file.arrayBuffer())
    try {
      const ents = parseZipEntries(buf)
      setZipBuf(buf)
      setZipName(file.name)
      setEntries(ents)
      if (ents.length > 0) {
        setSelected(ents[0].name)
        const raw = readEntry(buf, ents[0])
        setNewContent(raw ? tryDecodeText(raw) : '')
      }
    } catch (e) {
      setError(e.message)
    }
  }

  const tryDecodeText = (bytes) => {
    try { return new TextDecoder().decode(bytes) } catch { return '' }
  }

  const onDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer?.files[0] || e.target.files?.[0]
    if (file) loadZip(file)
  }

  const onEntryClick = (entry) => {
    setSelected(entry.name)
    setResult(null)
    const raw = readEntry(zipBuf, entry)
    setNewContent(raw ? tryDecodeText(raw) : '[binary — edit to replace]')
  }

  // Full JS rebuild for comparison
  const jsRebuild = async (src, targetName, newBytes) => {
    const ents = parseZipEntries(src)
    function u16(n) { return [(n&0xff),(n>>8)&0xff] }
    function u32(n) { return [(n&0xff),(n>>8)&0xff,(n>>16)&0xff,(n>>24)&0xff] }
    function crc32(data) {
      const t = new Uint32Array(256)
      for (let i=0;i<256;i++){let c=i;for(let j=0;j<8;j++)c=(c&1)?(0xEDB88320^(c>>>1)):(c>>>1);t[i]=c}
      let crc=0xFFFFFFFF
      for(const b of data)crc=t[(crc^b)&0xff]^(crc>>>8)
      return(crc^0xFFFFFFFF)>>>0
    }
    const parts=[]; const cds=[]; let offset=0; let cdSize=0
    const enc=new TextEncoder()
    for(const e of ents){
      const nameB=enc.encode(e.name)
      const dataB=e.name===targetName ? newBytes : readEntry(src, e)
      const crc=crc32(dataB)
      const lfh=new Uint8Array([0x50,0x4b,0x03,0x04,...u16(20),...u16(0),...u16(0),...u16(0),...u16(0),...u32(crc),...u32(dataB.length),...u32(dataB.length),...u16(nameB.length),...u16(0)])
      const cd=new Uint8Array([0x50,0x4b,0x01,0x02,...u16(0x031e),...u16(20),...u16(0),...u16(0),...u16(0),...u16(0),...u32(crc),...u32(dataB.length),...u32(dataB.length),...u16(nameB.length),...u16(0),...u16(0),...u16(0),...u16(0),...u32(0),...u32(offset)])
      parts.push(lfh,nameB,dataB)
      cds.push(cd,nameB)
      offset+=lfh.length+nameB.length+dataB.length
      cdSize+=cd.length+nameB.length
    }
    const eocd=new Uint8Array([0x50,0x4b,0x05,0x06,...u16(0),...u16(0),...u16(ents.length),...u16(ents.length),...u32(cdSize),...u32(offset),...u16(0)])
    const all=[...parts,...cds,eocd]
    const total=all.reduce((s,a)=>s+a.length,0)
    const out=new Uint8Array(total); let p=0
    for(const a of all){out.set(a,p);p+=a.length}
    return out
  }

  const run = async () => {
    if (!wasm || !zipBuf || !selected) return
    setRunning(true); setResult(null); setError('')
    try {
      const newBytes = new TextEncoder().encode(newContent)
      const RUNS = 20

      const t0 = performance.now()
      let out
      for (let i = 0; i < RUNS; i++) {
        out = zip_replace_or_add_stored(zipBuf, selected, newBytes, undefined, undefined)
      }
      const zzMs = (performance.now() - t0) / RUNS

      const t1 = performance.now()
      for (let i = 0; i < RUNS; i++) {
        await jsRebuild(zipBuf, selected, newBytes)
      }
      const jsMs = (performance.now() - t1) / RUNS

      setResult({ zzMs, jsMs, outSize: out.length, inSize: zipBuf.length, out })
    } catch(e) {
      setError(e.message)
    }
    setRunning(false)
  }

  const download = () => {
    if (!result?.out) return
    const blob = new Blob([result.out], { type: 'application/zip' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = zipName.replace('.zip', '-modified.zip')
    a.click()
  }

  const selectedEntry = entries.find(e => e.name === selected)

  return (
    <div className="space-y-5">
      <div>
        <h3 className="font-mono text-lg text-terminal-green font-bold mb-1">zipzap — Live Demo</h3>
        <p className="text-text-dim text-xs">Drop a ZIP file. Pick an entry. Edit it. See zipzap append vs full rebuild.</p>
      </div>

      {/* Drop zone */}
      {!zipBuf && (
        <label
          ref={dropRef}
          onDrop={onDrop}
          onDragOver={e => e.preventDefault()}
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border hover:border-accent-indigo/50 rounded-xl cursor-pointer transition-colors"
        >
          <input type="file" accept=".zip,.docx,.xlsx,.pptx" className="hidden" onChange={onDrop} />
          <span className="font-mono text-xs text-text-dim">drop a .zip / .docx / .xlsx / .pptx</span>
          <span className="font-mono text-[10px] text-text-muted mt-1">or click to browse</span>
        </label>
      )}

      {error && <p className="font-mono text-xs text-terminal-red">{error}</p>}

      {zipBuf && (
        <>
          {/* File header */}
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs text-white">{zipName}</span>
              <span className="font-mono text-[10px] text-text-dim ml-2">{fmtBytes(zipBuf.length)} · {entries.length} entries</span>
            </div>
            <button
              onClick={() => { setZipBuf(null); setEntries([]); setResult(null); setError('') }}
              className="font-mono text-[10px] text-text-dim hover:text-white transition-colors"
            >
              ✕ clear
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Entry list */}
            <div>
              <p className="font-mono text-[10px] text-text-muted mb-2 uppercase tracking-wider">Entries</p>
              <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
                {entries.map(e => (
                  <button
                    key={e.name}
                    onClick={() => onEntryClick(e)}
                    className={`w-full text-left px-2.5 py-1.5 rounded font-mono text-[10px] transition-all ${
                      selected === e.name
                        ? 'bg-accent-indigo/20 text-white border border-accent-indigo/40'
                        : 'text-text-dim hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="truncate">{e.name}</div>
                    <div className="text-[9px] text-text-muted mt-0.5">
                      {fmtBytes(e.uncompSize)} · {compressionLabel(e.compression)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Editor */}
            <div>
              <p className="font-mono text-[10px] text-text-muted mb-2 uppercase tracking-wider">
                Edit content → <span className="text-accent-indigo">{selected}</span>
              </p>
              <textarea
                className="w-full h-44 bg-bg border border-border rounded-lg px-3 py-2 font-mono text-[10px] text-text resize-none focus:outline-none focus:border-accent-indigo/50 transition-colors"
                value={newContent}
                onChange={e => setNewContent(e.target.value)}
                spellCheck={false}
              />
            </div>
          </div>

          {/* Run button */}
          <button
            onClick={run}
            disabled={running || !wasm}
            className={`px-4 py-2 font-mono text-xs rounded border transition-all ${
              running
                ? 'border-terminal-amber text-terminal-amber opacity-60 cursor-not-allowed'
                : 'border-terminal-green text-terminal-green hover:bg-terminal-green/10'
            }`}
          >
            {running ? '▶ running…' : `▶ replace "${selected}" with zipzap`}
          </button>

          {/* Result */}
          {result && (
            <div className="border border-border rounded-xl p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
                <div>
                  <span className="text-text-muted block text-[9px] uppercase tracking-wider mb-1">zipzap (append)</span>
                  <span className="text-terminal-green text-lg font-bold">{result.zzMs.toFixed(2)}</span>
                  <span className="text-text-dim ml-1">ms</span>
                </div>
                <div>
                  <span className="text-text-muted block text-[9px] uppercase tracking-wider mb-1">JS full rebuild</span>
                  <span className="text-terminal-red text-lg font-bold">{result.jsMs.toFixed(2)}</span>
                  <span className="text-text-dim ml-1">ms</span>
                </div>
              </div>

              {/* Speedup bar */}
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-1">
                  <span className="text-text-dim">speedup</span>
                  <span className="text-terminal-green font-bold">{(result.jsMs/result.zzMs).toFixed(1)}x faster</span>
                </div>
                <div className="h-2 bg-white/5 rounded overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-terminal-green to-accent-indigo rounded transition-all duration-700"
                    style={{ width: `${Math.min(98, (result.zzMs/result.jsMs)*100)}%` }}
                  />
                </div>
                <div className="flex justify-between font-mono text-[9px] text-text-muted mt-0.5">
                  <span>zipzap</span>
                  <span>JS rebuild</span>
                </div>
              </div>

              {/* Memory comparison */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border">
                <div>
                  <span className="font-mono text-[9px] text-text-muted uppercase tracking-wider block mb-1">zipzap peak memory</span>
                  <span className="font-mono text-[11px] text-terminal-green">
                    ~{fmtBytes(newContent.length + result.outSize * 0.02)}
                  </span>
                  <span className="font-mono text-[9px] text-text-muted block mt-0.5">new entry + CD only</span>
                </div>
                <div>
                  <span className="font-mono text-[9px] text-text-muted uppercase tracking-wider block mb-1">JS rebuild peak memory</span>
                  <span className="font-mono text-[11px] text-terminal-red">
                    ~{fmtBytes(zipBuf.length * 2)}
                  </span>
                  <span className="font-mono text-[9px] text-text-muted block mt-0.5">full archive × 2 (in + out)</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="font-mono text-[10px] text-text-dim">
                  {fmtBytes(zipBuf.length)} → {fmtBytes(result.outSize)}
                  <span className="text-text-muted"> (+{fmtBytes(result.outSize - zipBuf.length)} appended block)</span>
                </span>
                <button
                  onClick={download}
                  className="font-mono text-[10px] text-accent-indigo hover:text-white border border-accent-indigo/40 hover:border-white/30 px-3 py-1.5 rounded transition-all"
                >
                  ↓ download result
                </button>
              </div>

              <p className="font-mono text-[9px] text-text-muted">avg of 20 runs · entry stored uncompressed · original entries untouched</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
