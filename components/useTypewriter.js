'use client'

import { useEffect, useState } from 'react'

const roles = [
  'Fullstack Web Developer',
  'Frontend Developer',
  'Web Development Enthusiast'
]

export function useTypewriter() {
  const [text, setText] = useState('')

  useEffect(() => {
    let roleIndex = 0
    let charIndex = 0
    let deleting = false
    let timer

    function type() {
      const current = roles[roleIndex]

      if (!deleting) {
        setText(current.slice(0, ++charIndex))

        if (charIndex === current.length) {
          deleting = true
          timer = setTimeout(type, 1800)
          return
        }

      } else {
        setText(current.slice(0, --charIndex))

        if (charIndex === 0) {
          deleting = false
          roleIndex = (roleIndex + 1) % roles.length
        }
      }

      timer = setTimeout(type, deleting ? 60 : 90)
    }

    type()
    return () => clearTimeout(timer)
  }, [])

  return text
}