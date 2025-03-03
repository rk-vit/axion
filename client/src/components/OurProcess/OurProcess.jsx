"use client"

import { useRef, useState } from "react"
import "./OurProcess.css"
import React from "react"

const OurProcess = () => {
  const sectionRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: (
        <svg
          className="step-icon"
          width="48"
          height="48"
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
      title: "Code",
      description:
        "Our expert developers write clean, efficient code using the latest technologies and best practices. We focus on creating scalable, maintainable solutions that meet your specific requirements.",
      color: "#2563eb",
    },
    {
      icon: (
        <svg
          className="step-icon"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19.9 11.6h.1M19.9 11.6h.1"></path>
          <path d="M14 16.25l-2.25-2m2.25 2L14 18.5m0-2.25h4.25"></path>
          <path d="M2.5 10.25l1.5 2.25m-1.5-2.25l-1.5 2.25m1.5-2.25v4.5"></path>
          <path d="M10 2.75l2.25 1.5m-2.25-1.5L7.75 4.25m2.25-1.5v4.5"></path>
          <path d="M18 2.75l2.25 1.5m-2.25-1.5l-2.25 1.5m2.25-1.5v4.5"></path>
          <path d="M22 12a10 10 0 11-20 0 10 10 0 0120 0z"></path>
        </svg>
      ),
      title: "Test",
      description:
        "We rigorously test all aspects of your software to ensure functionality, performance, and security. Our comprehensive testing approach includes unit tests, integration tests, and user acceptance testing.",
      color: "#9333ea",
    },
    {
      icon: (
        <svg
          className="step-icon"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
        </svg>
      ),
      title: "Deploy",
      description:
        "We use automated CI/CD pipelines to ensure smooth, reliable deployments. Our deployment process minimizes downtime and ensures your software is available to users quickly and efficiently.",
      color: "#06b6d4",
    },
  ]

  return (
    <section id="process" className="process-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Process</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Our streamlined development process ensures efficient delivery of high-quality software solutions that meet
            your business needs.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-card ${activeStep === index ? "active" : ""}`}
              onMouseEnter={() => setActiveStep(index)}
              onClick={() => setActiveStep(index)}
            >
              <div className="step-header" style={{ backgroundColor: step.color }}>
                <div className="step-icon-wrapper">{step.icon}</div>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process-details">
          <div className="process-details-grid">
            <div className="process-details-content">
              <h3 className="process-details-title">Why Our Process Works</h3>
              <ul className="process-details-list">
                <li className="process-details-item">
                  <div className="process-details-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="process-details-item-title">Agile Methodology</h4>
                    <p className="process-details-item-description">
                      We embrace agile principles, allowing for flexibility, collaboration, and iterative development.
                    </p>
                  </div>
                </li>
                <li className="process-details-item">
                  <div className="process-details-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="process-details-item-title">Continuous Integration</h4>
                    <p className="process-details-item-description">
                      Our CI/CD pipeline ensures code quality and reduces time to market.
                    </p>
                  </div>
                </li>
                <li className="process-details-item">
                  <div className="process-details-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="process-details-item-title">Client Collaboration</h4>
                    <p className="process-details-item-description">
                      We involve you at every step, ensuring the final product aligns with your vision.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="process-improvement">
              <h3 className="process-improvement-title">Continuous Improvement</h3>
              <p className="process-improvement-description">
                Our process isn't static. We continuously refine our approach based on feedback and emerging best
                practices to deliver better results with each project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProcess

