"use client"

import { useRef, useState } from "react"
import "./OurProjects.css"
import React from "react"

const OurProjects = () => {
  const sectionRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Web", "Mobile", "Enterprise"]

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web",
      image: "/placeholder.svg",
      description:
        "A full-featured e-commerce platform with inventory management, payment processing, and customer analytics.",
      link: "#",
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile",
      image: "/placeholder.svg",
      description:
        "A mobile application for patients to schedule appointments, access medical records, and communicate with healthcare providers.",
      link: "#",
    },
    {
      title: "Financial Dashboard",
      category: "Enterprise",
      image: "/placeholder.svg",
      description:
        "A comprehensive financial dashboard for enterprise clients to monitor and analyze business performance in real-time.",
      link: "#",
    },
    {
      title: "Social Media Platform",
      category: "Web",
      image: "/placeholder.svg",
      description:
        "A social networking platform with real-time messaging, content sharing, and community building features.",
      link: "#",
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile",
      image: "/placeholder.svg",
      description:
        "A mobile application that tracks workouts, nutrition, and provides personalized fitness recommendations.",
      link: "#",
    },
    {
      title: "Supply Chain Management",
      category: "Enterprise",
      image: "/placeholder.svg",
      description:
        "An enterprise solution for tracking inventory, managing suppliers, and optimizing logistics operations.",
      link: "#",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        <div className="project-categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-button ${activeCategory === category ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
                <div className="project-category-badge">{project.category}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link">
                  View Project
                  <svg
                    className="external-link-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="start-project">
          <button
            className="btn btn-primary"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}

export default OurProjects

