// Shared site data: home cards, the hero terminal, and /search.json all read this.
export const THEMES = ['light', 'dark', 'dracula', 'gruvbox', 'solarized', 'nord']

export const projects = [
  {
    id: 'rituals',
    name: 'Rituals',
    href: 'https://github.com/Navknight/rituals',
    metric: 'P2P',
    note: 'no central server',
    blurb: 'Cross-platform habit tracker where accountability photos sync directly between peers.',
    stack: ['TypeScript', 'React Native', 'Firebase'],
  },
  {
    id: 'zipzap',
    name: 'ZipZap',
    href: 'https://github.com/Navknight/zipzap',
    metric: '−80%',
    note: 'client-side memory',
    blurb: 'WASM zip library for in-browser extraction and append, using additive compression instead of re-zipping.',
    stack: ['Rust', 'WebAssembly', 'OPFS'],
  },
  {
    id: 'browser.security',
    name: 'browser.security',
    href: 'https://browser.security',
    metric: 'DEF CON',
    note: 'presented, covered by Forbes',
    blurb: 'Open-source framework I co-created that reproduces 30+ techniques web gateways miss, so teams can test their setup.',
    stack: ['Browser internals', 'Open source'],
  },
  {
    id: 'dap',
    name: 'DAP: Dead-Block Aware Prefetching',
    href: 'https://github.com/navknight/mgpusim',
    metric: '−32%',
    note: 'cache miss rate',
    blurb: 'Hardware prefetcher modules for multi-GPU systems, built and evaluated in the MGPUsim simulator.',
    stack: ['Go', 'GPU architecture', 'MGPUsim'],
  },
  {
    id: 'ttmc',
    name: 'Parallel TTMc',
    href: 'https://github.com/cyclops-community/ctf',
    metric: '11×',
    note: 'faster with BLAS + OpenMP',
    blurb: 'Tensor-times-matrix chain for sparse tensor decomposition, contributed to the Cyclops Tensor Framework.',
    stack: ['C++', 'OpenMP', 'BLAS'],
  },
]

export const about =
  'Full-stack software engineer. I build backend platforms and browser tooling: auth and data services, ' +
  'Chromium and extension features, and the pipelines that keep them shipping. Previously at Zscaler and ' +
  'SquareX (80+ enterprise tenants, 40k+ concurrent users). Security is part of the job, not the whole of it. ' +
  'B.Tech CSE, IIT Tirupati.'

// Build-safe view-transition-name from any slug
export const vtName = (prefix, slug) => `${prefix}-${slug.toLowerCase().replace(/[^a-z0-9-]+/g, '-')}`
