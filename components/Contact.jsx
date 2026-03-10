'use client'

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)

export default function Contact() {
  return (
    <section id="contact" className="px-8 py-20 max-w-3xl mx-auto text-center">
      <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
        Get In Touch
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
        Let's Work Together
      </h2>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md space-y-5">
        <p className="text-gray-600 text-sm leading-relaxed">
          Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.
        </p>

        {/* Email */}
        <a
          href="mailto:isbahfalaqiy61@gmail.com"
          className="block font-bold text-lg text-black border-b-2 border-black hover:opacity-70 transition duration-200"
        >
          isbahfalaqiy61@gmail.com
        </a>

        {/* Say Hello Button */}
        <a
          href="mailto:isbahfalaqiy61@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium bg-black text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200 mt-3"
        >
          ✉ Say Hello
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mt-6">
          {[
            { icon: <GitHubIcon />, title: 'GitHub', href: 'https://github.com/Isbahfalaqiy' },
            { icon: <LinkedInIcon />, title: 'LinkedIn', href: 'https://www.linkedin.com/in/muhamad-isbah-falaqiy-1b4a6724a/' },
            { icon: <InstagramIcon />, title: 'Instagram', href: 'https://www.instagram.com/isbaah.f/' },
          ].map(({ icon, title, href }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}