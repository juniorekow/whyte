'use client'

export function ContactSection() {
  const contactInfo = [
    {
      label: 'Primary Email',
      value: 'sackeywhyte@gmail.com',
      type: 'email',
    },
    {
      label: 'Secondary Email',
      value: 'juniorekow363@gmail.com',
      type: 'email',
    },
    {
      label: 'Office',
      value: '+233 545 498 838',
      type: 'phone',
    },
    {
      label: 'Personal',
      value: '+233 555 839 566',
      type: 'phone',
    },
  ]

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/whyte-sackey-3bba89257', icon: '🔗' },
    { name: 'GitHub', url: 'https://github.com/juniorekow', icon: '💻' },
    { name: 'Portfolio', url: 'https://github.com/juniorekow', icon: '🌐' },
    {name: 'WHATSAPP', url: 'https://web.whatsapp.com/+233545498838'},
  ]

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="portfolio-heading text-4xl lg:text-5xl font-bold font-display mb-4">
            <span className="text-primary">GET IN</span>
            <span className="text-foreground"> </span>
            <span className="text-secondary">TOUCH</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          <p className="text-foreground/70 mt-6 text-lg">
            I&apos;m always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border transition-all hover:shadow-lg ${
                index < 2
                  ? 'border-primary/40 bg-primary/5 hover:border-primary/80'
                  : 'border-secondary/40 bg-secondary/5 hover:border-secondary/80'
              }`}
            >
              <p
                className={`text-sm font-bold mb-2 ${
                  index < 2 ? 'text-primary' : 'text-secondary'
                }`}
              >
                {info.label}
              </p>
              <a
                href={
                  info.type === 'email'
                    ? `mailto:${info.value}`
                    : `tel:${info.value}`
                }
                className="text-lg font-semibold text-foreground hover:opacity-80 transition-opacity break-all"
              >
                {info.value}
              </a>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-lg border border-foreground/20 hover:border-primary/80 bg-card/40 hover:bg-card/80 transition-all text-center hover:shadow-lg"
            >
              <div className="text-3xl mb-3">{link.icon}</div>
              <h4 className="portfolio-heading font-bold group-hover:opacity-80 transition-opacity">
                {link.name}
              </h4>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="mailto:sackeywhyte@gmail.com"
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 bg-gradient-to-r from-primary to-secondary text-background hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  )
}
