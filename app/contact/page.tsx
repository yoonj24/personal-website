'use client'

import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount')
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('opacity-100', 'translate-y-0')
      }, index * 200) // Stagger the animations
    })
  }, [])

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out text-xl font-bold mb-8">
        Contact
      </h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 hover:shadow-lg transition-shadow">
          <p className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out text-gray-600 dark:text-gray-300 mb-6 font-light">
            Feel free to reach out to me for any inquiries or opportunities.
          </p>
          
          <div className="space-y-8">
            <div className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out transform hover:scale-[1.01] transition-transform">
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-medium">email</h3>
                <a 
                  href="mailto:yoonj24k@gmail.com"
                  className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-light"
                >
                  yoonj24k@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 