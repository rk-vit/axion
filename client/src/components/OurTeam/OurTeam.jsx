"use client"

import { useRef } from "react"
import "./OurTeam.css"
import React from "react"

const OurTeam = () => {
  const sectionRef = useRef(null)

  const team = [
    {
      name: "M Revanth Kanna",
      role: "Full stack Engineer",
      image: "/revanth.jpg/",
      bio: "Full Stack Engineer passionate about building scalable and efficient web applications.",
      social: {
        linkedin: "www.linkedin.com/in/revanth-kanna-m-168ba6244/",
        github: "https://github.com/rk-vit",
      },
    },
    {
      name: "Naveen Kumar",
      role: "UI/UX Dev",
      image: "/naveen.jpg",
      bio: "Sarah brings deep technical knowledge and innovative thinking to every project we undertake.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Ithihas Tiruvenkatadurai",
      role: "SocialMedia and Marketing",
      image: "/ithihas.jpg",
      bio: "Michael's passion for clean code and elegant solutions drives our development standards.",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
  ]

  return (
    <section id="team" className="team-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Team</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Meet the talented professionals who make Axion a leader in software development.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image-container">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="member-image" />
                <div className="member-social">
                  <div className="social-links">
                    <a href={member.social.linkedin} className="social-link" aria-label={`${member.name}'s LinkedIn`}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href={member.social.github} className="social-link" aria-label={`${member.name}'s GitHub`}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="join-team">
          <h3 className="join-team-title">Join Our Team</h3>
          <p className="join-team-description">
            We're always looking for talented individuals who are passionate about technology and innovation. Check out
            our current openings or send us your resume.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
          >
            View Openings
          </button>
        </div>
      </div>
    </section>
  )
}

export default OurTeam

