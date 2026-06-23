import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ImageOff } from 'lucide-react'
import { posts } from '../data/posts'

function PostCard({ post, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <Link
      ref={ref}
      to={`/blog/${post.slug}`}
      className={`group glass rounded-2xl overflow-hidden flex flex-col border border-white/5 hover:border-accent-indigo/35 shadow-xl hover:shadow-accent-indigo/5 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Hero image */}
      <div className="h-40 bg-surface-2 overflow-hidden relative">
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

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-sm text-text group-hover:text-accent-indigo transition-colors duration-300 leading-snug">
            {post.title}
          </h3>
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

export default function Blog() {
  const latest = posts.slice(0, 3)

  return (
    <section id="blog" className="section-container relative">
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex items-center justify-between mb-12">
        <h2 className="font-mono text-xl font-bold text-accent-indigo flex items-center gap-3">
          <span className="text-text-muted text-sm">05.</span> Blog
          <span className="w-24 h-px bg-border" />
        </h2>
        <Link
          to="/blog"
          className="flex items-center gap-1 font-mono text-xs text-text-muted hover:text-accent-indigo transition-colors"
        >
          All posts <ArrowUpRight size={12} />
        </Link>
      </div>

      {latest.length === 0 ? (
        <p className="font-mono text-text-muted text-sm">No posts yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((post, i) => <PostCard key={post.slug} post={post} index={i} />)}
        </div>
      )}
    </section>
  )
}
