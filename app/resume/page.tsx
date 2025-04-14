export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Resume</h1>
      
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Your University</h3>
              <p className="text-gray-600 dark:text-gray-300">Bachelor of Science in Computer Science</p>
              <p className="text-gray-500">2018 - 2022</p>
            </div>
            {/* Add more education entries */}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p className="text-gray-600 dark:text-gray-300">Company Name</p>
              <p className="text-gray-500">2022 - Present</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Developed and maintained web applications using React and Node.js</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software</li>
                <li>Implemented responsive designs and improved application performance</li>
              </ul>
            </div>
            {/* Add more experience entries */}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold mb-2">Programming Languages</h3>
              <ul className="list-disc list-inside">
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="list-disc list-inside">
                <li>React</li>
                <li>Next.js</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="list-disc list-inside">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Download Button */}
        <div className="text-center">
          <a
            href="/your-resume.pdf"
            download
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  )
} 