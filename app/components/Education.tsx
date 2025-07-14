"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Computer and Software Engineering",
      institution: "University of Rwanda, College of Science and Technology",
      period: "2022 – Present",
      description:
        "Currently pursuing a degree in Computer and Software Engineering with focus on full-stack development, software architecture, and modern programming practices.",
      status: "In Progress",
    },
    {
      degree: "Advanced Level - Mathematics, Physics, and Computer Science",
      institution: "FAWE Girls School",
      period: "2018 – 2021",
      description:
        "Graduated with a focus on Mathematics, Physics, and Computer Science, building a strong foundation in analytical thinking and problem-solving.",
      status: "Completed",
    },
    {
      degree: "Ordinary Level",
      institution: "Group Scholaire Officiel De Butare",
      period: "2015 – 2017",
      description: "Completed Ordinary Level education with excellent academic performance.",
      status: "Completed",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                        <p className="text-green-600 dark:text-green-400 font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === "In Progress"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-blue-100 text-green-800 dark:bg-blue-900/30 dark:text-green-400"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
