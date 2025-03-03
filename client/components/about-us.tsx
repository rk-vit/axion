"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Lightbulb, Users, Zap } from "lucide-react"

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <Lightbulb className="h-10 w-10 text-blue-600" />,
      title: "Innovative Solutions",
      description: "We create cutting-edge software that solves complex business challenges.",
    },
    {
      icon: <Code className="h-10 w-10 text-blue-600" />,
      title: "Quality Code",
      description: "Our development practices ensure scalable, maintainable, and secure applications.",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Client-Focused",
      description: "We prioritize your needs and work collaboratively to exceed expectations.",
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-600" />,
      title: "Fast Delivery",
      description: "Our agile approach ensures timely delivery without compromising quality.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-600">Axion</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Axion is a forward-thinking software development firm dedicated to creating exceptional digital experiences.
            We combine technical expertise with creative problem-solving to deliver solutions that drive business
            success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                At Axion, our mission is to empower businesses through technology. We strive to create software that not
                only meets current needs but anticipates future challenges, providing our clients with a competitive
                edge in their industries.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                We envision a world where technology enhances human potential. Our goal is to be at the forefront of
                this transformation, creating solutions that make businesses more efficient, more connected, and more
                successful.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-90 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white p-8">
                <blockquote className="text-xl italic">
                  "We don't just build software; we build relationships and solutions that stand the test of time."
                </blockquote>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

