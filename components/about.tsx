'use client'

import Image from 'next/image'

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 px-4 sm:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="portfolio-heading text-4xl lg:text-5xl font-bold font-display mb-4">
            <span className="text-primary">ABOUT</span>
            <span className="text-foreground"> </span>
            <span className="text-secondary">ME</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Image */}
          <div className="flex justify-center animate-slide-in-left">
            <div className="relative group">
              {/* Outer neon glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg opacity-40 group-hover:opacity-60 blur-xl transition-all duration-300" />

              {/* Profile card */}
              <div className="relative w-80 h-96 rounded-lg border-2 border-primary group-hover:border-secondary overflow-hidden bg-card shadow-2xl transition-all duration-300 group-hover:shadow-primary/50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-07%20at%2012.38.43%20%283%29-kZbJ3aT8pJoRNGLtzfJsyzr2k8UYph.jpeg"
                  alt="Professional portrait in red blazer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="space-y-6 animate-slide-in-right">
            <p className="text-lg text-foreground leading-relaxed font-medium">
              I&apos;m a passionate and results-driven technology professional with expertise across software development, cybersecurity, and robotics engineering. My mission is to bridge the gap between innovative technology and practical business solutions.
            </p>

            <p className="text-lg text-foreground leading-relaxed font-medium">
              As an IT Manager with a full-stack development background, I bring a unique blend of technical expertise and strategic thinking to every project. I&apos;ve worked with Fortune 500 companies and startups alike, always focused on delivering excellence.
            </p>

            <div className="space-y-4 pt-4">
              <h4 className="portfolio-heading text-2xl font-bold font-display">Key Strengths</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Full-Stack Development',
                  'Cybersecurity Architecture',
                  'IoT & Robotics',
                  'Team Leadership',
                  'System Design',
                  'Technical Strategy',
                  'Mobile App Developer',
                  'Cloud Dev Engineer',

                ].map((strength) => (
                  <div
                    key={strength}
                    className="flex items-center gap-3 p-4 rounded-lg border-2 border-primary bg-primary/10 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200"
                  >
                    <span className="text-primary text-xl font-bold">✓</span>
                    <span className="text-foreground font-semibold text-base">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="pt-6 border-t-2 border-primary">
              <h4 className="portfolio-heading text-2xl font-bold mb-4 font-display">Education</h4>
              <div className="p-5 rounded-lg border-2 border-secondary bg-secondary/10 hover:bg-secondary/20 transition-all duration-200 hover:shadow-lg hover:shadow-secondary/30">
                <h5 className="font-bold text-foreground text-lg">
                  BSc Computer Science <br></br>
                  Accra Institute of Technology
                </h5>
                <p className="text-foreground font-semibold text-base mt-2">
                 Assc. Project Management<br></br>BRIGHAM YOUNG UNIVERSITY

                </p>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
