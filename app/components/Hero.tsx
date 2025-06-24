"use client"

import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/usandrine", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/umugwaneza-sandrine", label: "LinkedIn" },
    { icon: Mail, href: "mailto:umusandrine001@gmail.com", label: "Email" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              UMUGWANEZA
              <span className="block text-blue-600 dark:text-blue-400">Sandrine</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              Computer & Software Engineering Student
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">University of Rwanda | Full-Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300 mb-8"
          >
            <MapPin className="h-5 w-5" />
            <span>Kicukiro, Rwanda</span>
            <span className="mx-2">•</span>
            <Phone className="h-5 w-5" />
            <span>+250 783 639 809</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-4 mb-8"
          >
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </a>
              </Button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button
              size="lg"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
