"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, Smartphone, Network, Users } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "Java", "Python", "C++", "PHP", "Dart"],
      color: "bg-blue-500",
    },
    {
      icon: Globe,
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "TailWind CSS", "HTML", "CSS"],
      color: "bg-green-500",
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["Django", "Node.js", "SpringBoot", "SQL", "MySQL", "MongoDB", "PostgreSQL"],
      color: "bg-purple-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["Flutter", "Dart"],
      color: "bg-orange-500",
    },
    {
      icon: Network,
      title: "Networking & IT",
      skills: ["CCNA1", "CCNA2", "IT Essentials"],
      color: "bg-red-500",
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Leadership", "Management", "Negotiation", "Critical Thinking", "Teamwork", "Creativity"],
      color: "bg-indigo-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
