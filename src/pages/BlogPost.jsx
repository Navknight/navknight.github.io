import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getPost } from '../data/posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ParticleField from '../components/ParticleField'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  return (
    <div className="relative min-h-screen">
      <ParticleField />
      <Navbar />
      <main className="section-container max-w-2xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-accent-indigo transition-colors mb-10"
        >
          <ArrowLeft size={13} /> All posts
        </Link>

        {!post ? (
          <div className="glass rounded-2xl p-8 border border-white/5 text-center">
            <p className="font-mono text-text-muted text-sm">Post not found.</p>
            <Link to="/blog" className="font-mono text-xs text-accent-indigo hover:underline mt-3 inline-block">
              ← Back to blog
            </Link>
          </div>
        ) : (
          <article>
            {post.image && (
              <div className="rounded-2xl overflow-hidden mb-8 h-64 md:h-80">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
            )}

            <header className="mb-10">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-accent-indigo bg-accent-indigo/10 rounded-lg border border-accent-indigo/20">
                    {t}
                  </span>
                ))}
              </div>
              <h1 className="text-2xl font-bold text-text mb-3">{post.title}</h1>
              <time className="font-mono text-xs text-text-muted">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </header>

            <div
              className="glass rounded-2xl p-8 border border-white/5 prose"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>
        )}
      </main>
      <Footer />
    </div>
  )
}
