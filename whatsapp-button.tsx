"use client"

import { useState, useEffect } from "react"

interface WhatsAppButtonProps {
  phoneNumber: string
}

export default function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppChat = () => {
    const message = encodeURIComponent(
      "Hello! I would like to inquire about your services and get more information about The Max Hospital.",
    )
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, "_blank")
  }

  const handleEmergencyCall = () => {
    const message = encodeURIComponent(
      "EMERGENCY! I need immediate medical assistance. This is urgent. Please respond immediately.",
    )
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, "_blank")
  }

  if (!isVisible) return null

  return (
    <>
      <style>{`
        @keyframes pulse-float {
          0%, 100% {
            transform: translateY(0px);
            box-shadow: 0 10px 25px rgba(34, 197, 94, 0.3);
          }
          50% {
            transform: translateY(-10px);
            box-shadow: 0 20px 35px rgba(34, 197, 94, 0.5);
          }
        }

        .whatsapp-button-float {
          animation: pulse-float 3s ease-in-out infinite;
        }

        @keyframes ring {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
          75% { transform: scale(1.05); }
        }

        .animate-ring {
          animation: ring 1s ease-in-out infinite;
        }
      `}</style>

      {/* Main WhatsApp Button */}
      <button
        onClick={handleWhatsAppChat}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-6 right-6 z-40 group whatsapp-button-float"
      >
        <div className="relative">
          {/* Animated rings on hover */}
          {isHovered && (
            <>
              <div className="absolute inset-0 w-14 h-14 bg-green-400 rounded-full animate-ping opacity-75" />
              <div className="absolute inset-2 w-10 h-10 bg-green-300 rounded-full opacity-50 animate-pulse" />
            </>
          )}

          {/* Main Button */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-xl transition-all transform hover:scale-110 cursor-pointer border-4 border-white">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.29-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.35-3.88-.99l-.28-.15-2.89.44.44-2.89-.15-.28C4.35 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>

          {/* Chat Tooltip */}
          {isHovered && (
            <div className="absolute bottom-full right-0 mb-3 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transform origin-bottom-right animate-in fade-in slide-in-from-bottom-2 pointer-events-none">
              Chat on WhatsApp
              <div className="absolute top-full right-2 w-2 h-2 bg-foreground transform rotate-45" />
            </div>
          )}
        </div>
      </button>

      {/* Emergency Call Button */}
      <button
        onClick={handleEmergencyCall}
        className="fixed bottom-24 right-6 z-40 group whatsapp-button-float"
        title="Emergency: Call for immediate help"
      >
        <div className="relative">
          {/* Pulsing red indicator */}
          <div className="absolute inset-0 w-14 h-14 bg-red-500 rounded-full animate-pulse opacity-50" />
          <div className="absolute inset-1 w-12 h-12 bg-red-400 rounded-full animate-ping opacity-75" />

          {/* Main Button */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 cursor-pointer border-4 border-white animate-ring">
            <svg className="w-7 h-7 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>

          {/* Emergency Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transform origin-bottom-right animate-in fade-in slide-in-from-bottom-2 pointer-events-none">
            Emergency 24/7
            <div className="absolute top-full right-2 w-2 h-2 bg-red-600 transform rotate-45" />
          </div>
        </div>
      </button>

      {/* Phone Number Badge */}
      {isHovered && (
        <div className="fixed bottom-40 right-6 bg-card border border-border rounded-lg px-4 py-3 shadow-lg animate-in fade-in slide-in-from-bottom-2 flex flex-col gap-2">
          <div className="text-xs font-semibold text-muted-foreground">WhatsApp</div>
          <div className="text-sm font-bold text-foreground">
            +91 {phoneNumber.slice(0, 5)} {phoneNumber.slice(5)}
          </div>
        </div>
      )}
    </>
  )
}
