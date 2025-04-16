'use client'

import { useEffect } from 'react'

export default function Experiences() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount')
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('opacity-100', 'translate-y-0')
      }, index * 200)
    })
  }, [])

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out text-4xl font-bold mb-12">
        Experiences
      </h1>
      
      <div className="max-w-2xl mx-auto">
        <ul className="space-y-6">
          <li className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">CES 2025</h2>
              <p className="text-gray-600 dark:text-gray-300">Las Vegas, JAN 2025</p>
            </div>
          </li>
          
          <li className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">SR & SNU-in</h2>
              <p className="text-gray-600 dark:text-gray-300">Malaysia, JAN 2024</p>
            </div>
          </li>
          
          <li className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">SSBM</h2>
              <p className="text-gray-600 dark:text-gray-300">SEP 2023 - AUG 2024</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
} 