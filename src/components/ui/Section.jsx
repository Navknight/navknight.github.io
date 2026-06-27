/**
 * Reusable full-height section wrapper with content-area layout.
 * Props:
 *   id        - section ID for scroll targeting
 *   className - additional classes
 *   compact   - if true, removes min-h-screen
 *   children  - content inside the bordered area
 */
export default function Section({ id, className = '', compact = false, children }) {
  return (
    <section
      id={id}
      className={`section-wrap ${compact ? '!min-h-0 py-12' : ''} ${className}`}
    >
      <div className="content-area">
        {children}
      </div>
    </section>
  )
}
