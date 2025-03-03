import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutUs from "@/components/about-us"
import OurProcess from "@/components/our-process"
import Technologies from "@/components/technologies"
import OurTeam from "@/components/our-team"
import OurProjects from "@/components/our-projects"
import ContactUs from "@/components/contact-us"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
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

