"use client"

import { useEffect, useState } from "react"
import HospitalName3D from "@/components/hospital-name-3d"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleEmergencyBooking = () => {
    const message = encodeURIComponent("Emergency! I need immediate medical assistance. Please respond urgently.")
    window.open(`https://wa.me/919984618992?text=${message}`, "_blank")
  }

  const handleViewServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span className="text-accent font-semibold">Your Trusted Healthcare Partner</span>
            </div>

            <HospitalName3D />

            <p className="text-lg text-foreground/60 mb-8 max-w-xl mt-8">
              Experience world-class medical services with a team of expert doctors and healthcare professionals
              dedicated to your wellness. Available 24/7 for your emergencies and specialized care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={handleEmergencyBooking}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <svg
                  className="w-5 h-5 group-hover:animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4v2m0 4v2m0 0v2m0-16v-2m8 0v2m0 4v2m0 4v2M9 3h6a3 3 0 013 3v18a3 3 0 01-3 3H9a3 3 0 01-3-3V6a3 3 0 013-3z"
                  />
                </svg>
                Book Emergency Service
              </button>
              <button
                onClick={handleViewServices}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                View Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Emergency Care</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
                <p className="text-2xl font-bold text-accent">50+</p>
                <p className="text-sm text-muted-foreground">Expert Doctors</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
                <p className="text-2xl font-bold text-secondary">15K+</p>
                <p className="text-sm text-muted-foreground">Patients Served</p>
              </div>
            </div>
          </div>

          {/* Right 3D Section */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden border border-border/50 backdrop-blur-sm flex items-center justify-center group">
              {/* Animated Grid Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[20px_20px]" />
              </div>

              {/* 3D-like Icon Container */}
              <div className="relative z-10 flex flex-col items-center gap-8">
                <div className="relative w-40 h-40 perspective">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform -rotate-3 group-hover:-rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-20 h-20 text-white drop-shadow-lg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5.637 11.182A5.5 5.5 0 016 11h12a5.5 5.5 0 01.363.818M7 11a3 3 0 11-6 0 3 3 0 016 0zM16 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex gap-6 relative z-20">
                  <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 transform hover:scale-105 transition-transform cursor-pointer">
                    <svg className="w-8 h-8 text-accent mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                    </svg>
                    <p className="text-xs font-semibold text-center">Cardiology</p>
                  </div>
                  <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 transform hover:scale-105 transition-transform cursor-pointer">
                    <svg className="w-8 h-8 text-secondary mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                    </svg>
                    <p className="text-xs font-semibold text-center">ICU Care</p>
                  </div>
                </div>
              </div>

              {/* Floating Animation */}
              <style>{`
                @keyframes float-3d {
                  0%, 100% { transform: translateY(0px) rotateX(0deg); }
                  50% { transform: translateY(-20px) rotateX(5deg); }
                }
                .perspective {
                  animation: float-3d 4s ease-in-out infinite;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
