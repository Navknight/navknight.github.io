// Shared site data: the home page and /search.json read this.
export const THEMES = ["light", "dark"];

// Things I built where the interesting part is a decision. Facts come from each
// repo’s README / CLAUDE.md; diagram coordinates are in a 680-wide viewBox.
export const decisions = [
  {
    id: "rituals",
    name: "Rituals",
    href: "https://github.com/Navknight/rituals",
    what: "A habit tracker where a day only counts once there’s a photo of you doing the thing.",
    stack: ["Flutter", "Firebase", "TypeScript"],
    problem: "Keeping photo proof without paying to keep photos",
    chose:
      "Photos are temporary. They go into a relay folder that gets cleared out daily, oldest first. When one goes missing, the app files a restore request, and whoever still has a copy re-uploads it the next time they open the app. Phones never talk to each other; Firebase just passes the notes.",
    cost:
      "If nobody in the group still has the photo, it’s gone. That’s fine. It proved you went to the gym; it was never going to be the wedding album.",
    diagram: {
      width: 680,
      height: 214,
      nodes: [
        { id: "you", x: 0, y: 24, w: 150, label: "your phone", sub: "takes the photo" },
        { id: "relay", x: 262, y: 24, w: 156, label: "relay/", sub: "cleared daily" },
        { id: "friend", x: 530, y: 24, w: 150, label: "a friend", sub: "link is dead" },
        { id: "fs", x: 262, y: 150, w: 156, label: "Firestore", sub: "restore requests" },
        { id: "copy", x: 0, y: 150, w: 150, label: "anyone with", sub: "a cached copy", hot: true },
      ],
      edges: [
        { from: "you", to: "relay", label: "upload" },
        { from: "relay", to: "friend", label: "photo link" },
        { from: "friend", to: "fs", label: "missing!", d: "M605 80V176H418", at: [646, 136] },
        { from: "fs", to: "copy", label: "on next open" },
        { from: "copy", to: "relay", label: "re-upload", hot: true, via: "v" },
      ],
    },
  },
  {
    id: "tally",
    name: "Tally",
    href: "https://github.com/Navknight/tally",
    what: "A money tracker for Android that reads your bank SMS, so you never type in a transaction.",
    stack: ["Flutter", "SQLite"],
    problem: "Sorting spending into categories without shipping a language model",
    chose:
      "Everything lives in one SQLite file on the phone, and the app has no internet access at all. Tell it a merchant is food once and it remembers, using plain lookup tables and counts. Amounts are whole paise, because floats and money don’t mix.",
    cost:
      "It only knows what you’ve taught it, and it reads SMS only while it’s open, since there’s no background service. Similar apps bundle a model of about 1.5 GB for this job. Tally counts.",
    diagram: {
      width: 680,
      height: 236,
      groups: [{ x: 184, y: 6, w: 494, h: 224, label: "no internet access" }],
      nodes: [
        { id: "sms", x: 0, y: 24, w: 116, label: "bank SMS", sub: "read on open" },
        { id: "parser", x: 208, y: 24, w: 170, label: "parser", sub: "a test per rule" },
        { id: "ledger", x: 490, y: 24, w: 170, label: "ledger", sub: "SQLite, in paise" },
        { id: "you", x: 0, y: 136, w: 116, label: "you", sub: "fix it once" },
        { id: "cat", x: 208, y: 136, w: 170, label: "categoriser", sub: "tables + counts", hot: true },
      ],
      edges: [
        { from: "sms", to: "parser", label: "text" },
        { from: "parser", to: "ledger", label: "transactions" },
        { from: "you", to: "cat", label: "correction", hot: true },
        { from: "cat", to: "ledger", label: "labels, past and future", hot: true, via: "v", at: [434, 128] },
      ],
    },
  },
  {
    id: "zipzap",
    name: "ZipZap",
    href: "https://github.com/Navknight/zipzap",
    what: "A Rust library, compiled to WebAssembly, for changing files inside a zip right in the browser.",
    stack: ["Rust", "WebAssembly", "OPFS"],
    problem: "Editing a zip without unzipping it",
    chose:
      "Keep every byte up to the central directory exactly as it is, write the new files where the directory used to be, then write a fresh directory that points at them. Nothing gets recompressed, which cut client-side memory by over 80%.",
    cost:
      "Replaced files leave their old bytes behind, new files go in uncompressed, and nothing past 4 GB (no ZIP64). For small files in a browser tab, a good deal.",
    diagram: {
      width: 680,
      height: 170,
      nodes: [
        { id: "old", x: 0, y: 56, w: 230, label: "existing entries", sub: "copied as-is" },
        { id: "new", x: 240, y: 56, w: 150, label: "new entries", sub: "stored", hot: true },
        { id: "cd", x: 400, y: 56, w: 170, label: "central directory", sub: "rewritten", hot: true },
        { id: "eocd", x: 580, y: 56, w: 100, label: "EOCD", sub: "the index" },
      ],
      edges: [
        { from: "eocd", to: "cd", label: "points to", d: "M630 56V28H485V56", at: [557, 30] },
        { from: "cd", to: "new", label: "new offsets", hot: true, d: "M485 116V134H315V120", at: [400, 162] },
      ],
    },
  },
  {
    id: "goxchange",
    name: "GoXchange",
    href: "https://github.com/Navknight/GoXchange",
    what: "A limit order book in Go, fed replayed Binance data over gRPC, built to learn how exchanges actually work.",
    stack: ["Go", "gRPC"],
    problem: "Letting everyone trade against one order book without locking it",
    chose:
      "One goroutine owns the book and does everything to it, in order. Every gRPC call arrives on its own goroutine, sends a typed request down a channel and waits for the answer. It’s the LMAX idea: nothing to lock, because nobody else can touch the state. Market data goes out through a publisher that drops events for readers who can’t keep up, so one slow reader can’t stall the book.",
    cost:
      "Throughput tops out at whatever one goroutine can do, and I wrote that down on purpose. Replies go into a channel with room for one message, so a caller who gives up waiting can’t freeze the loop either.",
    diagram: {
      width: 680,
      height: 214,
      nodes: [
        { id: "calls", x: 0, y: 24, w: 150, label: "gRPC calls", sub: "a goroutine each" },
        { id: "engine", x: 265, y: 24, w: 160, label: "engine loop", sub: "owns the book", hot: true },
        { id: "pub", x: 530, y: 24, w: 150, label: "publisher", sub: "drops slow readers" },
        { id: "replay", x: 0, y: 150, w: 150, label: "Binance replay", sub: "real depth diffs" },
        { id: "tui", x: 530, y: 150, w: 150, label: "terminal UI", sub: "live book" },
      ],
      edges: [
        { from: "calls", to: "engine", label: "requests", hot: true },
        { from: "engine", to: "calls", label: "reply, buffered", d: "M345 80V104H110V80", at: [228, 124] },
        { from: "engine", to: "pub", label: "snapshots" },
        { from: "replay", to: "calls", label: "orders", via: "v", at: [75, 118] },
        { from: "pub", to: "tui", label: "stream", via: "v", at: [605, 118] },
      ],
    },
  },
  {
    id: "flash",
    name: "flash",
    href: "https://ec2-13-235-42-117.ap-south-1.compute.amazonaws.com",
    what: "Live study battles: race classmates through a deck, or go one-on-one on a coding problem with Elo matchmaking.",
    stack: ["TypeScript", "Socket.IO", "Postgres", "Judge0", "AWS"],
    problem: "Running live rooms and strangers’ code on one small server",
    chose:
      "Everything runs on a single EC2 box under Docker Compose, and only Caddy faces the internet. Caddy serves the app and hands the API and websockets to a Fastify and Socket.IO backend, where every battle is a Socket.IO room. Submitted code runs in a self-hosted Judge0 with its own workers, not in the backend. Every push to main redeploys.",
    cost:
      "One box is one failure domain: if it goes down, every room goes with it. Judge0 also needs x86 and cgroup v1, which chose the instance type and the kernel settings for me.",
    diagram: {
      width: 680,
      height: 228,
      groups: [{ x: 162, y: 6, w: 516, h: 216, label: "one EC2 box" }],
      nodes: [
        { id: "browser", x: 0, y: 24, w: 120, label: "browser" },
        { id: "caddy", x: 180, y: 24, w: 130, label: "Caddy", sub: "only open port" },
        { id: "api", x: 400, y: 24, w: 150, label: "backend", sub: "Fastify + Socket.IO" },
        { id: "pg", x: 572, y: 24, w: 100, label: "Postgres" },
        { id: "spa", x: 180, y: 136, w: 130, label: "static SPA" },
        { id: "judge", x: 400, y: 136, w: 150, label: "Judge0", sub: "runs your code", hot: true },
      ],
      edges: [
        { from: "browser", to: "caddy", label: "HTTPS" },
        { from: "caddy", to: "api", label: "api + ws" },
        { from: "api", to: "pg" },
        { from: "caddy", to: "spa", label: "everything else", via: "v", at: [245, 112] },
        { from: "api", to: "judge", label: "submissions", hot: true, via: "v", at: [475, 112] },
      ],
    },
  },
];

// Smaller things, one line each.
export const projects = [
  {
    name: "browser.security",
    href: "https://browser.security",
    blurb:
      "An open-source kit I co-created at SquareX that reproduces 30+ tricks web security gateways miss. We showed it at DEF CON, and Forbes wrote it up.",
  },
  {
    name: "Wattle",
    href: "https://github.com/Navknight/Wattle",
    blurb:
      "A native GNOME client for WhatsApp Web in GTK4 and WebKitGTK instead of Electron, with a separate session for every account.",
  },
  {
    name: "gphotos",
    href: "https://github.com/Navknight/gphotos",
    blurb:
      "Turns a Google Takeout back into a photo library you own: pairs photos with their JSON sidecars, deduplicates, and writes the metadata in without overwriting what the camera recorded.",
  },
  {
    name: "CUDA softmax",
    href: "https://github.com/Navknight/softmax",
    blurb:
      "Softmax over 10 million floats, written from scratch in CUDA and raced on a T4 against Triton, PyTorch, CuPy, JAX and TensorFlow.",
  },
];

// Everything, newest first, for /projects. `to` points at a home-page decision.
export const archive = [
  { year: 2026, items: [
    { name: "Tally", to: "/#tally", blurb: "A money tracker that reads your bank SMS and never touches the internet." },
    { name: "Wattle", href: "https://github.com/Navknight/Wattle", blurb: "A native GNOME client for WhatsApp Web, GTK4 and WebKitGTK instead of Electron." },
    { name: "flash", to: "/#flash", blurb: "Live study battles and one-on-one coding duels with Elo matchmaking." },
    { name: "GoXchange", to: "/#goxchange", blurb: "A limit order book in Go where one goroutine owns the book." },
    { name: "CUDA softmax", href: "https://github.com/Navknight/softmax", blurb: "Softmax from scratch in CUDA, benchmarked against five frameworks." },
    { name: "ZipZap", to: "/#zipzap", blurb: "Edit files inside a zip in the browser without recompressing it." },
    { name: "Rituals", to: "/#rituals", blurb: "A habit tracker where a day only counts with a photo." },
    { name: "zed-gn", href: "https://github.com/Navknight/zed-gn", blurb: "Support for GN, the build language Chromium uses, in the Zed editor." },
    { name: "gphotos", href: "https://github.com/Navknight/gphotos", blurb: "Rebuilds a real photo library from a Google Takeout, metadata and all." },
  ] },
  { year: 2025, items: [
    { name: "Dead-block aware prefetching", href: "https://github.com/navknight/mgpusim", blurb: "A multi-GPU cache prefetcher that fills dead blocks; 32% fewer misses in MGPUsim." },
  ] },
  { year: 2024, items: [
    { name: "browser.security", href: "https://browser.security", blurb: "30+ browser tricks that security gateways miss. Shown at DEF CON." },
    { name: "Parallel TTMc", href: "https://github.com/cyclops-community/ctf", blurb: "Sparse tensor-times-matrix chain for the Cyclops Tensor Framework, 11× faster." },
    { name: "chessGPT", href: "https://github.com/Navknight/chessGPT", blurb: "A chess AI with minimax and alpha-beta pruning that you can play in the browser." },
  ] },
  { year: 2023, items: [
    { name: "navavishkar", href: "https://github.com/Navknight/navavishkar", blurb: "A mobile app to track the buses on campus." },
    { name: "OceanView", href: "https://github.com/Navknight/OceanView", blurb: "A map of reef damage, oil spills and restoration sites, for a course on SDG 14." },
  ] },
  { year: 2022, items: [
    { name: "SpeakingLua", href: "https://github.com/Navknight/SpeakingLua", blurb: "An interpreter for a subset of Lua, written in Python." },
  ] },
];

// Build-safe view-transition-name from any slug
export const vtName = (prefix, slug) =>
  `${prefix}-${slug.toLowerCase().replace(/[^a-z0-9-]+/g, "-")}`;
