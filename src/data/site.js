// Shared site data: the home page and /search.json read this.
export const THEMES = ["light", "dark"];

// Things I built where the interesting part is a decision. Facts come from each
// repo’s README / CLAUDE.md; diagram coordinates are in a 680-wide viewBox.
export const decisions = [
  {
    id: "rituals",
    name: "Rituals",
    href: "https://github.com/Navknight/rituals",
    kind: "Habit tracker",
    what: "A habit tracker. A day only counts if you post a photo of yourself actually doing the thing.",
    stack: ["Flutter", "Firebase", "TypeScript"],
    problem: "Photo proof is the whole point, and storing everyone’s photos costs money.",
    chose:
      "Photos don’t stay on the server for long. They land in a relay folder that gets cleared every day. If a friend opens one that’s already gone, the app files a restore request in Firestore, and whoever still has it cached uploads it again the next time they open the app. The phones never talk to each other directly.",
    cost:
      "If nobody has a copy, the photo’s gone for good. I can live with that. It only ever had to prove you went to the gym.",
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
    kind: "Money tracker",
    what: "An Android money tracker that reads your bank SMS, so you never type in a transaction.",
    stack: ["Flutter", "SQLite"],
    problem: "Sorting spending into categories without bundling an AI model.",
    chose:
      "The app has no internet permission at all. Everything sits in one SQLite file on the phone. Tell it a merchant is food once and it remembers, using plain lookup tables and counts. Money is stored in whole paise, because floats and money don’t mix.",
    cost:
      "It only knows what you’ve taught it. There’s no background service either, so it reads new SMS only when you open it. Similar apps ship a model of about 1.5 GB for this. Tally just counts.",
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
    kind: "Rust library",
    what: "A Rust library, compiled to WebAssembly, that edits files inside a zip right in the browser.",
    stack: ["Rust", "WebAssembly", "OPFS"],
    problem: "Editing a zip without unzipping it.",
    chose:
      "Leave every byte before the central directory exactly where it is. Write the new files where the old directory used to be, then a fresh directory that points at them. Nothing gets recompressed, and client-side memory use dropped by over 80%.",
    cost:
      "Replaced files leave their old bytes behind, new files go in uncompressed, and there’s no ZIP64, so nothing over 4 GB. For small files in a browser tab, I’ll take that deal.",
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
    kind: "Order book",
    what: "A limit order book in Go, fed with replayed Binance data over gRPC. I built it to learn how exchanges work.",
    stack: ["Go", "gRPC"],
    problem: "Lots of traders, one order book, and no locks.",
    chose:
      "One goroutine owns the book and does all the work, one request at a time. Each gRPC call sends a typed request down a channel and waits for the reply. It’s the LMAX idea. If only one thing can touch the state, there’s nothing to lock. Market data goes out through a publisher that drops events for slow readers, so they can’t hold up the book.",
    cost:
      "Throughput is capped at what one goroutine can do. I knew that going in and wrote it down. Replies go into a channel with room for one message, so a caller that stops waiting can’t jam the loop either.",
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
    href: "https://flashbattles.me",
    kind: "Multiplayer app",
    what: "Live study battles. Race your classmates through a deck, or go 1-on-1 on a coding problem (4 languages, matched by Elo).",
    stack: ["TypeScript", "Socket.IO", "Postgres", "Judge0", "AWS"],
    problem: "Live rooms and strangers’ code, on one small server.",
    chose:
      "It’s all one EC2 box running Docker Compose, and only Caddy faces the internet. Caddy serves the app and hands the API and websockets to a Fastify + Socket.IO backend, where each battle is a room. Submitted code runs in a self-hosted Judge0 on its own workers, well away from the backend. Every push to main redeploys.",
    cost:
      "One box is one point of failure. If it goes down, every room goes with it. Judge0 also needs x86 and cgroup v1, so it picked my instance type and kernel settings for me.",
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
      "SquareX research on files that sneak past web security gateways. As an intern I wrote 29 of its 46 attack simulations and the demo site. It went to DEF CON 32, and Forbes covered it.",
  },
  {
    name: "Wattle",
    href: "https://github.com/Navknight/Wattle",
    blurb:
      "WhatsApp Web as a proper GNOME app, in GTK4 and WebKitGTK instead of Electron. Each account gets its own session.",
  },
  {
    name: "gphotos",
    href: "https://github.com/Navknight/gphotos",
    blurb:
      "Turns a Google Takeout back into a real photo library. It matches photos to their JSON sidecars, drops duplicates, and writes the dates back in without clobbering what the camera saved.",
  },
  {
    name: "CUDA softmax",
    href: "https://github.com/Navknight/softmax",
    blurb:
      "Softmax over 10M floats, hand-written in CUDA on a T4. It went from 21 ms to 0.72 ms, about 13% off the card’s memory-bandwidth floor.",
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
    { name: "Dead-block aware prefetching", href: "https://github.com/navknight/mgpusim", blurb: "Prefetchers for a multi-GPU simulator. They cut Conv2D cache misses 32%, and throughput still dropped (the shared L2 got crowded)." },
  ] },
  { year: 2024, items: [
    { name: "browser.security", href: "https://browser.security", blurb: "46 ways to sneak a file past a web security gateway. I wrote 29. Shown at DEF CON 32." },
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

// The day job, drawn for the home page hero. From the "how the systems fit
// together" note in career-ops cv.md; the hot path is a sign-in.
export const dayJob = {
  width: 680,
  height: 214,
  nodes: [
    { id: "console", x: 0, y: 24, w: 150, label: "admin console", sub: "React" },
    { id: "ext", x: 265, y: 24, w: 150, label: "extension", sub: "enforces policy", hot: true },
    { id: "chromium", x: 530, y: 24, w: 150, label: "Chromium fork", sub: "C++ device checks" },
    { id: "mdm", x: 0, y: 150, w: 150, label: "MDM", sub: "8 of them" },
    { id: "idp", x: 265, y: 150, w: 150, label: "identity provider", sub: "Go, OIDC", hot: true },
    { id: "sso", x: 530, y: 150, w: 150, label: "Entra ID / Okta", sub: "you, signing in" },
  ],
  edges: [
    { from: "console", to: "ext", label: "policy" },
    { from: "chromium", to: "ext", label: "posture" },
    { from: "console", to: "mdm", label: "install scripts" },
    { from: "sso", to: "idp", label: "trusted?", hot: true },
    { from: "idp", to: "ext", label: "checks the session", hot: true },
  ],
};
