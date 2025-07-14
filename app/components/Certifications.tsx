"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "Certificate in Software Development",
      issuer: "Power Learn Project",
      date: "December 2024",
      description:
        "Comprehensive software development program covering modern programming practices, frameworks, and industry best practices.",
      recent: true,
    },
    {
      title: "Artificial Intelligence Certificate",
      issuer: "ALX",
      date: "June 2024",
      description:
        "Advanced certification in AI fundamentals, machine learning algorithms, and practical AI implementation.",
      recent: false,
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Training
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                        <p className="text-green-600 dark:text-green-400 font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    {cert.recent && (
                      <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                        Recent
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
