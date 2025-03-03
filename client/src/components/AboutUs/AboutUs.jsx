"use client"

import { useRef } from "react"
import "./AboutUs.css"
import React from "react"

const AboutUs = () => {
  const sectionRef = useRef(null)

  const features = [
    {
      icon: (
        <svg
          className="feature-icon"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      ),
      title: "Innovative Solutions",
      description: "We create cutting-edge software that solves complex business challenges.",
    },
    {
      icon: (
        <svg
          className="feature-icon"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      title: "Quality Code",
      description: "Our development practices ensure scalable, maintainable, and secure applications.",
    },
    {
      icon: (
        <svg
          className="feature-icon"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "Client-Focused",
      description: "We prioritize your needs and work collaboratively to exceed expectations.",
    },
    {
      icon: (
        <svg
          className="feature-icon"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      title: "Fast Delivery",
      description: "Our agile approach ensures timely delivery without compromising quality.",
    },
  ]

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="highlight">Axion</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Axion is a forward-thinking software development firm dedicated to creating exceptional digital experiences.
            We combine technical expertise with creative problem-solving to deliver solutions that drive business
            success.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mission-vision-card">
          <div className="mission-vision-grid">
            <div className="mission-vision-content">
              <h3 className="mission-vision-title">Our Mission</h3>
              <p className="mission-vision-description">
                At Axion, our mission is to empower businesses through technology. We strive to create software that not
                only meets current needs but anticipates future challenges, providing our clients with a competitive
                edge in their industries.
              </p>
              <h3 className="mission-vision-title">Our Vision</h3>
              <p className="mission-vision-description">
                We envision a world where technology enhances human potential. Our goal is to be at the forefront of
                this transformation, creating solutions that make businesses more efficient, more connected, and more
                successful.
              </p>
            </div>
            <div className="quote-box">
              <blockquote className="quote">
                "We don't just build software; we build relationships and solutions that stand the test of time."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

