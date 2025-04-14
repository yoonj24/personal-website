export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Feel free to reach out to me for any inquiries or opportunities.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a 
                href="mailto:yoonj24k@gmail.com"
                className="text-white hover:opacity-60 transition-opacity"
              >
                yoonj24k@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 