import React from 'react'

export default function Experiences() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Experiences</h1>

      {/* Activities & Experience Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">Activities & Experience</h2>
        <div className="space-y-8">
          {/* CES 2025 Experience */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">CES 2025</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Booth Staff - SNU Pavilion</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2025</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Served as booth staff at the SNU Pavilion, specifically representing INTEGRA Semiconductor booth at CES 2025.
            </p>
          </div>

          {/* Volunteer Work */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">Seoul National University Social Responsibility</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Student Volunteer - Sabah, Malaysia</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2024</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              • Education program for stilt village children<br />
              • Seaside Plogging<br />
              • Environment Campaign
            </p>
          </div>
        </div>
      </section>

      {/* Academic Activities Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">Academic Activities</h2>
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">Society for Sustainable Business Management (SSBM)</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">서울대학교 지속가능경영학회</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <p className="text-gray-600 dark:text-gray-300">President</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">Feb 2024 - Aug 2024</span>
              </div>
              <div className="flex justify-between items-start">
                <p className="text-gray-600 dark:text-gray-300">General Member</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">Sep 2023 - Jan 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 