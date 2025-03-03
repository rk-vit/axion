"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code, TestTube, Rocket } from "lucide-react"

export default function OurProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: <Code className="h-12 w-12 text-white" />,
      title: "Code",
      description:
        "Our expert developers write clean, efficient code using the latest technologies and best practices. We focus on creating scalable, maintainable solutions that meet your specific requirements.",
      color: "bg-blue-600",
    },
    {
      icon: <TestTube className="h-12 w-12 text-white" />,
      title: "Test",
      description:
        "We rigorously test all aspects of your software to ensure functionality, performance, and security. Our comprehensive testing approach includes unit tests, integration tests, and user acceptance testing.",
      color: "bg-purple-600",
    },
    {
      icon: <Rocket className="h-12 w-12 text-white" />,
      title: "Deploy",
      description:
        "We use automated CI/CD pipelines to ensure smooth, reliable deployments. Our deployment process minimizes downtime and ensures your software is available to users quickly and efficiently.",
      color: "bg-cyan-600",
    },
  ]

  return (
    <section id="process" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Our streamlined development process ensures efficient delivery of high-quality software solutions that meet
            your business needs.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex-1 rounded-lg shadow-lg overflow-hidden ${
                activeStep === index ? "ring-4 ring-blue-200" : ""
              }`}
              onMouseEnter={() => setActiveStep(index)}
              onClick={() => setActiveStep(index)}
            >
              <div className={`${step.color} p-6 flex items-center justify-center`}>
                <div className="rounded-full bg-white/20 p-4">{step.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-50 p-8 rounded-lg shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Our Process Works</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Agile Methodology</h4>
                    <p className="text-gray-600">
                      We embrace agile principles, allowing for flexibility, collaboration, and iterative development.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Continuous Integration</h4>
                    <p className="text-gray-600">Our CI/CD pipeline ensures code quality and reduces time to market.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Client Collaboration</h4>
                    <p className="text-gray-600">
                      We involve you at every step, ensuring the final product aligns with your vision.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-2xl font-bold mb-2">Continuous Improvement</h3>
                  <p>
                    Our process isn't static. We continuously refine our approach based on feedback and emerging best
                    practices to deliver better results with each project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

