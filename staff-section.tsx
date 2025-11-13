"use client"

const staffHighlights = [
  {
    title: "50+ Expert Doctors",
    description: "Highly qualified medical professionals with years of experience",
    icon: "👨‍⚕️",
  },
  {
    title: "Professional Healthcare Team",
    description: "Nurses, technicians, and support staff with specialized training",
    icon: "👩‍⚕️",
  },
  {
    title: "Dedicated Support Staff",
    description: "Administrative and support team ensuring smooth patient care",
    icon: "🤝",
  },
  {
    title: "Continuous Training",
    description: "Regular workshops and training for latest medical practices",
    icon: "📚",
  },
]

export default function StaffSection() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated professionals with years of healthcare experience committed to your wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {staffHighlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-5xl mb-4">{highlight.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
              <div className="mt-4 flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>Excellence in Care</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Box */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">Why Choose Our Team?</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Our humble and supportive staff brings in-hand years of professional medical and healthcare experience. We
            believe in patient-centric care, combining cutting-edge technology with compassionate service to ensure your
            recovery and well-being.
          </p>
        </div>
      </div>
    </section>
  )
}
