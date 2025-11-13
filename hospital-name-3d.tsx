"use client"

import { useEffect, useState } from "react"

export default function HospitalName3D() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative">
      <style>{`
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes text-glow {
          0%, 100% { 
            text-shadow: 
              0 0 10px rgba(59, 130, 246, 0.3),
              0 0 20px rgba(59, 130, 246, 0.1);
          }
          50% { 
            text-shadow: 
              0 0 20px rgba(59, 130, 246, 0.6),
              0 0 40px rgba(59, 130, 246, 0.3),
              0 0 60px rgba(220, 38, 38, 0.2);
          }
        }

        @keyframes depth-3d {
          0% { transform: perspective(1000px) rotateX(0deg) rotateY(0deg); }
          50% { transform: perspective(1000px) rotateX(2deg) rotateY(2deg); }
          100% { transform: perspective(1000px) rotateX(0deg) rotateY(0deg); }
        }

        .hospital-name {
          animation: slide-in-up 0.8s ease-out forwards, float-up 4s ease-in-out 0.8s infinite, depth-3d 6s ease-in-out 0.8s infinite;
          letter-spacing: 0.05em;
        }

        .name-3d-layer {
          animation: text-glow 3s ease-in-out infinite;
        }

        .name-char {
          display: inline-block;
          transition: all 0.3s ease;
        }

        .name-char:hover {
          transform: translateY(-8px) scale(1.05);
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8));
        }
      `}</style>

      <div className="relative">
        {/* Back layer - deep shadow for depth */}
        <h1 className="text-5xl md:text-7xl font-bold text-primary/5 absolute left-4 top-4 tracking-wider pointer-events-none blur-sm">
          The Max Hospital
        </h1>

        {/* Secondary layer - accent shadow */}
        <h1 className="text-5xl md:text-7xl font-bold text-accent/15 absolute left-2 top-2 tracking-wider pointer-events-none blur-xs">
          The Max Hospital
        </h1>

        {/* Front layer - main text with glow and gradient */}
        <h1 className="hospital-name name-3d-layer text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#003f87] via-[#0066cc] to-[#003f87] bg-clip-text text-transparent tracking-wider drop-shadow-lg">
          The Max Hospital
        </h1>
      </div>

      {/* Tagline with animation */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-base md:text-lg text-primary font-semibold">
        <span className="inline-block animate-pulse">Care</span>
        <span className="text-accent font-bold">|</span>
        <span className="inline-block animate-pulse" style={{ animationDelay: "0.2s" }}>
          Innovation
        </span>
        <span className="text-accent font-bold">|</span>
        <span className="inline-block animate-pulse" style={{ animationDelay: "0.4s" }}>
          Community
        </span>
      </div>
    </div>
  )
}
