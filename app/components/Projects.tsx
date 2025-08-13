"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    
     {
    title: "Full Basic Student Management System",
    description:
      "A modern web-based platform for managing student information, courses, and performance, featuring a clean UI and secure role-based access.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://full-basic-student-management-syste.vercel.app/",
    featured: true,
  },
    {
      title: "Employee Training Portal",
      description:
        "A Next.js Employee Training Portal designed to simulate an HRTech/EdTech platform, enabling users to browse and enroll in training courses.",
      technologies: ["Next.js", "Redux Toolkit", "Tailwind CSS", "MongoDB"],
      liveUrl: "https://my-employee-training-portal-course.vercel.app",
      featured: true,
    },
    {
      title: "React Website",
      description: "A modern React website showcasing responsive design and interactive components.",
      technologies: ["React.js", "CSS", "JavaScript"],
      liveUrl: "https://reactwebsite-taupe.vercel.app/",
      featured: true,
    },
    {
      title: "UI Components Library",
      description: "A collection of reusable UI components built with modern web technologies.",
      technologies: ["React.js", "CSS", "JavaScript"],
      liveUrl: "https://ui-components-eu3uz6ca4-usandrines-projects.vercel.app/",
      featured: true,
    },
    {
      title: "Health Care Appointment System",
      description:
        "A web-based healthcare appointment booking system with patient registration, doctor scheduling, and appointment management.",
      technologies: ["Spring Boot", "Spring Security", "Spring Data JPA"],
      githubUrl: "https://github.com/usandrine",
    },
    {
      title: "Blog Platform",
      description: "A full-stack blog platform with CRUD operations, user authentication, and comment system.",
      technologies: ["Spring Boot", "Spring Security", "Spring Data JPA"],
      githubUrl: "https://github.com/usandrine",
    },
    {
      title: "Baby Nourish App",
      description:
        "A mobile application providing personalized feeding recommendations for babies with growth tracking features.",
      technologies: ["Flutter", "Dart"],
      githubUrl: "https://github.com/usandrine",
    },
    {
      title: "Crop Yield Tool",
      description:
        "A Django-based project to assist in determining the best crop to plant on a given piece of land using predictive algorithms.",
      technologies: ["Django", "Python", "Machine Learning"],
      githubUrl: "https://github.com/usandrine",
    },
    {
      title: "Easy-Buy Website",
      description:
        "A commercial website with user-friendly interfaces, product listing, and customer interaction features.",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/usandrine",
    },
    {
      title: "Exam Sitting Arrangement",
      description:
        "A Java application to help students locate their assigned seats based on faculty and registration numbers.",
      technologies: ["Java"],
      githubUrl: "https://github.com/usandrine",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full hover:shadow-lg transition-shadow ${project.featured ? "ring-2 ring-green-500" : ""}`}
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    {project.title}
                    {project.featured && (
                      <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Live</span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2 pt-4">
                    {project.liveUrl && (
                      <Button size="sm" asChild  className="bg-green-500 hover:bg-green-600 text-black" >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
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
