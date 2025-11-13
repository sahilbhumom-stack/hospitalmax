"use client"

import { useState } from "react"
import Image from "next/image"

export default function AnimatedLogo({ className = "" }: { className?: string }) {
  const [isRotating, setIsRotating] = useState(false)

  return (
    <div
      className={`relative group cursor-pointer ${className}`}
      onMouseEnter={() => setIsRotating(true)}
      onMouseLeave={() => setIsRotating(false)}
    >
      <div className={`relative transition-transform duration-500 ${isRotating ? "rotate-180" : "rotate-0"}`}>
        <Image
          src="/logo.png"
          alt="The Max Hospital Logo"
          width={120}
          height={120}
          className="drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 w-auto h-auto"
          priority
          loading="eager"
        />
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-accent/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />

      <style>{`
        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.3)); }
          50% { filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.6)); }
        }
        .animate-glow {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
