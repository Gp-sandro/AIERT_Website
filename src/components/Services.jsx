import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, MessageSquare, Zap, Globe, FileText, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Real Estate AI Assistant',
    desc: 'Telegram bot that scrapes listings, generates multilingual descriptions, and syncs everything to Google Sheets. Your new 24/7 assistant.',
    badge: 'Live now',
    badgeType: 'active',
  },
  {
    icon: MessageSquare,
    title: 'Lead Qualification Bots',
    desc: 'Automated Telegram bots that qualify incoming leads, book appointments, and filter out time-wasters. For clinics, dealerships, and services.',
    badge: 'Coming soon',
    badgeType: 'soon',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    desc: 'Custom automation pipelines that eliminate repetitive manual work. Connect your tools, trigger actions, get hours back every week.',
    badge: 'Coming soon',
    badgeType: 'soon',
  },
  {
    icon: Globe,
    title: 'AI Web Presence',
    desc: 'Landing pages, dashboards, and embedded chatbots that work for your business around the clock. Modern web, powered by AI.',
    badge: 'Coming soon',
    badgeType: 'soon',
  },
  {
    icon: FileText,
    title: 'Content Automation',
    desc: 'Auto-generated social posts, listing descriptions, and email campaigns in multiple languages. Consistent content without the grind.',
    badge: 'Coming soon',
    badgeType: 'soon',
  },
  {
    icon: BarChart3,
    title: 'Custom Solutions',
    desc: "Got a specific problem? We'll scope it, build it, and deliver a working tool in under two weeks. If AI can solve it, we will.",
    badge: 'Available',
    badgeType: 'active',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative bg-bg-card border border-border rounded-2xl p-9 transition-all duration-400 hover:bg-bg-card-hover hover:border-coral/15 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-coral to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      <div className="w-12 h-12 bg-coral-glow rounded-xl flex items-center justify-center mb-6 group-hover:bg-coral-glow-strong group-hover:scale-105 transition-all duration-400">
        <Icon size={22} className="text-coral" />
      </div>

      <h3 className="text-lg font-bold tracking-tight mb-3">{service.title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{service.desc}</p>

      <span
        className={`inline-block mt-5 px-2.5 py-1 rounded-md text-[0.7rem] font-semibold uppercase tracking-wider border ${
          service.badgeType === 'active'
            ? 'bg-green/10 text-green border-green/20'
            : 'bg-[#FFBD2E]/10 text-[#FFBD2E] border-[#FFBD2E]/15'
        }`}
      >
        {service.badge}
      </span>
    </motion.div>
  )
}

export default function Services() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="services" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 font-mono text-xs text-coral tracking-widest uppercase mb-4"
          >
            <span className="w-6 h-px bg-coral" />
            Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-tight leading-tight mb-5"
          >
            What we build
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-lg text-text-secondary max-w-xl"
          >
            Practical AI solutions, not science projects. Every tool we ship is
            designed to save time and make money.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
