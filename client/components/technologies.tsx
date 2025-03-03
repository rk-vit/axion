"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const technologies = [
    {
      category: "Frontend",
      techs: [
        { name: "React", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Angular", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Vue.js", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Next.js", icon: "/placeholder.svg?height=60&width=60" },
      ],
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Python", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Java", icon: "/placeholder.svg?height=60&width=60" },
        { name: ".NET", icon: "/placeholder.svg?height=60&width=60" },
      ],
    },
    {
      category: "Database",
      techs: [
        { name: "MongoDB", icon: "/placeholder.svg?height=60&width=60" },
        { name: "PostgreSQL", icon: "/placeholder.svg?height=60&width=60" },
        { name: "MySQL", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Firebase", icon: "/placeholder.svg?height=60&width=60" },
      ],
    },
    {
      category: "DevOps",
      techs: [
        { name: "Docker", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Kubernetes", icon: "/placeholder.svg?height=60&width=60" },
        { name: "AWS", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Azure", icon: "/placeholder.svg?height=60&width=60" },
      ],
    },
  ]

  return (
    <section id="technologies" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We leverage cutting-edge technologies to build robust, scalable, and efficient software solutions for our
            clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-blue-600">{category.category}</h3>
              <div className="grid grid-cols-2 gap-6">
                {category.techs.map((tech, techIndex) => (
                  <div key={techIndex} className="flex flex-col items-center justify-center group">
                    <div className="w-16 h-16 mb-3 rounded-full bg-gray-100 flex items-center justify-center p-3 group-hover:bg-blue-50 transition-colors">
                      <img
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Always Learning, Always Evolving</h3>
              <p className="mb-6">
                Technology never stands still, and neither do we. Our team continuously explores new tools, frameworks,
                and methodologies to ensure we're always offering the most effective solutions.
              </p>
              <p>
                Whether you need a solution built with established technologies for stability or cutting-edge tools for
                innovation, we have the expertise to deliver.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <img
                    src={`/placeholder.svg?height=40&width=40`}
                    alt={`Technology ${item}`}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

