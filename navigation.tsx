"use client"

import { useState } from "react"
import Link from "next/link"
import AnimatedLogo from "@/components/animated-logo"

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleEmergencyClick = () => {
    const message = encodeURIComponent("Emergency! I need immediate medical assistance. Please respond urgently.")
    window.open(`https://wa.me/919984618992?text=${message}`, "_blank")
  }

  const handleBookAppointment = () => {
    const message = encodeURIComponent("I would like to book an appointment at The Max Hospital.")
    window.open(`https://wa.me/919984618992?text=${message}`, "_blank")
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <AnimatedLogo className="w-12 h-12" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Max Hospital
              </h1>
              <p className="text-xs text-muted-foreground">Care | Innovation | Community</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-foreground hover:text-primary font-medium transition-colors">
              Services
            </Link>
            <Link href="#departments" className="text-foreground hover:text-primary font-medium transition-colors">
              Departments
            </Link>
            <Link href="#team" className="text-foreground hover:text-primary font-medium transition-colors">
              Our Team
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>99846 18992</span>
            </div>
            <button
              onClick={handleBookAppointment}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#services" className="text-foreground hover:text-primary">
                Services
              </Link>
              <Link href="#departments" className="text-foreground hover:text-primary">
                Departments
              </Link>
              <Link href="#team" className="text-foreground hover:text-primary">
                Our Team
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary">
                Contact
              </Link>
              <button
                onClick={handleEmergencyClick}
                className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium w-full hover:bg-red-700 transition-all"
              >
                Emergency Service
              </button>
              <button
                onClick={handleBookAppointment}
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-lg font-medium w-full"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
