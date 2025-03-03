import "./Footer.css"
import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="footer-logo-text">AXION</span>
            </a>
            <p className="footer-description">
              Transforming ideas into digital reality with innovative software solutions that drive business growth.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon" aria-label="Facebook">
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
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
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
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
              <a href="#" className="social-icon" aria-label="GitHub">
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

          <div className="footer-links">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-menu">
              <li>
                <a href="#" className="footer-link">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-menu">
              <li>
                <a
                  href="#about"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("about")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("team")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3 className="footer-title">Newsletter</h3>
            <p className="footer-newsletter-description">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" className="newsletter-input" required />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Axion. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#" className="legal-link">
              Privacy Policy
            </a>
            <a href="#" className="legal-link">
              Terms of Service
            </a>
            <a href="#" className="legal-link">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

