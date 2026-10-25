'use client'

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background Only */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%281%29-PoFdQS8F5FbA6XeS3zvcqKJsmdgBa5.mp4"
          type="video/mp4"
        />
      </video>

      {/* Minimal Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  )
}
