import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Calendar,
  ShieldCheck,
  Cpu,
  Code2,
  Database,
  Layout,
} from "lucide-react";

const projects = [
  {
    title: "Chromium Browser Fork & Device Trust",
    category: "Systems & C++",
    icon: Cpu,
    details: [
      "Developed a custom Chromium browser fork with posture evaluation APIs (certificate stores, code signing, AV detection).",
      "Engineered desktop browser hardening features and custom UI controls across Windows and macOS.",
      "Created a Firefox Android fork with a CLI build system handling patch management and layout overlays.",
    ],
    tech: [
      "C++",
      "Objective-C",
      "Chromium Source",
      "Android",
      "Shell Scripting",
    ],
  },
  {
    title: "Real-time DLP Extension Engine",
    category: "Security & Extension",
    icon: ShieldCheck,
    details: [
      "Built a sub-millisecond content masking and pattern matching DLP engine in TypeScript.",
      "Designed process protection layers and secure WebSocket agent-to-browser communication.",
      "Authored desktop protection engines featured in DEF CON and Forbes coverage.",
    ],
    tech: ["TypeScript", "Browser Extensions", "WebSockets", "DLP Algorithms"],
  },
  {
    title: "Custom OIDC Identity Provider",
    category: "Backend & Distributed Systems",
    icon: Database,
    details: [
      "Engineered a multi-tenant OIDC Identity Provider in Go, integrated with enterprise IDPs.",
      "Built an event-driven hot-reloading configuration system via Apache Kafka.",
      "Implemented caching architectures in Firestore/Redis and audit streams in BigQuery.",
    ],
    tech: ["Go", "Kafka", "PostgreSQL", "Redis", "GCP Pub/Sub", "Firestore"],
  },
  {
    title: "Policy-Driven Cloud Upload System",
    category: "Backend & Cloud",
    icon: Code2,
    details: [
      "Intercepted and routed user downloads to Google Drive, OneDrive, and Box based on DLP policies.",
      "Engineered chunked parallel uploads and secure multi-tenant credential storage.",
      "Maintained pythonic enterprise backends handling policy evaluations for 50+ enterprise tenants.",
    ],
    tech: [
      "Python",
      "Flask",
      "Google API",
      "OneDrive API",
      "Box SDK",
      "Docker",
    ],
  },
  {
    title: "Enterprise Admin Console & Auth Docs",
    category: "Full Stack",
    icon: Layout,
    details: [
      "Created policy management interfaces, versioning logs, geo-analytics, and RBAC control systems.",
      "Built an authenticated, self-destructing tier-access documentation portal serving 500+ users.",
      "Committed 700+ contributions covering admin tooling configurations across 8 browsers.",
    ],
    tech: ["React", "TypeScript", "TailwindCSS", "Flask", "RBAC", "REST APIs"],
  },
];

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-container relative"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-indigo/5 rounded-full blur-[140px] pointer-events-none" />

      <h2 className="font-mono text-xl font-bold text-accent-indigo mb-12 flex items-center gap-3">
        <span className="text-text-muted text-sm">01.</span> Experience
        <span className="flex-1 h-px bg-border" />
      </h2>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Company & Role Header Card */}
        <div
          className={`lg:col-span-4 glass rounded-2xl p-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-accent-indigo/10 flex items-center justify-center border border-accent-indigo/20">
              <Briefcase size={22} className="text-accent-indigo" />
            </div>
            <div>
              <h3 className="font-bold text-text">Software Engineer</h3>
              <p className="text-sm text-text-secondary">Zscaler</p>
              <p className="text-[11px] text-text-muted">
                via SquareX Acquisition
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-text-secondary font-mono bg-white/5 border border-white/5 px-3.5 py-2 rounded-xl w-fit mb-6">
            <Calendar size={13} className="text-accent-indigo" />
            <span>Jan 2025 — Present</span>
          </div>

          <p className="text-xs text-text-secondary leading-relaxed mb-6">
            Driving browser security and low-level posture capabilities inside
            enterprise cloud and extension products. Select modules on the right
            to examine core contributions.
          </p>

          {/* Vertical Menu Buttons */}
          <div className="flex flex-col gap-2">
            {projects.map((proj, idx) => {
              const Icon = proj.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex items-center gap-3 w-full text-left font-mono text-[11px] px-4 py-3 rounded-xl border transition-all duration-200 ${
                    activeIdx === idx
                      ? "bg-accent-indigo/10 text-accent-indigo border-accent-indigo/30 shadow-md shadow-accent-indigo/5"
                      : "bg-transparent text-text-secondary border-transparent hover:bg-white/5 hover:text-text"
                  }`}
                >
                  <Icon
                    size={14}
                    className={
                      activeIdx === idx
                        ? "text-accent-indigo"
                        : "text-text-muted"
                    }
                  />
                  <span className="truncate">{proj.title.split(" & ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Work Panel */}
        <div
          className={`lg:col-span-8 glass rounded-2xl p-8 min-h-[380px] flex flex-col justify-between transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4 mb-6">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-accent-indigo font-bold bg-accent-indigo/10 border border-accent-indigo/20 px-2.5 py-1 rounded-md">
                  {projects[activeIdx].category}
                </span>
                <h3 className="font-bold text-lg text-text mt-2">
                  {projects[activeIdx].title}
                </h3>
              </div>
            </div>

            <ul className="space-y-4">
              {projects[activeIdx].details.map((bullet, bIdx) => (
                <li
                  key={bIdx}
                  className="flex gap-3 text-sm text-text-secondary leading-relaxed animate-fade-up"
                  style={{ animationDelay: `${bIdx * 50}ms` }}
                >
                  <span className="text-accent-indigo mt-1 shrink-0 font-mono text-[10px]">
                    ▸
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 pt-6 mt-8 border-t border-border/50">
            {projects[activeIdx].tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-xs font-mono text-accent-indigo bg-accent-indigo/5 rounded-xl border border-accent-indigo/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
