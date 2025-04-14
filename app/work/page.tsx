import Image from 'next/image'
import Link from 'next/link'

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

export default function Work() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Works</h1>

      {/* Architecture Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">Architecture</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {architectureProjects.map((project) => (
            <div key={project.id} className="relative aspect-square group">
              <Image
                src={project.image}
                alt={`Architecture project ${project.id}`}
                fill
                className="object-cover"
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
        <h2 className="text-2xl font-semibold mb-8">Literary Works</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Poetry Collection</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A collection of poems exploring themes of [your themes]. Currently unpublished.
          </p>
          <div className="prose dark:prose-invert max-w-none">
            {/* Add a sample or description of your poetry work */}
          </div>
        </div>
      </section>

      {/* Design Projects Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9 relative">
              {/* Add your design project image here */}
              <div className="w-full h-48 bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Contest Project Name</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Description of your design project and the contest.</p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="mr-4">Contest Name, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">Professional Experience</h2>
        <div className="space-y-8">
          {/* CES 2025 Experience */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">CES 2025</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Staff Member</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">2025</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Description of your role and responsibilities at CES 2025.
            </p>
          </div>

          {/* Volunteer Work */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">Overseas Volunteer Work</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Location</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Year</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Description of your volunteer work and its impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 