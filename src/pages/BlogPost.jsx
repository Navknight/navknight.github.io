import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getPost } from '../data/posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="section-wrap flex-1 pt-24 max-w-3xl mx-auto">
        <div className="content-area">
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
              {post.image && (
                <div className="rounded-lg overflow-hidden mb-8 h-56 md:h-72">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}

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
