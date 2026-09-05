'use client'

import { useTypewriter } from './useTypewriter'

export default function Hero() {
  const typeText = useTypewriter()

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-8 pt-24 pb-16 relative overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full">

        {/* LEFT CONTENT */}
        <div className="space-y-6 animate-fadeUp">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Open to Opportunities
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <br />
            Muhamad Isbah Falaqiy
          </h1>

          {/* Typewriter */}
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold">{typeText}</span>
            <span className="w-0.75 h-6 bg-black animate-pulse"></span>
          </div>

          {/* About */}
          <p className="text-gray-600 max-w-xl leading-relaxed text-[15px] animate-fadeUp delay-200">
            Fullstack Web Developer based in Depok, Indonesia. I build modern and
            responsive web applications using <strong>Laravel, React, PHP, JavaScript, and TailwindCSS</strong>.
          </p>

          {/* Location & Availability */}
          <div className="flex gap-5 text-sm text-gray-500 animate-fadeUp delay-300">
            <span>📍 Depok, Indonesia</span>
            <span>🟢 Open to Work</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap animate-fadeUp delay-500">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:-translate-y-1 hover:shadow-lg transition"
            >
              Hire Me
            </a>

            <a
              href="/"
              className="px-6 py-3 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-100 hover:-translate-y-1 transition"
            >
              Download CV
            </a>
          </div>

        </div>

        {/* RIGHT CONTENT - PHOTO */}
        <div className="hidden md:flex items-center justify-center animate-fadeUp delay-500">
          <div className="w-72 h-80 relative rounded-3xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">

            {/* Photo Full */}
            <img
              src="/images/my-photo2.jpg" // pastikan file ada di public/images/
              alt="Muhamad Isbah Falaqiy"
              className="w-full h-full object-contain p-2" // object-contain supaya full photo terlihat
            />

            {/* Tags */}
            <div className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1 rounded-full shadow">
              Fullstack Dev
            </div>

            <div className="absolute bottom-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
              Available
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}