import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import AboutUs from "./components/AboutUs/AboutUs"
import OurProcess from "./components/OurProcess/OurProcess"
import Technologies from "./components/Technologies/Technologies"
import OurTeam from "./components/OurTeam/OurTeam"
import OurProjects from "./components/OurProjects/OurProjects"
import ContactUs from "./components/ContactUs/ContactUs"
import Footer from "./components/Footer/Footer"
import "./App.css"
import React from "react"
function App() {
  return (
    <main className="app">
      <Header />
      <HeroSection />
      <AboutUs />
      <OurProcess />
      <Technologies />
      <OurTeam />
      <OurProjects />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default App

