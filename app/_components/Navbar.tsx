'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Navigation component with solid background - Updated April 15
export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      
      // Show navbar at the very top (within first 10 pixels)
      if (currentScrollPos < 10) {
        setVisible(true)
        setPrevScrollPos(currentScrollPos)
        return
      }

      // Otherwise, show/hide based on scroll direction
      setVisible(prevScrollPos > currentScrollPos)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white dark:bg-black border-b border-black/10 dark:border-white/10 z-50 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-screen-2xl mx-auto px-8 py-4">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Yoonjae Chang
          </Link>
          <div className="flex justify-between w-full">
            <Link href="/about" className={`${router.pathname === '/about' ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'} hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium`}>
              About
            </Link>
            <Link href="/experiences" className={`${router.pathname === '/experiences' ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'} hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium`}>
              Experiences
            </Link>
            <Link href="/works" className={`${router.pathname === '/works' ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'} hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium`}>
              Works
            </Link>
            <Link href="/contact" className="text-2xl font-light hover:opacity-60 transition-opacity">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 