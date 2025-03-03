"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function OurTeam() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 15 years of experience in software development, Alex leads our team with vision and expertise.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sarah brings deep technical knowledge and innovative thinking to every project we undertake.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael's passion for clean code and elegant solutions drives our development standards.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Emily Patel",
      role: "UX/UI Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Emily creates intuitive, beautiful interfaces that enhance user experience and engagement.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ]

  return (
    <section id="team" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Meet the talented professionals who make Axion a leader in software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    <a
                      href={member.social.linkedin}
                      className="text-white hover:text-blue-400 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-white hover:text-blue-400 transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-white hover:text-blue-400 transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Join Our Team</h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            We're always looking for talented individuals who are passionate about technology and innovation. Check out
            our current openings or send us your resume.
          </p>
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
            View Openings
          </a>
        </motion.div>
      </div>
    </section>
  )
}

