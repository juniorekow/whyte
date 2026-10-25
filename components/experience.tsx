'use client'

export function ExperienceSection() {
  const experiences = [
    {
      role: 'IT Manager',
      company: 'JCL Royal Company',
      period: 'June 2025 - November 2025',
      description:
        'Leading IT infrastructure and digital transformation initiatives for enterprise operations.',
      color: 'primary',
    },
    {
      role: 'STEM Instructor',
      company: 'Bountiful Technologies',
      period: 'October 2022 - January 2024',
      description:
        'Teaching programming and robotics to students, fostering the next generation of tech innovators.',
      color: 'secondary',
    },
    {
      role: 'Project Lead - Arduino Swimming Guard',
      company: 'GSTEP',
      period: 'November 2024 - November 2025',
      description:
        'Designed and implemented an IoT-based water safety monitoring system using Arduino and embedded systems. 1 year contract.',
      color: 'primary',
    },
    {
      role: 'Technical Attachment',
      company: 'Electricity Company of Ghana',
      period: 'April 2025 - May 2025',
      description:
        'Gained practical experience in enterprise IT systems and network infrastructure management.',
      color: 'secondary',
    },
    {
      role: 'Software Development Intern',
      company: 'Soronko Academy',
      period: 'June 2024 - August 2024',
      description:
        'Developed full-stack web applications and learned industry best practices in software development.',
      color: 'primary',
    },
  ]

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="portfolio-heading text-4xl lg:text-5xl font-bold font-display mb-4">
            <span className="text-primary">PROFESSIONAL</span>
            <span className="text-foreground"> </span>
            <span className="text-secondary">EXPERIENCE</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                  <div
                    className={`p-7 rounded-lg border-2 transition-all hover:shadow-2xl animate-fade-in-up ${
                      exp.color === 'primary'
                        ? 'border-primary bg-primary/15 hover:bg-primary/25'
                        : 'border-secondary bg-secondary/15 hover:bg-secondary/25'
                    }`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div
                      className={`text-base font-bold mb-3 ${
                        exp.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`}
                    >
                      {exp.period}
                    </div>
                    <h3 className="portfolio-heading text-2xl font-bold mb-2 font-display">
                      {exp.role}
                    </h3>
                    <p
                      className={`text-lg font-bold mb-3 ${
                        exp.color === 'primary'
                          ? 'text-primary'
                          : 'text-secondary'
                      }`}
                    >
                      {exp.company}
                    </p>
                    <p className="text-foreground font-semibold text-base leading-relaxed">{exp.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      exp.color === 'primary'
                        ? 'bg-primary border-primary'
                        : 'bg-secondary border-secondary'
                    }`}
                  />
                </div>

                {/* Empty Space for Desktop Layout */}
                <div className="hidden md:flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
