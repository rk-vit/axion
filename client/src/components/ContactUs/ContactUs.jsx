"use client"

import { useRef, useState } from "react"
import "./ContactUs.css"
import React from "react"

const ContactUs = () => {
  const sectionRef = useRef(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: (
        <svg
          className="contact-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: "Email",
      content: "info@axion.com",
      link: "mailto:info@axion.com",
    },
    {
      icon: (
        <svg
          className="contact-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: (
        <svg
          className="contact-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Address",
      content: "123 Tech Lane, Innovation City, CA 94103",
      link: "https://maps.google.com",
    },
  ]

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Ready to start your project? Get in touch with our team to discuss how we can help bring your vision to
            life.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Get in Touch</h3>
            <div className="contact-info-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div className="contact-info-content">
                    <h4 className="contact-info-item-title">{item.title}</h4>
                    <a href={item.link} className="contact-info-item-link">
                      {item.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="business-hours">
              <h4 className="business-hours-title">Business Hours</h4>
              <ul className="business-hours-list">
                <li className="business-hours-item">
                  <span className="business-hours-day">Monday - Friday:</span>
                  <span className="business-hours-time">9:00 AM - 6:00 PM</span>
                </li>
                <li className="business-hours-item">
                  <span className="business-hours-day">Saturday:</span>
                  <span className="business-hours-time">10:00 AM - 4:00 PM</span>
                </li>
                <li className="business-hours-item">
                  <span className="business-hours-day">Sunday:</span>
                  <span className="business-hours-time">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="contact-form-title">Send a Message</h3>
            {isSubmitted && (
              <div className="form-success-message">Thank you for your message! We'll get back to you shortly.</div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  className="form-textarea"
                ></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="form-submit-button">
                {isSubmitting ? (
                  <span className="submit-loading">
                    <svg className="loading-spinner" viewBox="0 0 24 24">
                      <circle
                        className="spinner-circle"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="spinner-path"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="submit-text">
                    Send Message
                    <svg
                      className="send-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs

