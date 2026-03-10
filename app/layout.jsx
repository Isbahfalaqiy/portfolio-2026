import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
})

export const metadata = {
  title: 'Muhamad Isbah Falaqiy — Fullstack Web Developer',
  description:
    'Portfolio of Muhamad Isbah Falaqiy, a Fullstack Web Developer from Depok, Indonesia specializing in Laravel, React, PHP, JavaScript, and TailwindCSS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}