import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { GOOGLE_SCRIPT_URL, FORM_ENABLED } from '../config'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || loading) return

    setLoading(true)
    setError('')

    try {
      if (FORM_ENABLED) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source: 'website' }),
        })
      }

      // Local backup (try/catch for private browsing compatibility)
      try {
        const subs = JSON.parse(localStorage.getItem('aiert_subs') || '[]')
        subs.push({ email, date: new Date().toISOString() })
        localStorage.setItem('aiert_subs', JSON.stringify(subs))
      } catch {
        // localStorage unavailable (private browsing) — silent fail
      }

      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="text-center max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 font-mono text-xs text-coral tracking-widest uppercase mb-4"
          >
            Get started
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-tight leading-tight mb-4"
          >
            Ready to automate?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-text-secondary max-w-md mx-auto mb-12"
          >
            Drop your email and we'll reach out within 24 hours to discuss how AI
            can save you time and make you money.
          </motion.p>

          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <form
                onSubmit={handleSubmit}
                className="flex gap-3 max-w-md mx-auto mb-4 flex-col sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={loading}
                  className="flex-1 px-5 py-4 bg-bg-card border border-border rounded-xl text-text font-[var(--font-display)] outline-none focus:border-coral focus:shadow-[0_0_0_3px_var(--color-coral-glow)] transition-all placeholder:text-text-muted disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center justify-center gap-2 bg-coral text-bg px-8 py-4 rounded-xl font-bold hover:bg-coral-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_var(--color-coral-glow-strong)] transition-all shrink-0 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Let's talk
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
              {error && (
                <p className="text-sm text-coral mb-2">{error}</p>
              )}
              <p className="text-sm text-text-muted">
                No spam. Just a conversation about your business.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center gap-2 px-6 py-5 bg-green/[0.08] border border-green/20 rounded-2xl text-green font-semibold max-w-md mx-auto"
            >
              <Check size={20} />
              Got it! We'll be in touch within 24 hours.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
