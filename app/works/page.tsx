'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const architectureProjects = [
  {
    id: 1,
    image: '/images/works_arch_1.jpg',
    caption: 'Villa Savoye, 2024 (team)'
  },
  {
    id: 2,
    image: '/images/works_arch_2.JPG',
    caption: 'Barcelona Pavilion, 2024'
  },
  {
    id: 3,
    image: '/images/works_arch_3.JPG',
    caption: 'Muted Flow Castings, 2024'
  },
  {
    id: 4,
    image: '/images/works_arch_4.JPG',
    caption: 'Wind Passage, 2024'
  },
  {
    id: 5,
    image: '/images/works_arch_5.jpg',
    caption: '서울대학교 관정, 2024 (team)'
  },
  {
    id: 6,
    image: '/images/works_arch_6.JPG',
    caption: 'STONE, LIGHT, LAND, 2024'
  },
  {
    id: 7,
    image: '/images/works_arch_7.JPG',
    caption: '너울목, 2024'
  }
]

export default function Works() {
  const [showSecondImage, setShowSecondImage] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount')
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('opacity-100', 'translate-y-0')
      }, index * 100) // Faster stagger for grid items
    })
  }, [])

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out text-4xl font-bold mb-12">Works</h1>

      {/* Architecture Section */}
      <section className="mb-20">
        <h2 className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out text-2xl font-semibold mb-8">Architecture</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {architectureProjects.map((project) => (
            <div key={project.id} className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out relative aspect-square group">
              <Image
                src={project.image}
                alt={`Architecture project ${project.id}`}
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Literary Works Section */}
      <section className="mb-20">
        <h2 className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out text-2xl font-semibold mb-8">Literary Works</h2>
        <div className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out text-xl font-semibold mb-4">시집 '나의 유일한 독자, 너에게'</h3>
          <p className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out text-gray-600 dark:text-gray-300 mb-4">2023</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div 
              className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500 ease-out relative aspect-square group cursor-pointer"
              onClick={() => setShowSecondImage(true)}
            >
              <Image
                src="/images/works_literary_1.jpg"
                alt="Literary work 1"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            {showSecondImage && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                <div className="relative w-full max-w-4xl mx-4">
                  <button 
                    className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
                    onClick={() => setShowSecondImage(false)}
                  >
                    ×
                  </button>
                  <Image
                    src="/images/works_literary_2.jpg"
                    alt="Literary work 2"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
} 