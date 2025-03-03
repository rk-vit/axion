"use client"

import { useEffect, useRef } from "react"
import "./HeroSection.css"
import React from "react"

const HeroSection = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []

    const createParticles = () => {
      // Increased particle count for more intensity
      const particleCount = Math.min(
        Math.floor(window.innerWidth / 4), // Increased from /5 to /4
        250, // Increased from 200 to 250
      )

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1, // Increased size from 3+1 to 4+1
          speedX: (Math.random() - 0.5) * 1, // Increased speed from 0.8 to 1
          speedY: (Math.random() - 0.5) * 1,
          color: `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(
            Math.random() * 150 + 100,
          )}, ${Math.floor(Math.random() * 100 + 155)}, ${
            Math.random() * 0.8 + 0.2 // Increased opacity from 0.7+0.3 to 0.8+0.2
          })`,
        })
      }
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Increased connection distance from 150 to 180
          if (distance < 180) {
            ctx.beginPath()
            // Increased opacity by reducing the divisor from 400 to 350
            ctx.strokeStyle = `rgba(100, 150, 255, ${0.35 - distance / 350})`
            ctx.lineWidth = 1 // Increased from 0.8 to 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x > canvas.width) p.x = 0
        else if (p.x < 0) p.x = canvas.width
        if (p.y > canvas.height) p.y = 0
        else if (p.y < 0) p.y = canvas.height
      }

      connectParticles()
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-title-wrapper">
            <h1 className="hero-title">Transforming Ideas Into Digital Reality</h1>
          </div>

          <div className="hero-description-wrapper">
            <p className="hero-description">
              We build innovative software solutions that drive business growth and enhance user experiences.
            </p>
          </div>

          <div className="hero-buttons-wrapper">
            <button onClick={scrollToContact} className="btn btn-primary btn-lg">
              Get Started
            </button>
            <button onClick={scrollToAbout} className="btn btn-secondary btn-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <button onClick={scrollToAbout} className="scroll-button" aria-label="Scroll down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default HeroSection

