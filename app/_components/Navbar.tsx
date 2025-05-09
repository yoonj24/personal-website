'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Navigation component with solid background - Updated April 15
export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const pathname = usePathname()

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
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" className="text-2xl font-bold tracking-tight lowercase">
            yoonjae chang
          </Link>
          <div className="flex justify-center space-x-12">
            <Link href="/about" className={`${pathname === '/about' ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'} hover:text-gray-900 dark:hover:text-white px-3 py-2 text-lg font-bold tracking-wide`}>
              About
            </Link>
            <Link href="/works" className={`${pathname === '/works' ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'} hover:text-gray-900 dark:hover:text-white px-3 py-2 text-lg font-bold tracking-wide`}>
              Works
            </Link>
            <Link href="/contact" className={`${pathname === '/contact' ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'} hover:text-gray-900 dark:hover:text-white px-3 py-2 text-lg font-bold tracking-wide`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 