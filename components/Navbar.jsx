'use client'

import { useEffect, useState } from 'react'
import { AiFillHome, AiOutlineUser, AiOutlineProject, AiOutlineAppstore, AiOutlineMail } from 'react-icons/ai'

const navItems = [
  { label: 'Home', href: '#home', icon: <AiFillHome size={16} /> },
  { label: 'About', href: '#about', icon: <AiOutlineUser size={16} /> },
  { label: 'Projects', href: '#projects', icon: <AiOutlineProject size={16} /> },
  { label: 'Services', href: '#services', icon: <AiOutlineAppstore size={16} /> },
  { label: 'Contact', href: '#contact', icon: <AiOutlineMail size={16} /> },
]

export default function Navbar() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const onScroll = () => {
      let current = ''
      sections.forEach((sec) => {
        const sectionTop = sec.offsetTop - 120
        if (window.scrollY >= sectionTop) {
          current = sec.getAttribute('id')
        }
      })

      if (current) setActive(current)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    setActive(id)

    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-10 py-4 bg-[rgba(245,244,240,0.85)] backdrop-blur-md border-b border-black/10">
      <div className="flex items-center gap-2 bg-white border border-black/10 rounded-full px-3 py-2 shadow-md">
        {navItems.map((item) => {
          const id = item.href.replace('#', '')
          const isActive = active === id

          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${isActive ? 'bg-black text-white' : 'text-gray-700 hover:text-black hover:bg-gray-100'}
              `}
            >
              {item.icon}
              {item.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}