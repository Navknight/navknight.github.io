import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function PostItem({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex gap-4 py-5 border-b border-border/50 last:border-b-0 transition-all duration-300 hover:pl-2"
    >
      {/* Thumbnail */}
      {post.image && (
        <div className="w-20 h-14 rounded overflow-hidden shrink-0 bg-surface-2">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-sm text-text-secondary group-hover:text-accent transition-colors duration-300 truncate">
            {post.title}
          </h2>
          <time className="text-[10px] text-text-muted shrink-0">
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
          </time>
        </div>
        <p className="text-[11px] text-text-muted mt-0.5 truncate">{post.description}</p>
        {post.tags.length > 0 && (
          <div className="flex gap-2 mt-1.5">
            {post.tags.map(t => (
              <span key={t} className="text-[10px] text-accent-green">#{t}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}

export default function BlogList() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="section-wrap flex-1 pt-24">
        <div className="watermark">Blog</div>
        <div className="content-area">
          <h1 className="font-sans text-2xl font-bold text-text mb-2">Blog</h1>
          <p className="text-xs text-text-secondary mb-10">
            Notes on systems, GPU architecture, browser internals, and security research.
          </p>

          {posts.length === 0 ? (
            <p className="text-xs text-text-muted">No posts yet.</p>
          ) : (
            <div>
              {posts.map(post => <PostItem key={post.slug} post={post} />)}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
