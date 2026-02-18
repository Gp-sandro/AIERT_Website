import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Loader2 } from 'lucide-react'
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

      try {
        const subs = JSON.parse(localStorage.getItem('aiert_subs') || '[]')
        subs.push({ email, date: new Date().toISOString() })
        localStorage.setItem('aiert_subs', JSON.stringify(subs))
      } catch {
        /* localStorage unavailable */
      }

      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="cta" className="py-12 px-4 md:px-8">
      <div className="max-w-[1160px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-red rounded-[20px] text-white text-center py-20 md:py-28 px-6 overflow-hidden"
        >
          {/* Decorative floating shapes */}
          <div className="absolute w-[200px] h-[200px] rounded-full border-2 border-white/8 top-[10%] left-[5%] animate-[drift1_12s_ease-in-out_infinite] pointer-events-none" />
          <div className="absolute w-[100px] h-[100px] rounded-full bg-white/8 bottom-[15%] right-[10%] animate-[drift2_15s_ease-in-out_infinite] pointer-events-none" />
          <div className="absolute w-[60px] h-[60px] rounded-full border-2 border-white/8 top-[20%] right-[20%] animate-[drift3_10s_ease-in-out_infinite] pointer-events-none" />

          {/* Radial glow */}
          <div className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-(--font-display) font-extrabold text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] tracking-tight mb-4">
              Ready to stop
              <br />
              doing it manually?
            </h2>
            <p className="text-lg text-white/70 max-w-[420px] mx-auto mb-9 leading-relaxed">
              Drop your email and we&rsquo;ll set up a free 20-minute call to
              find what we can automate for you.
            </p>

            {!submitted ? (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="flex max-w-[460px] mx-auto rounded-xl overflow-hidden bg-white/12 border border-white/20 focus-within:border-white/50 transition-colors flex-col sm:flex-row"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={loading}
                    className="flex-1 bg-transparent border-none outline-none px-5 py-4 font-(--font-body) text-[15px] text-white placeholder:text-white/40 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-white border-none text-red font-(--font-display) font-extrabold text-sm px-7 py-4 cursor-pointer hover:bg-bg transition-colors whitespace-nowrap disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2 justify-center">
                        <span className="inline-flex animate-spin">
                          <Loader2 size={16} />
                        </span>
                        Sending...
                      </span>
                    ) : (
                      "Let\u2019s talk"
                    )}
                  </button>
                </form>
                {error && (
                  <p className="text-sm text-white/80 mt-3">{error}</p>
                )}
                <p className="text-sm text-white/50 mt-4">
                  No spam. No sales deck. Just a conversation.
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-6 py-4 bg-white/15 border border-white/25 rounded-xl text-white font-semibold"
              >
                Got it! We&rsquo;ll be in touch within 24 hours.
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
