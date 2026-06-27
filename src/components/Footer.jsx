import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="page-container py-16 border-t border-border">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Abhinav Gupta
          </p>
          <p className="text-[10px] text-text-muted mt-1 opacity-60">
            Built with React + Vite. Keyboard-friendly.
          </p>
        </div>
        <div className="flex gap-5 text-xs">
          <a href="https://github.com/Navknight" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-green link-animated transition-colors">
            github
          </a>
          <a href="https://www.linkedin.com/in/abhinav-gupta-iitt/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-blue link-animated transition-colors">
            linkedin
          </a>
          <Link to="/dsa" className="text-text-muted hover:text-accent link-animated transition-colors">
            dsa
          </Link>
          <a href="mailto:abhi.gupta8802@gmail.com" className="text-text-muted hover:text-accent-orange link-animated transition-colors">
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
