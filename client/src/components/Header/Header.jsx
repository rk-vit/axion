"use client"

import { useState, useEffect } from "react"
import "./Header.css"
import React from "react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <a href="/" className="logo">
          <span className="logo-text">AXION</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {[
            { name: "About", id: "about" },
            { name: "Process", id: "process" },
            { name: "Technologies", id: "technologies" },
            { name: "Team", id: "team" },
            { name: "Projects", id: "projects" },
          ].map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className="nav-item">
              {item.name}
            </button>
          ))}
          <button onClick={() => scrollToSection("contact")} className="btn btn-primary">
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          {[
            { name: "About", id: "about" },
            { name: "Process", id: "process" },
            { name: "Technologies", id: "technologies" },
            { name: "Team", id: "team" },
            { name: "Projects", id: "projects" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className="mobile-nav-item">
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header

