import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative w-full">
      <div className="h-screen flex items-center justify-center px-4">
        <Image
          src="/images/mainpage.jpeg"
          alt="White architectural model showing a minimalist structural composition"
          width={1200}
          height={800}
          priority
          className="w-auto h-[80vh] object-contain"
        />
      </div>
    </main>
  )
}
