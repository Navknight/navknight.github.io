import { Link } from 'react-router-dom'
import { ArrowUpRight, ImageOff } from 'lucide-react'
import { posts } from '../data/posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ParticleField from '../components/ParticleField'

function PostCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group glass rounded-2xl overflow-hidden flex flex-col border border-white/5 hover:border-accent-indigo/35 shadow-xl hover:shadow-accent-indigo/5 transition-all duration-300"
    >
      {/* Hero image */}
      <div className="h-44 bg-surface-2 overflow-hidden relative">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-indigo/10 to-accent-purple/5">
            <ImageOff size={24} className="text-text-muted opacity-40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
          {post.tags.map(t => (
            <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-white/80 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-bold text-sm text-text group-hover:text-accent-indigo transition-colors duration-300 leading-snug">
            {post.title}
          </h2>
          <ArrowUpRight size={14} className="text-text-muted group-hover:text-accent-indigo shrink-0 mt-0.5 transition-colors" />
        </div>
        <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">{post.description}</p>
        <time className="font-mono text-[10px] text-text-muted mt-auto pt-1">
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
        </time>
      </div>
    </Link>
  )
}

export default function BlogList() {
  return (
    <div className="relative min-h-screen">
      <ParticleField />
      <Navbar />
      <main className="section-container">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent-indigo/5 rounded-full blur-[140px] pointer-events-none" />

        <h1 className="font-mono text-xl font-bold text-accent-indigo mb-3 flex items-center gap-3">
          <span className="text-text-muted text-sm">~/</span> Blog
          <span className="flex-1 h-px bg-border" />
        </h1>
        <p className="text-sm text-text-secondary mb-12">
          Notes on systems, GPU architecture, browser internals, and security research.
        </p>

        {posts.length === 0 ? (
          <p className="font-mono text-text-muted text-sm">No posts yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => <PostCard key={post.slug} post={post} />)}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
