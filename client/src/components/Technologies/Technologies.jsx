"use client"

import { useRef } from "react"
import "./Technologies.css"
import React from "react"

const Technologies = () => {
  const sectionRef = useRef(null)

  const technologies = [
    {
      category: "Frontend",
      techs: [
        { name: "React", icon: "/React-icon.svg" },
        { name: "Angular", icon: "/Angular.svg" },
        { name: "Vue.js", icon: "/Vue.svg" },
        { name: "Next.js", icon: "/Nextjs-logo.svg" },
      ],
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", icon: "/Node.js.svg" },
        { name: "Python", icon: "/Python.svg" },
        { name: "Java", icon: "/java-ar21.svg" },
        { name: ".NET", icon: "/DotNet_logo.svg" },
      ],
    },
    {
      category: "Database",
      techs: [
        { name: "MongoDB", icon: "/MongoDB.svg" },
        { name: "PostgreSQL", icon: "/Postgresq.svg" },
        { name: "MySQL", icon: "/MySQL.svg" },
        { name: "Firebase", icon: "/Firebase.svg" },
      ],
    },
    {
      category: "DevOps",
      techs: [
        { name: "Docker", icon: "Dockersvg.svg" },
        { name: "Kubernetes", icon: "/Kubernetes.svg" },
        { name: "Google Cloud", icon: "/Google_Cloud.svg" },
        { name: "Vercel", icon: "/vercel.svg" },
      ],
    },
  ]

  return (
    <section id="technologies" className="technologies-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technologies We Use</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            We leverage cutting-edge technologies to build robust, scalable, and efficient software solutions for our
            clients.
          </p>
        </div>

        <div className="tech-categories">
          {technologies.map((category, categoryIndex) => (
            <div key={categoryIndex} className="tech-category">
              <h3 className="tech-category-title">{category.category}</h3>
              <div className="tech-grid">
                {category.techs.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-item">
                    <div className="tech-icon-wrapper">
                      <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="tech-icon" />
                    </div>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-evolution">
          <div className="tech-evolution-grid">
            <div className="tech-evolution-content">
              <h3 className="tech-evolution-title">Always Learning, Always Evolving</h3>
              <p className="tech-evolution-description">
                Technology never stands still, and neither do we. Our team continuously explores new tools, frameworks,
                and methodologies to ensure we're always offering the most effective solutions.
              </p>
              <p className="tech-evolution-description">
                Whether you need a solution built with established technologies for stability or cutting-edge tools for
                innovation, we have the expertise to deliver.
              </p>
            </div>
            <div className="tech-evolution-showcase">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="tech-showcase-item">
                  <img src="/placeholder.svg" alt={`Technology ${item}`} className="tech-showcase-icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies

