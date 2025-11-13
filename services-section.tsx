"use client"

const services = [
  {
    title: "24/7 Emergency",
    description: "Round-the-clock emergency medical services with expert response team",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "ICU Services",
    description: "Advanced Intensive Care Unit with state-of-the-art monitoring equipment",
    color: "from-red-500 to-red-600",
  },
  {
    title: "NICU Services",
    description: "Specialized neonatal care for newborns with critical medical conditions",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "In-house Pathology",
    description: "Advanced laboratory tests and diagnostic services on-site",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Medical Store",
    description: "Full-service pharmacy with prescription and OTC medications",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Physiotherapy & Dietician",
    description: "Comprehensive rehabilitation and nutritional guidance services",
    color: "from-amber-500 to-orange-500",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare solutions designed to meet all your medical needs with excellence and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-accent/50 hover:bg-card/80"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/20 group-hover:via-accent/20 group-hover:to-primary/20 transition-all duration-300 -z-10" />

              <div
                className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>

              <div className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
