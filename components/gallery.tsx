'use client'

import Image from 'next/image'
import { useState } from 'react'

const galleryImages = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-25%20at%2001.32.41%20%282%29-eki1SyMxhCVJjM9F8fYskWtzNXy70Y.jpeg',
    alt: '',
    category: 'Community',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-25%20at%2001.32.41-rkZFp2FQuDNFvQtO8S6XNr8neoWfun.jpeg',
    alt: '',
    category: 'Events',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-25%20at%2001.32.41%20%281%29-SLbw3XhmobiaLLRrPKfdL8p91jntM8.jpeg',
    alt: '',
    category: 'Professional',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-25%20at%2001.32.41%20%283%29-VstdziMyNK01aG2EsTR76jZVpr01p3.jpeg',
    alt: '',
    category: 'Projects',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-07-25%20at%2001.32.40-jmIZctE25sFTGMHFfZ1ucEvOK8CvJj.mp4',
    alt: '',
    category: 'Events',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-07%20at%2012.38.43%20%283%29-kZbJ3aT8pJoRNGLtzfJsyzr2k8UYph.jpeg',
    alt: '',
    category: 'Professional',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-07%20at%2012.38.43-4EfKD7RwQmTaPEjPvy5QK78KURPM1M.jpeg',
    alt: '',
    category: 'Professional',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-07%20at%2012.38.41-NMl0x0ZQFQRzkdUUhkUp50qn0GgpU0.jpeg',
    alt: '',
    category: 'Events',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-07%20at%2012.38.42%20%281%29-r8gt9v8PwdS0fIXVhUhzcTbxt6muBm.jpeg',
    alt: '',
    category: 'Events',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-07%20at%2012.38.43%20%281%29-tcBueaFao3z4e63dBxXBX8URpN8qzo.jpeg',
    alt: '',
    category: 'Professional',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-07%20at%2012.38.43%20%282%29-paZdKRx1M7N5ixLNeeWHTJeGdAvbjy.jpeg',
    alt: '',
    category: 'Professional',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-07%20at%2012.38.44%20%281%29-S4zNmEEPvfehc80EGW0fCPiX7dPIkF.jpeg',
    alt: '',
    category: 'Professional',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-07%20at%2012.38.45%20%282%29-uNa2KxVtpl5Lfv31WwuapS4LN3IJ6N.jpeg',
    alt: '',
    category: 'Events',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-07%20at%2012.38.47-rR5JKFZvZJwnEbexEaeCvI9w8B91gs.jpeg',
    alt: '',
    category: 'Events',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-07%20at%2012.38.46%20%281%29-3ZShviw8uORxqczA3vPsEzYTHUjV4E.jpeg',
    alt: '',
    category: 'Projects',
  },
]

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ['Professional', 'Community', 'Events', 'Projects']
  const filteredImages = selectedCategory
    ? galleryImages.filter((img) => img.category === selectedCategory)
    : galleryImages

  return (
    <section className="min-h-screen bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="portfolio-heading text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-foreground/70 text-lg">Moments and milestones</p>
        </div>

        {/* Filter Buttons - Hidden */}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-lg bg-card border-2 border-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary"
              style={{
                animation: `slideUp 0.5s ease-out ${idx * 0.05}s both`,
              }}
            >
              {/* Image/Video Container */}
              <div className="relative h-80 w-full overflow-hidden bg-black/20">
                {image.src.endsWith('.mp4') ? (
                  <video
                    src={image.src}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    controls
                  />
                ) : (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
              </div>

              {/* Neon Border on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
