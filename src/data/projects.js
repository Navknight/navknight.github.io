/**
 * Projects data. Edit this file to update the Projects section.
 * Each item: { title, stat, description, tech[], color, demoLink?, github?, link? }
 */
export const PROJECTS = [
  {
    title: 'DAP: GPU Prefetching',
    stat: '32% miss reduction · 80% hit rate',
    description: 'Next-line and strided hardware prefetcher modules in MGPUsim. Resolved MSHR coherence deadlocks in multi-GPU benchmarks.',
    tech: ['Go', 'GPU Arch', 'Cache Coherence', 'MGPUsim'],
    demoLink: '#interactive',
    color: 'text-accent-cyan',
  },
  {
    title: 'Parallel Tensor Decomposition',
    stat: 'O(n⁵)→O(n⁴) · 2.87x speedup',
    description: 'Tucker decomposition on sparse CSF tensors with 7 parallel algorithms across 3 decomposition modes. Intermediate buffering for cache locality.',
    tech: ['C++', 'OpenMP', 'HPC', 'Sparse Math'],
    demoLink: '#interactive',
    color: 'text-accent-orange',
  },
  {
    title: 'zipzap',
    stat: '30–61x faster · zero recompression',
    description: 'Rust/WASM library that replaces ZIP entries by appending to archive tail. Skips decompression entirely — flat memory, fast rewrites.',
    tech: ['Rust', 'WebAssembly', 'OPFS', 'wasm-bindgen'],
    demoLink: '#interactive',
    github: 'https://github.com/Navknight/zipzap',
    color: 'text-accent-green',
  },
  {
    title: 'browser.security',
    stat: 'DEF CON 2024 · 30+ SWG bypasses',
    description: 'Last Mile Reassembly Attack demonstrating Secure Web Gateway client-side inspection failures. Forbes, global cybersecurity coverage.',
    tech: ['Security Research', 'Browser Internals'],
    link: 'https://browser.security/',
    color: 'text-accent-pink',
  },
  {
    title: 'Rituals',
    stat: 'P2P recovery · event-driven',
    description: 'Cross-platform habit tracker with Firestore listeners for peer-to-peer data recovery. Zero server storage costs.',
    tech: ['TypeScript', 'React Native', 'Firebase'],
    github: 'https://github.com/Navknight',
    color: 'text-accent-blue',
  },
]
