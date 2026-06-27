import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { NAV_SECTIONS } from './data/navigation'
import useKeyboardNav from './hooks/useKeyboardNav'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Interactive from './components/Interactive'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Watermark from './components/Watermark'
import ScrollProgress from './components/ui/ScrollProgress'

import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'

function Portfolio() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])
  useKeyboardNav(NAV_SECTIONS)

  return (
    <div className={`relative min-h-screen transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <ScrollProgress />
      <Watermark />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Interactive />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}
