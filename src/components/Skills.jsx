import { useEffect, useRef, useState } from "react";
import { Cpu, Code2, Server, Cloud, Layers, Lock } from "lucide-react";

const categories = [
  {
    name: "Low-Level Systems",
    icon: Cpu,
    skills: [
      "C/C++",
      "Rust",
      "OpenMP",
      "CUDA",
      "Chromium Source",
      "WebAssembly",
    ],
  },
  {
    name: "Core Languages",
    icon: Code2,
    skills: ["Go", "Python", "TypeScript", "SQL", "Objective-C", "Bash"],
  },
  {
    name: "Backend Architecture",
    icon: Server,
    skills: [
      "Flask",
      "Kafka",
      "Docker",
      "Linux/Unix",
      "Distributed Systems",
      "Event-Driven",
    ],
  },
  {
    name: "Cloud & Database",
    icon: Cloud,
    skills: ["PostgreSQL", "Redis", "GCP", "Firebase", "BigQuery", "Firestore"],
  },
  {
    name: "Browser & Frontend",
    icon: Layers,
    skills: [
      "React",
      "Browser Extensions",
      "WebRTC",
      "HTML5 Canvas",
      "TailwindCSS",
    ],
  },
  {
    name: "Identity & Security",
    icon: Lock,
    skills: [
      "OIDC",
      "DLP Masking",
      "Enterprise IDP",
      "mTLS",
      "Device Trust",
      "Browser Hardening",
    ],
  },
];

function Category({ cat, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Icon = cat.icon;

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
      className={`glass rounded-xl p-5 border border-white/5 hover:border-accent-indigo/20 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-7 h-7 rounded-lg bg-accent-indigo/10 flex items-center justify-center border border-accent-indigo/25">
          <Icon size={14} className="text-accent-indigo" />
        </div>
        <h3 className="font-mono text-xs font-bold text-text-secondary uppercase tracking-wider">
          {cat.name}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((s) => (
          <span
            key={s}
            className="px-3 py-1.5 text-xs font-mono text-text-secondary bg-white/5 rounded-lg border border-white/5 hover:border-accent-indigo/30 hover:text-white hover:bg-accent-indigo/5 transition-all duration-200"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-container relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-accent-indigo/5 rounded-full blur-[120px] pointer-events-none" />

      <h2 className="font-mono text-xl font-bold text-accent-indigo mb-12 flex items-center gap-3">
        <span className="text-text-muted text-sm">03.</span> Skills
        <span className="flex-1 h-px bg-border" />
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <Category key={cat.name} cat={cat} index={i} />
        ))}
      </div>
    </section>
  );
}
