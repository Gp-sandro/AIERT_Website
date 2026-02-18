import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Real Estate AI Assistant',
    desc: 'Telegram bot that scrapes ss.ge, generates multilingual descriptions in Georgian, English, and Russian, and syncs everything to Google Sheets.',
    badge: 'Live',
  },
  {
    title: 'Lead Qualification Bots',
    desc: 'Automated conversations that qualify incoming leads before they reach your team. 24/7, in any language.',
  },
  {
    title: 'Workflow Automation',
    desc: 'Connect spreadsheets, messaging apps, and CRMs into automated pipelines. No more copying data between tabs.',
  },
  {
    title: 'AI Web Presence',
    desc: 'Intelligent websites that adapt to visitors, answer questions via chat, and capture leads while you sleep.',
  },
  {
    title: 'Content Automation',
    desc: 'Automated content for property listings, social media, and marketing. Multilingual, on-brand, consistent.',
  },
  {
    title: 'Custom Solutions',
    desc: 'Bespoke AI for dealerships, clinics, hospitality. If a human does it the same way every time, we automate it.',
  },
]

function ServiceRow({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative grid grid-cols-[1fr] md:grid-cols-[auto_1fr_auto] gap-4 md:gap-8 items-start py-6 border-b border-border last:border-b-0 cursor-default -mx-4 px-4 rounded-lg transition-all duration-300 hover:bg-bg-surface/50 hover:pl-7"
    >
      {/* Red accent bar on hover */}
      <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-full bg-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

      <div className="hidden md:block font-(--font-display) text-sm font-bold text-text-faint tabular-nums pt-0.5" />

      <div>
        <div className="flex items-center gap-3 mb-2">
          <h3 className="font-(--font-display) text-lg font-bold tracking-tight group-hover:text-red transition-colors duration-300">
            {service.title}
          </h3>
          {service.badge && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-green-dim text-green border border-green/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green" />
              {service.badge}
            </span>
          )}
        </div>
        <p className="text-sm text-text-dim leading-relaxed max-w-xl">
          {service.desc}
        </p>
      </div>

      <ArrowRight
        size={18}
        className="hidden md:block text-text-faint group-hover:text-red group-hover:translate-x-1 transition-all mt-1"
      />
    </motion.li>
  )
}

export default function Services() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="services" className="py-24">
      <div className="max-w-[1160px] mx-auto px-6">
        <div ref={headerRef} className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-(--font-display) text-xs font-bold text-red tracking-widest uppercase mb-4"
          >
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
            className="font-(--font-display) text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-tight"
          >
            What we build.
          </motion.h2>
        </div>

        <ul className="divide-y-0">
          {services.map((s, i) => (
            <ServiceRow key={s.title} service={s} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
