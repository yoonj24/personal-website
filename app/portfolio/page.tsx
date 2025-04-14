import Image from 'next/image'

interface Project {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  link: string
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "A brief description of your first project. What problems did it solve? What technologies did you use?",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "/images/project1.jpg",
    link: "https://project1.com"
  },
  // Add more projects here
]

export default function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project. What problems did it solve? What technologies did you use?",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "Description of your second project. Highlight the key features and your role in development.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      title: "Project 3",
      description: "Overview of your third project. What makes it special? What did you learn?",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "#"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">My Portfolio</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 font-medium"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 