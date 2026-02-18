import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Tell us what slows you down',
    desc: 'We map where your team burns time on repetitive work. No jargon. No pitch deck.',
  },
  {
    number: '02',
    title: 'We build it in 48 hours',
    desc: 'A working prototype in your hands fast. Real work, real data.',
  },
  {
    number: '03',
    title: 'It runs. You grow.',
    desc: 'Autonomous AI tools. We monitor, update, and improve as you scale.',
  },
]

function Step({ step, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative p-8 md:p-10 group hover:bg-bg-surface transition-colors ${
        index > 0 ? 'border-t-2 md:border-t-0 md:border-l-2 border-text' : ''
      }`}
    >
      <div className="font-(--font-display) font-extrabold text-[56px] leading-none text-red/18 mb-4 select-none">
        {step.number}
      </div>
      <h3 className="font-(--font-display) font-bold text-xl tracking-tight mb-2.5 leading-snug">
        {step.title}
      </h3>
      <p className="text-[15px] leading-relaxed text-text-dim">
        {step.desc}
      </p>
    </motion.div>
  )
}

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="process" className="py-24">
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-(--font-display) text-xs font-bold text-red tracking-widest uppercase mb-4"
          >
            How it works
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-(--font-display) text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-tight"
          >
            Three steps. That&rsquo;s it.
          </motion.h2>
        </div>

        {/* Connector dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-1.5 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-red" />
          <div className="w-10 h-0.5 bg-border" />
          <div className="w-2 h-2 rounded-full bg-red" />
          <div className="w-10 h-0.5 bg-border" />
          <div className="w-2 h-2 rounded-full bg-red" />
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 border-2 border-text rounded-2xl overflow-hidden"
        >
          {steps.map((s, i) => (
            <Step key={s.number} step={s} index={i} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
