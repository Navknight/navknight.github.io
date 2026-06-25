import { useEffect, useRef, useState } from "react";
import { ExternalLink, Play } from "lucide-react";

const Github = ({ size = 15 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: "DAP: GPU Prefetching",
    tagline: "32% Cache Miss Cut · 80% Prefetch Hit Rate",
    description:
      "Developed next-line and strided hardware prefetcher modules in MGPUsim. Identified >90% dead-on-arrival cache lines and resolved coherence deadlocks in multi-GPU benchmarks.",
    tech: ["Go", "GPU Architecture", "Cache Coherence", "Simulators"],
    demoLink: "#interactive",
  },
  {
    title: "Parallel Tensor Decomposition",
    tagline: "O(n⁵) → O(n⁴) Complexity · 2.87x Speedup",
    description:
      "Accelerated Tucker decomposition on sparse CSF tensors using C++ and OpenMP. Formulated 7 parallel algorithms across 3 decomposition modes to optimize cache locality.",
    tech: ["C++", "OpenMP", "HPC", "Sparse Tensor Math"],
    demoLink: "#interactive",
  },
  {
    title: "zipzap",
    tagline: "30–61x Faster · Zero-Recompress ZIP Appends",
    description:
      "Rust/WebAssembly library that replaces ZIP entries by appending to the archive tail instead of rebuilding. Skips decompression entirely — keeping memory flat and rewrites fast.",
    tech: ["Rust", "WebAssembly", "OPFS", "wasm-bindgen"],
    demoLink: "#interactive",
    github: "https://github.com/Navknight/zipzap",
  },
  {
    title: "browser.security",
    tagline: "DEF CON 2024 · 30+ SWG Bypasses · Forbes Coverage",
    description:
      "Last Mile Reassembly Attack illustrating how Secure Web Gateways fail at client-side data inspection. Highlighted in global cybersecurity press.",
    tech: ["Security Research", "Browser Internals", "SWG Bypasses"],
    link: "https://browser.security/",
  },
  {
    title: "Rituals: Collaborative Habit Tracker",
    tagline: "P2P Recovery · Event-Driven Architecture",
    description:
      "Built a cross-platform mobile app with Firestore listeners to enable peer-to-peer data recovery, eliminating server storage costs. Powered by TypeScript Cloud Functions.",
    tech: ["TypeScript", "React Native", "Firebase", "Firestore"],
    github: "https://github.com/Navknight",
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-6 flex flex-col justify-between h-full border border-white/5 hover:border-accent-indigo/35 shadow-xl hover:shadow-accent-indigo/5 transition-all duration-500 group ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-bold text-base text-text group-hover:text-accent-indigo transition-colors duration-300">
            {project.title}
          </h3>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors"
                title="View Source"
              >
                <Github size={15} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-indigo transition-colors"
                title="Visit Website"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        <p className="font-mono text-xs text-accent-indigo/90 font-medium mb-3">
          {project.tagline}
        </p>
        <p className="text-xs text-text-secondary leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-[10px] font-mono text-text-secondary bg-white/5 rounded-lg border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Interactive CTA buttons */}
        {project.demoLink && (
          <a
            href={project.demoLink}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider font-bold text-accent-indigo hover:text-white bg-accent-indigo/10 hover:bg-accent-indigo px-3.5 py-2 rounded-xl transition-all duration-300 w-fit"
          >
            <Play size={10} className="fill-current" />
            Launch Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-container relative">
      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent-indigo/5 rounded-full blur-[140px] pointer-events-none" />

      <h2 className="font-mono text-xl font-bold text-accent-indigo mb-12 flex items-center gap-3">
        <span className="text-text-muted text-sm">02.</span> Projects
        <span className="flex-1 h-px bg-border" />
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
