"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Profile</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Motivated Computer and Software Engineering student at the University of Rwanda, with a strong passion
                  for software development. Eager to apply technical skills and contribute to impactful projects.
                  Skilled in full-stack development, problem-solving, and innovative thinking.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I specialize in building modern web applications using cutting-edge technologies like React.js,
                  Next.js, Django, and Spring Boot. My experience spans from frontend development to backend systems and
                  mobile applications.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Personal Details</h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span className="font-medium">Nationality:</span>
                    <span>Rwandan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Gender:</span>
                    <span>Female</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Date of Birth:</span>
                    <span>20th February 2002</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Location:</span>
                    <span>Kicukiro, Rwanda</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Languages</h4>
                <div className="flex space-x-4 text-sm text-gray-600 dark:text-gray-300">
                  <span className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">English</span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">Kinyarwanda</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
