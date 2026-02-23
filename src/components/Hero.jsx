import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
}

const stats = [
  { value: '3', label: 'Languages' },
  { value: '<48h', label: 'Setup' },
  { value: '24/7', label: 'Uptime' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute -top-[15%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(224,69,53,0.06)_0%,transparent_60%)] pointer-events-none" />

      {/* AI watermark */}
      <div
        className="absolute bottom-[5%] right-[3%] font-(--font-display) font-black text-[28vw] leading-none text-text/3 pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        AI
      </div>

      <div className="relative z-10 max-w-[1160px] mx-auto px-6 w-full">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2.5 px-4 py-2 border-2 border-red rounded-md font-(--font-display) text-xs font-bold text-red tracking-wider uppercase mb-10"
        >
          <span className="w-2 h-2 bg-red rounded-full animate-pulse" />
          AI Automation — Tbilisi, Georgia
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-(--font-display) text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] mb-8 max-w-[900px]"
        >
          Automate
          <br />
          the boring.
          <br />
          <span className="text-red">Close more deals.</span>
          <span className="sr-only"> — AI automation for real estate agents in Tbilisi, Georgia</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[clamp(1rem,1.8vw,1.15rem)] text-text-dim max-w-xl leading-relaxed mb-10"
        >
          We build AI tools that handle the repetitive work so Georgian businesses
          can focus on what actually makes money.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-4 flex-wrap"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 bg-red text-white px-8 py-4 rounded-xl font-(--font-display) text-base font-bold hover:bg-red-hover hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(224,69,53,0.2)] transition-all"
          >
            Start a conversation
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#product"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-text rounded-xl font-(--font-display) text-base font-bold hover:bg-text hover:text-bg transition-all"
          >
            See the demo
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-grid grid-cols-3 mt-16 border-2 border-text rounded-xl overflow-hidden"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-8 py-5 text-center ${
                i > 0 ? 'border-l-2 border-text' : ''
              }`}
            >
              <div className="font-(--font-display) text-2xl font-extrabold tracking-tight text-text">
                {s.value}
              </div>
              <div className="font-(--font-display) text-xs font-medium text-text-dim mt-1 uppercase tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
