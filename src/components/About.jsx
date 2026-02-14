import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, Globe, Table, Send } from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: 'Telegram-Native',
    desc: 'No new apps. Works right in Telegram where your team already lives.',
  },
  {
    icon: Globe,
    title: '3 Languages, Zero Effort',
    desc: 'Automatic translation to Georgian, English, and Russian with natural phrasing.',
  },
  {
    icon: Table,
    title: 'Google Sheets Sync',
    desc: 'Every listing lands in your Sheet, organized and ready to share with clients.',
  },
]

const chatMessages = [
  {
    type: 'user',
    text: 'Find me 2-bedroom apartments in Vake under $120,000',
    time: '14:32',
  },
  {
    type: 'bot',
    text: 'Scanning ss.ge for 2-bedroom apartments in Vake...',
    time: '14:32',
  },
  {
    type: 'bot',
    time: '14:33',
    listing: true,
    text: 'Found <strong>12 listings</strong>. Here\u2019s the top match:',
    property: {
      title: '2-Bed Apartment, Vake, Tbilisi',
      details: '72 m\u00B2 \u00B7 5th floor \u00B7 Renovated\nChavchavadze Ave. \u00B7 Near Vake Park',
      price: '$98,500',
    },
  },
  {
    type: 'bot',
    text: 'Descriptions generated in KA / EN / RU and synced to your Google Sheet.',
    time: '14:33',
  },
  {
    type: 'user',
    text: 'Perfect. Share the Sheet link with my client.',
    time: '14:34',
  },
]

function TelegramChat() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-105 ml-auto rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_40px_80px_rgba(0,0,0,0.5),0_0_80px_rgba(255,107,107,0.08)] perspective-distant hover:transform-[perspective(1200px)_rotateY(0deg)_rotateX(0deg)] transform-[perspective(1200px)_rotateY(-4deg)_rotateX(2deg)] transition-transform duration-500"
    >
      {/* Header */}
      <div className="bg-[#17212B] px-5 py-3.5 flex items-center gap-3 border-b border-white/5">
        <div className="w-9 h-9 rounded-full bg-linear-to-br from-coral to-coral-light flex items-center justify-center text-sm font-extrabold text-white">
          AI
        </div>
        <div>
          <h5 className="text-sm font-semibold">AIERT Bot</h5>
          <span className="text-xs text-green">online</span>
        </div>
      </div>

      {/* Chat body */}
      <div className="bg-[#0E1621] p-4 flex flex-col gap-2 min-h-105">
        {chatMessages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.4 + i * 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`max-w-[88%] px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
              msg.type === 'user'
                ? 'self-end bg-[#2B5278] text-white rounded-xl rounded-br-sm'
                : 'self-start bg-[#182533] text-[#E8E8E8] rounded-xl rounded-bl-sm'
            }`}
          >
            {msg.listing ? (
              <>
                <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                <div className="my-2 p-3 bg-white/4 border-l-[3px] border-coral rounded-r-lg text-xs leading-relaxed">
                  <strong className="text-coral">{msg.property.title}</strong>
                  <br />
                  {msg.property.details.split('\n').map((line, j) => (
                    <span key={j}>
                      {line}
                      <br />
                    </span>
                  ))}
                  <span className="text-base font-extrabold text-green block mt-1">
                    {msg.property.price}
                  </span>
                </div>
              </>
            ) : (
              <span>{msg.text}</span>
            )}
            <span className="block text-right text-[11px] text-white/30 mt-1">
              {msg.time}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Input bar */}
      <div className="bg-[#17212B] px-4 py-3 border-t border-white/5 flex items-center gap-3">
        <div className="flex-1 px-4 py-2.5 bg-[#0E1621] border border-white/8 rounded-full text-[13px] text-text-muted">
          Type a message...
        </div>
        <button
          className="w-9 h-9 rounded-full bg-[#2AABEE] flex items-center justify-center shrink-0"
          aria-label="Send message"
        >
          <Send size={14} className="text-white" />
        </button>
      </div>
    </motion.div>
  )
}

function SectionReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-bg-secondary border-t border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <div>
            <SectionReveal>
              <div className="flex items-center gap-3 font-mono text-xs text-coral tracking-widest uppercase mb-4">
                <span className="w-6 h-px bg-coral" />
                Product
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black tracking-tight leading-tight mb-2">
                Meet your
              </h2>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black tracking-tight leading-tight mb-6 text-coral">
                AI Agent
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg">
                A Telegram bot that does the grunt work. It scrapes ss.ge listings,
                generates descriptions in Georgian, English, and Russian, and syncs
                everything to your Google Sheet.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="flex flex-col gap-6">
                {features.map((f) => {
                  const Icon = f.icon
                  return (
                    <div key={f.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-coral-glow flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-coral" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </SectionReveal>
          </div>

          {/* Telegram Chat Mock */}
          <div className="md:order-last order-first">
            <TelegramChat />
          </div>
        </div>
      </div>
    </section>
  )
}
