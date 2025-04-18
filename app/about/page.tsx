export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="max-w-3xl">
        <p className="text-lg font-light mb-8">
          Hello! I'm Yoonjae Chang, a Business major and Architecture minor student at Seoul National University. 
          I'm passionate about combining business strategy with architectural design thinking to create innovative solutions.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Education</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-gray-800 dark:border-gray-800 pl-4">
            <h3 className="text-xl font-medium mb-1">Seoul National University</h3>
            <p className="text-gray-600 dark:text-gray-300 font-light">2020 - Present</p>
            <div className="mt-2 space-y-1 text-gray-600 dark:text-gray-300 font-light">
              <p>Major in Business Administration</p>
              <p>Minor in Architecture</p>
            </div>
          </div>

          <div className="border-l-4 border-gray-800 dark:border-gray-800 pl-4">
            <h3 className="text-xl font-medium mb-1">Daewon Foreign Language High School</h3>
            <p className="text-gray-600 dark:text-gray-300 font-light">2017 - 2019</p>
            <p className="mt-2 text-gray-600 dark:text-gray-300 font-light">
              English (Chinese) Major
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Experiences</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium mb-2">CES 2025</h3>
            <p className="text-gray-600 dark:text-gray-300 font-light">Las Vegas, JAN 2025</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium mb-2">SR & SNU-in</h3>
            <p className="text-gray-600 dark:text-gray-300 font-light">Malaysia, JAN 2024</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium mb-2">SSBM</h3>
            <p className="text-gray-600 dark:text-gray-300 font-light">SEP 2023 - AUG 2024</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-medium mb-2">Korean</h3>
            <p className="text-gray-600 dark:text-gray-300 font-light">Native</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-medium mb-2">English</h3>
            <p className="text-gray-600 dark:text-gray-300 font-light">Professional Proficiency</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-medium mb-4 text-lg">Design</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <div>
                <p className="font-normal mb-2">2D</p>
                <div className="space-y-2 ml-4 font-light">
                  <p>Adobe Illustrator</p>
                  <p>Adobe Photoshop</p>
                  <p>Adobe InDesign</p>
                  <p>AutoCAD</p>
                </div>
              </div>
              <div>
                <p className="font-normal mb-2">3D</p>
                <div className="space-y-2 ml-4 font-light">
                  <p>Rhino3D</p>
                  <p>V-Ray</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-medium mb-4 text-lg">Business</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
              <p>Equity Valuation</p>
              <p>Strategic Business Analysis</p>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-medium mb-4 text-lg">Development</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 