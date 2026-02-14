import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Tell us the problem',
    desc: 'Quick 15-minute call or Telegram chat. We learn what manual work is eating your time and where leads are slipping through.',
  },
  {
    number: '02',
    title: 'We build your tool',
    desc: 'Custom AI solution, delivered within 48 hours. Telegram bots, automations, integrations \u2014 whatever solves your problem fastest.',
  },
  {
    number: '03',
    title: 'You grow',
    desc: 'Start using your tool immediately. We monitor, iterate, and optimize based on real usage. You focus on closing deals.',
  },
]

function Step({ step, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group text-center relative"
    >
      <div className="relative z-10 w-22 h-22 rounded-full bg-bg-card border-2 border-coral flex items-center justify-center mx-auto mb-7 font-mono text-2xl font-bold text-coral group-hover:bg-coral group-hover:text-bg group-hover:shadow-[0_0_40px_var(--color-coral-glow-strong)] transition-all duration-400">
        {step.number}
      </div>
      <h3 className="text-xl font-bold tracking-tight mb-3">{step.title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed max-w-[280px] mx-auto">
        {step.desc}
      </p>
    </motion.div>
  )
}

export default function Process() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section
      id="process"
      className="py-28 bg-bg-secondary border-t border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 font-mono text-xs text-coral tracking-widest uppercase mb-4"
          >
            How it works
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
            Three steps to automation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-lg text-text-secondary max-w-lg mx-auto"
          >
            No long onboarding. No complicated setup. We move fast so you see
            results fast.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-12">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[44px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px bg-gradient-to-r from-coral via-pink to-coral opacity-30" />

          {steps.map((s, i) => (
            <Step key={s.number} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
