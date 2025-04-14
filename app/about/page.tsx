export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="max-w-3xl">
        <p className="text-lg mb-8">
          Hello! I'm Yoonjae Chang, a Business major and Architecture minor student at Seoul National University. 
          I'm passionate about combining business strategy with architectural design thinking to create innovative solutions.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">Education</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-gray-800 dark:border-gray-800 pl-4">
            <h3 className="text-xl font-semibold">Seoul National University</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">2020 - Present</p>
            <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
              <li>• Major in Business Administration</li>
              <li>• Minor in Architecture</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-800 dark:border-gray-800 pl-4">
            <h3 className="text-xl font-semibold">Daewon Foreign Language High School</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">2017 - 2019</p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              English (Chinese) Major
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Korean</h3>
            <p className="text-gray-600 dark:text-gray-300">Native</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-semibold mb-2">English</h3>
            <p className="text-gray-600 dark:text-gray-300">Professional Proficiency</p>
          </div>
        </div>
      </div>
    </div>
  )
} 