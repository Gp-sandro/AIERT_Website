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
  { number: '3', label: 'Languages supported' },
  { number: '<48h', label: 'Setup time' },
  { number: '24/7', label: 'Bot availability' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,var(--color-coral-glow-strong)_0%,transparent_70%)] animate-[float_8s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute -bottom-[30%] -left-[15%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,181,181,0.08)_0%,transparent_70%)] animate-[float_10s_ease-in-out_infinite_reverse] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-2 bg-coral-glow border border-coral/20 rounded-full font-mono text-xs text-coral tracking-wider uppercase mb-8"
        >
          <span className="w-2 h-2 bg-coral rounded-full animate-pulse" />
          Accepting new clients
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[clamp(3.2rem,8vw,7rem)] font-black leading-[0.95] tracking-[-0.04em] mb-6 max-w-[900px]"
        >
          Automate the boring.
          <br />
          <span className="relative text-coral">
            Close more deals.
            <span className="absolute bottom-1 left-0 right-0 h-1.5 bg-coral/30 rounded-full" />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[clamp(1.05rem,2vw,1.3rem)] text-text-secondary max-w-xl leading-relaxed mb-12"
        >
          We build AI-powered tools for businesses in Georgia. Less manual work,
          more revenue. Real results in the first week.
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
            href="#contact"
            className="group inline-flex items-center gap-2 bg-coral text-bg px-8 py-4 rounded-xl text-base font-bold hover:bg-coral-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_var(--color-coral-glow-strong)] transition-all"
          >
            Start automating
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-xl text-base font-semibold hover:border-white/15 hover:bg-white/[0.03] transition-all"
          >
            See what we build
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex gap-12 mt-20 pt-10 border-t border-border flex-wrap"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-coral tracking-tight">
                {s.number}
              </div>
              <div className="text-sm text-text-muted mt-1 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
