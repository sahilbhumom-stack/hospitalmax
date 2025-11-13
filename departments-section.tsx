"use client"

const departments = [
  { name: "Cardiology", desc: "Heart & Cardiovascular Care" },
  { name: "Orthopedics", desc: "Bone & Joint Specialists" },
  { name: "Dentistry", desc: "Dental Health Services" },
  { name: "General Medicine", desc: "Primary Care Physicians" },
  { name: "ENT", desc: "Ear, Nose & Throat" },
  { name: "Pulmonology", desc: "Respiratory Health" },
  { name: "Neurology", desc: "Neurological Care" },
  { name: "Pediatrics", desc: "Children's Healthcare" },
]

export default function DepartmentsSection() {
  return (
    <section id="departments" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Specialized{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Departments</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each department staffed with highly qualified specialists and medical professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all">
                  <svg
                    className="w-6 h-6 text-primary group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                </div>
                <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{dept.name}</h3>
              <p className="text-sm text-muted-foreground">{dept.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
