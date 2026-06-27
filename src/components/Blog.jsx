import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import Section from './ui/Section'
import AnimatedItem from './ui/AnimatedItem'
import BlogPlaceholder from './ui/BlogPlaceholder'

function PostItem({ post, index }) {
  return (
    <AnimatedItem index={index} as={Link} to={`/blog/${post.slug}`}
      className="group flex gap-4 py-4 border-b border-border/50 last:border-b-0 hover:pl-1"
    >
      <div className="w-16 h-12 rounded overflow-hidden shrink-0">
        {post.image
          ? <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          : <BlogPlaceholder title={post.title} className="w-full h-full" />
        }
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-xs text-text-secondary group-hover:text-accent transition-colors duration-300 truncate">
            {post.title}
          </span>
          <time className="text-[10px] text-text-muted shrink-0">
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
          </time>
        </div>
        {post.tags.length > 0 && (
          <div className="flex gap-2 mt-1">
            {post.tags.slice(0, 3).map(t => (
              <span key={t} className="text-[10px] text-accent-green">#{t}</span>
            ))}
          </div>
        )}
      </div>
    </AnimatedItem>
  )
}

export default function Blog() {
  const latest = posts.slice(0, 5)

  return (
    <Section id="blog">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-sans text-2xl font-bold text-text">Writing</h2>
        <Link to="/blog" className="text-[11px] text-text-muted hover:text-accent link-animated transition-colors">
          all posts →
        </Link>
      </div>

      {latest.length === 0 ? (
        <p className="text-xs text-text-muted">No posts yet.</p>
      ) : (
        <div>
          {latest.map((post, i) => <PostItem key={post.slug} post={post} index={i} />)}
        </div>
      )}
    </Section>
  )
}
