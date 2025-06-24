import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/theme-provider"
import Navigation from "./components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Umugwaneza Sandrine - Software Engineer",
  description:
    "Computer and Software Engineering student at University of Rwanda. Full-stack developer passionate about creating impactful software solutions.",
  keywords: "Software Engineer, Full Stack Developer, React, Next.js, Django, Spring Boot, Rwanda",
  authors: [{ name: "Umugwaneza Sandrine" }],
  openGraph: {
    title: "Umugwaneza Sandrine - Software Engineer",
    description: "Computer and Software Engineering student specializing in full-stack development",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
