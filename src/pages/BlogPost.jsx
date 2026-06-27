import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getPost } from '../data/posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogPlaceholder from '../components/ui/BlogPlaceholder'
import MiniGraph from '../components/ui/MiniGraph'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  useEffect(() => {
    if (!post) return
    const prevTitle = document.title
    document.title = `${post.title} — Abhinav Gupta`

    const setMeta = (name, content, prop = false) => {
      const sel = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let el = document.querySelector(sel)
      if (!el) {
        el = document.createElement('meta')
        prop ? el.setAttribute('property', name) : el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
      return el
    }

    const url = `https://navknight.github.io/blog/${post.slug}`
    setMeta('description', post.description)
    setMeta('og:title', post.title, true)
    setMeta('og:description', post.description, true)
    setMeta('og:url', url, true)
    setMeta('og:type', 'article', true)

    return () => { document.title = prevTitle }
  }, [post])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-24 px-6 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-[11px] text-text-muted hover:text-accent link-animated transition-colors mb-8"
          >
            <ArrowLeft size={12} /> all posts
          </Link>

          {!post ? (
            <div>
              <p className="text-sm text-text-muted">Post not found.</p>
              <Link to="/blog" className="text-xs text-text-muted hover:text-accent underline underline-offset-2 mt-3 inline-block">
                ← Back to blog
              </Link>
            </div>
          ) : (
            <article>
              <div className="rounded-lg overflow-hidden mb-8 h-56 md:h-72">
                {post.image
                  ? <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  : <BlogPlaceholder title={post.title} className="w-full h-full" />
                }
              </div>

              <header className="mb-10">
                <h1 className="font-sans text-xl font-bold text-text mb-3">{post.title}</h1>
                <div className="flex items-center gap-3 flex-wrap">
                  <time className="text-[11px] text-text-muted">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <div className="flex gap-2">
                    {post.tags.map(t => (
                      <span key={t} className="text-[10px] text-accent-green">#{t}</span>
                    ))}
                  </div>
                </div>
              </header>

              <div className="mb-8">
                <MiniGraph nodeId={`blog:${post.slug}`} />
              </div>

              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </article>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
