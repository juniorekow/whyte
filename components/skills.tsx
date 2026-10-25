'use client'

export function SkillsSection() {
  const skills = {
    programming: ['Python', 'JavaScript', 'Go', 'Lua', 'SQL', 'TypeScript'],
    frameworks: ['React.js', 'Node.js', 'Nest.js', 'Express.js', 'Flask', 'WordPress', 'Game Development'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase','Firrebase','MongoDB Atlas',],
    certifications: [
      'ISC2-CISSP',
      'VEX Robotics (VEX 123)',
      'VEX GO',
      'VEX IQ',
      'VEX VR',
      'VEX Computer Science',
      'Google Data Analysis',
      'Web Development',
      'Project Management (PMP)',
      
    ],
  }

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="portfolio-heading text-4xl lg:text-5xl font-bold font-display mb-4">
            <span className="text-primary">SKILLS</span>
            <span className="text-foreground"> & </span>
            <span className="text-secondary">EXPERTISE</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <div className="group relative p-6 rounded-lg border-2 border-primary bg-card/60 hover:bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-2 animate-fade-in-up stagger-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative mb-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/30 flex items-center justify-center border-2 border-primary group-hover:shadow-lg group-hover:shadow-primary/60">
                <span className="text-primary font-bold text-xl">&lt;/&gt;</span>
              </div>
              <h3 className="text-2xl font-bold text-primary font-display">Programming</h3>
            </div>
            <div className="relative flex flex-wrap gap-3">
              {skills.programming.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-base font-semibold bg-primary/25 border-2 border-primary text-primary hover:bg-primary/40 hover:shadow-lg hover:shadow-primary/60 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="group relative p-6 rounded-lg border-2 border-secondary bg-card/60 hover:bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/40 hover:-translate-y-2 animate-fade-in-up stagger-2">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative mb-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center border-2 border-secondary group-hover:shadow-lg group-hover:shadow-secondary/60">
                <span className="text-secondary font-bold text-xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary font-display">Frameworks</h3>
            </div>
            <div className="relative flex flex-wrap gap-3">
              {skills.frameworks.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-base font-semibold bg-secondary/25 border-2 border-secondary text-secondary hover:bg-secondary/40 hover:shadow-lg hover:shadow-secondary/60 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="group relative p-6 rounded-lg border-2 border-accent bg-card/60 hover:bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-accent/40 hover:-translate-y-2 animate-fade-in-up stagger-3">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative mb-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center border-2 border-accent group-hover:shadow-lg group-hover:shadow-accent/60">
                <span className="text-accent font-bold text-xl">🗄️</span>
              </div>
              <h3 className="text-2xl font-bold text-accent font-display">Databases</h3>
            </div>
            <div className="relative flex flex-wrap gap-3">
              {skills.databases.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-base font-semibold bg-accent/25 border-2 border-accent text-accent hover:bg-accent/40 hover:shadow-lg hover:shadow-accent/60 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="group relative p-6 rounded-lg border-2 border-chart-4 bg-card/60 hover:bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-chart-4/40 hover:-translate-y-2 animate-fade-in-up stagger-4">
            <div className="absolute inset-0 bg-gradient-to-br from-chart-4/15 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative mb-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-chart-4/30 flex items-center justify-center border-2 border-chart-4 group-hover:shadow-lg group-hover:shadow-chart-4/60">
                <span className="text-chart-4 font-bold text-xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-chart-4 font-display">Certifications</h3>
            </div>
            <div className="relative flex flex-wrap gap-3">
              {skills.certifications.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-base font-semibold bg-chart-4/25 border-2 border-chart-4 text-chart-4 hover:bg-chart-4/40 hover:shadow-lg hover:shadow-chart-4/60 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
