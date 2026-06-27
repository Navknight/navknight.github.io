/**
 * Experience items. Edit this file to update the Experience section.
 * Each item: { title, description, tech[], color }
 * Colors use Tailwind classes from the accent palette.
 */
export const COMPANY = {
  name: 'Zscaler',
  note: 'via SquareX acquisition',
  role: 'Software Engineer',
  period: 'Jan 2025 — Present',
}

export const EXPERIENCE_ITEMS = [
  {
    title: 'Chromium Browser Fork & Device Trust',
    description: 'Custom Chromium fork with posture evaluation APIs, code signing, AV detection across Windows + macOS. Firefox Android fork with CLI patch management.',
    tech: ['C++', 'Objective-C', 'Chromium', 'Shell'],
    color: 'text-accent-blue',
  },
  {
    title: 'Real-time DLP Extension Engine',
    description: 'Sub-millisecond content masking and pattern matching. Encrypted WebSocket agent comms. Featured at DEF CON 32 and Forbes.',
    tech: ['TypeScript', 'Extensions', 'WebSockets', 'DLP'],
    color: 'text-accent-pink',
  },
  {
    title: 'Custom OIDC Identity Provider',
    description: 'Multi-tenant OIDC IDP in Go, integrated with enterprise IDPs. Event-driven config hot-reloading via Kafka across 20+ tenants.',
    tech: ['Go', 'Kafka', 'PostgreSQL', 'Redis', 'GCP'],
    color: 'text-accent-green',
  },
  {
    title: 'Policy-Driven Cloud Upload System',
    description: 'Route downloads to Google Drive, OneDrive, Box based on DLP policies. Chunked parallel uploads, multi-tenant credential storage for 50+ tenants.',
    tech: ['Python', 'Flask', 'Cloud APIs', 'Docker'],
    color: 'text-accent-orange',
  },
  {
    title: 'Enterprise Admin Console & Auth Portal',
    description: 'Policy management with versioning, geo-analytics, RBAC. Self-destructing tier-access docs portal. 700+ contributions across 8 browsers.',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Flask'],
    color: 'text-accent-cyan',
  },
]
