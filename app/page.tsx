import { HeroSection } from '@/components/hero'
import { SkillsSection } from '@/components/skills'
import { ExperienceSection } from '@/components/experience'
import { ProjectsSection } from '@/components/projects'
import { AboutSection } from '@/components/about'
import { Gallery } from '@/components/gallery'
import { ContactSection } from '@/components/contact'
import { Footer } from '@/components/footer'
import { PortfolioChatbot } from '@/components/portfolio-chatbot'

export default function Home() {
  return (
    <main className="w-full bg-background">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <Gallery />
      <ContactSection />
      <Footer />
      <PortfolioChatbot />
    </main>
  )
}
