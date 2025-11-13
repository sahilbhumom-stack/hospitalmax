import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import DepartmentsSection from "@/components/departments-section"
import StaffSection from "@/components/staff-section"
import ContactSection from "@/components/contact-section"
import WhatsAppButton from "@/components/whatsapp-button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-background via-background to-primary/5">
      <Navigation isScrolled={false} />
      <HeroSection />
      <ServicesSection />
      <DepartmentsSection />
      <StaffSection />
      <ContactSection />
      <WhatsAppButton phoneNumber="9984618992" />
      <Footer />
    </main>
  )
}
