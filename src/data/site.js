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
];

// Smaller things, one line each.
export const projects = [
  {
    name: "browser.security",
    href: "https://browser.security",
    blurb:
      "An open-source kit I co-created that reproduces 30+ tricks web security gateways miss. We showed it at DEF CON, and Forbes wrote it up.",
  },
  {
    name: "Dead-block aware prefetching",
    href: "https://github.com/navknight/mgpusim",
    blurb:
      "A multi-GPU cache prefetcher that guesses which blocks are dead and prefetches into their slots instead. 32% fewer cache misses in MGPUsim.",
  },
  {
    name: "Parallel TTMc",
    href: "https://github.com/cyclops-community/ctf",
    blurb:
      "Tensor-times-matrix chain for sparse tensor decomposition, added to the Cyclops Tensor Framework. BLAS and OpenMP made it 11× faster.",
  },
];

// Build-safe view-transition-name from any slug
export const vtName = (prefix, slug) =>
  `${prefix}-${slug.toLowerCase().replace(/[^a-z0-9-]+/g, "-")}`;
