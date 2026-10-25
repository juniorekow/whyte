'use client'

export function ProjectsSection() {
  const projects = [
    {
      category: 'Mobile',
      title: 'Emo Brukina Food App',
      description: 'Food delivery and restaurant management application with real-time order tracking.',
      tags: ['React', 'Vite', 'Mobile-First', 'E-Commerce'],
      color: 'primary',
      link: 'https://v0-emoburkina.vercel.app',
    },
    {
      category: 'Web App',
      title: 'EZESKOF',
      description: 'Business management application built with modern web technologies.',
      tags: ['Vite', 'React', 'TypeScript', 'Web App'],
      color: 'secondary',
      link: 'https://v0-ezeskof.vercel.app',
    },
    {
      category: 'SaaS',
      title: 'Virexa Web App',
      description: 'Enterprise web application for managing security operations and threat intelligence.',
      tags: ['React', 'Node.js', 'Security', 'SaaS'],
      color: 'primary',
      link: 'https://v0-virexa.vercel.app',
    },
    {
      category: 'Enterprise',
      title: 'University Course Management System',
      description: 'Full-stack system for managing university courses, enrollments, and student progress tracking.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Full-Stack'],
      color: 'secondary',
      link: 'https://myunihub.vercel.app',
    },
    {
      category: 'E-Commerce',
      title: 'JCL Delivery App',
      description: 'Logistics and delivery management platform for enterprise operations.',
      tags: ['React', 'Node.js', 'Logistics', 'Real-time Tracking'],
      color: 'primary',
      link: 'https://v0-footmall.vercel.app',
    },
    {
      category: 'Healthcare',
      title: 'eClinic',
      description: 'Digital healthcare platform connecting patients with medical professionals for virtual consultations.',
      tags: ['React', 'Firebase', 'Telemedicine', 'Healthcare'],
      color: 'secondary',
    },
    {
      category: 'Security',
      title: 'Driver Verification System',
      description: 'Secure driver identification and verification system with biometric authentication.',
      tags: ['Security', 'Biometrics', 'Python', 'Database Design'],
      color: 'primary',
    },
    {
      category: 'IoT',
      title: 'Arduino Swimming Guard',
      description: 'IoT water safety monitoring system with real-time alerts and threat detection.',
      tags: ['Arduino', 'IoT', 'Embedded Systems', 'C++'],
      color: 'secondary',
    },
  ]

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="portfolio-heading text-4xl lg:text-5xl font-bold font-display mb-4">
            <span className="text-primary">FEATURED</span>
            <span className="text-foreground"> </span>
            <span className="text-secondary">PROJECTS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-7 rounded-lg border-2 transition-all hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up block ${
                project.color === 'primary'
                  ? 'border-primary bg-primary/15 hover:bg-primary/25'
                  : 'border-secondary bg-secondary/15 hover:bg-secondary/25'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background gradient on hover */}
              <div
                className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none ${
                  project.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                }`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 ${
                    project.color === 'primary'
                      ? 'bg-primary/30 text-primary border-primary'
                      : 'bg-secondary/30 text-secondary border-secondary'
                  }`}
                >
                  {project.category}
                </div>

                <h3 className="portfolio-heading text-2xl font-bold mb-3 font-display">
                  {project.title}
                </h3>

                <p className="text-foreground font-semibold mb-4 line-clamp-3 text-base">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-sm px-3 py-1 rounded-full font-semibold border-2 ${
                        project.color === 'primary'
                          ? 'bg-primary/30 text-primary border-primary'
                          : 'bg-secondary/30 text-secondary border-secondary'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Visit Link */}
                {project.link && (
                  <div className="mt-4 pt-4 border-t border-foreground/20">
                    <span className={`inline-block px-4 py-2 rounded font-bold text-sm ${
                      project.color === 'primary'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      Visit Project →
                    </span>
                  </div>
                )}

                {/* Accent */}
                <div
                  className={`absolute -top-2 -right-2 w-8 h-8 rounded opacity-0 group-hover:opacity-100 transition-all ${
                    project.color === 'primary'
                      ? 'bg-primary/30 border-2 border-primary'
                      : 'bg-secondary/30 border-2 border-secondary'
                  }`}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
