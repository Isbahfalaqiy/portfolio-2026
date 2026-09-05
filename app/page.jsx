'use client'

import { useScrollReveal } from '@/components/useScrollReveal'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Services from '@/components/Certificate'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}