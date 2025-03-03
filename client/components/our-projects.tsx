"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

export default function OurProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Web", "Mobile", "Enterprise"]

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A full-featured e-commerce platform with inventory management, payment processing, and customer analytics.",
      link: "#",
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A mobile application for patients to schedule appointments, access medical records, and communicate with healthcare providers.",
      link: "#",
    },
    {
      title: "Financial Dashboard",
      category: "Enterprise",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A comprehensive financial dashboard for enterprise clients to monitor and analyze business performance in real-time.",
      link: "#",
    },
    {
      title: "Social Media Platform",
      category: "Web",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A social networking platform with real-time messaging, content sharing, and community building features.",
      link: "#",
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A mobile application that tracks workouts, nutrition, and provides personalized fitness recommendations.",
      link: "#",
    },
    {
      title: "Supply Chain Management",
      category: "Enterprise",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "An enterprise solution for tracking inventory, managing suppliers, and optimizing logistics operations.",
      link: "#",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-60 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}

