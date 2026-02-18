import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { RefreshCw, Send } from 'lucide-react'

const chatMessages = [
  {
    type: 'user',
    text: 'Show me new apartments in Vake, 2+ bedrooms',
    time: '14:32',
  },
  {
    type: 'bot',
    text: 'Scanning ss.ge for 2-bedroom apartments in Vake\u2026',
    time: '14:32',
  },
  {
    type: 'bot',
    time: '14:33',
    listing: true,
    text: 'Found <strong>12 listings</strong>. Here\u2019s the top match:',
    property: {
      title: '2-Bed Apartment, Vake, Tbilisi',
      details: '72 m\u00B2 \u00B7 5th floor \u00B7 Renovated',
      location: 'Chavchavadze Ave. \u00B7 Near Vake Park',
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

function TelegramChat({ inView }) {
  return (
    <div className="col-span-1 md:row-span-3 rounded-2xl overflow-hidden border border-white/8 bg-linear-to-b from-[#1e2837] to-[#141c28]">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3.5 bg-black/20 border-b border-white/6">
        <div className="w-9 h-9 rounded-full bg-red flex items-center justify-center text-[13px] font-extrabold text-white font-(--font-display) shrink-0">
          AI
        </div>
        <div>
          <div className="font-(--font-display) text-sm font-bold text-white leading-tight">
            AIERT Bot
          </div>
          <div className="font-(--font-display) text-[11px] font-medium text-[#4ADE80]">
            online
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="p-5 flex flex-col gap-2.5 min-h-[340px]">
        {chatMessages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.3 + i * 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`max-w-[88%] px-3.5 py-2.5 text-[13.5px] leading-relaxed rounded-2xl ${
              msg.type === 'user'
                ? 'self-end bg-[#2B5278] text-white rounded-br-sm'
                : 'self-start bg-white/7 text-white/80 rounded-bl-sm'
            }`}
          >
            {msg.listing ? (
              <>
                <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                <div className="my-2 p-3 bg-white/4 border border-white/6 rounded-lg text-xs leading-relaxed">
                  <div className="font-(--font-display) font-bold text-[13px] text-white/85 mb-0.5">
                    {msg.property.title}
                  </div>
                  <div className="text-[11px] text-white/30 mb-1">
                    {msg.property.details}
                    <br />
                    {msg.property.location}
                  </div>
                  <div className="font-(--font-display) font-extrabold text-[15px] text-red">
                    {msg.property.price}
                  </div>
                </div>
              </>
            ) : (
              <span>{msg.text}</span>
            )}
            <span className="block text-right text-[10px] text-white/30 mt-1">
              {msg.time}
            </span>
          </motion.div>
        ))}

        {/* Typing indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 2.2 }}
          className="self-start bg-white/7 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5"
        >
          {[0, 1, 2].map((j) => (
            <span
              key={j}
              className="w-1.5 h-1.5 rounded-full bg-white/30 animate-[tdot_1.4s_ease-in-out_infinite]"
              style={{ animationDelay: `${j * 0.2}s` }}
            />
          ))}
        </motion.div>
      </div>

      {/* Input */}
      <div className="flex items-center gap-2.5 px-4 py-3 border-t border-white/6 bg-black/15">
        <div className="flex-1 px-4 py-2.5 bg-white/6 rounded-full text-[13px] text-white/30 font-(--font-body)">
          Type a message...
        </div>
        <button className="w-9 h-9 rounded-full bg-red flex items-center justify-center shrink-0">
          <Send size={14} className="text-white" />
        </button>
      </div>
    </div>
  )
}

function SheetsPreview() {
  const rows = [
    { addr: 'Abashidze ...', price: '$142k', status: '\u2713' },
    { addr: 'Chavchava...', price: '$118k', status: '\u2713' },
    { addr: 'Paliashvili ...', price: '$95k', status: '\u2713' },
  ]

  return (
    <div className="rounded-2xl border border-white/6 bg-white/3 p-4 col-span-2 md:col-span-1">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-[22px] h-[22px] rounded bg-[#34A853] flex items-center justify-center text-[11px] font-extrabold text-white">
          S
        </div>
        <span className="font-(--font-display) text-[12px] font-bold text-white/50">
          Google Sheets
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="grid grid-cols-[1fr_0.6fr_0.5fr] gap-1 text-[9px] font-(--font-display) font-semibold text-white/20 uppercase tracking-wider">
          <span className="px-2 py-1">ADDRESS</span>
          <span className="px-2 py-1">PRICE</span>
          <span className="px-2 py-1">ST...</span>
        </div>
        {rows.map((r) => (
          <div
            key={r.addr}
            className="grid grid-cols-[1fr_0.6fr_0.5fr] gap-1 text-[10px] font-(--font-display) font-medium text-white/40"
          >
            <span className="bg-white/3 rounded px-2 py-1.5 truncate">
              {r.addr}
            </span>
            <span className="bg-white/3 rounded px-2 py-1.5">
              {r.price}
            </span>
            <span className="bg-white/3 rounded px-2 py-1.5">
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Product() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="product"
      className="relative bg-bg-dark text-white py-24 overflow-hidden"
    >
      {/* Subtle glow */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,rgba(224,69,53,0.06)_0%,transparent_55%)] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-[1160px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="font-(--font-display) text-xs font-bold text-red tracking-widest uppercase mb-4">
            Product
          </div>
          <h2 className="font-(--font-display) font-extrabold text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-white max-w-[560px] mx-auto">
            See the full ecosystem in action.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-[1.1fr_0.45fr_0.45fr] md:grid-rows-[auto_auto_auto] gap-2.5 max-w-[920px] mx-auto"
        >
          {/* Telegram chat */}
          <TelegramChat inView={inView} />

          {/* Languages */}
          <div className="rounded-2xl border border-white/6 bg-white/3 flex flex-col items-center justify-center gap-3 py-6 px-4 text-center">
            <div className="flex gap-5 font-(--font-display) text-[22px] font-extrabold text-white/85 tracking-widest">
              <span>GE</span>
              <span>EN</span>
              <span>RU</span>
            </div>
            <div className="font-(--font-display) text-[13px] font-bold text-white/55">
              3 Languages
            </div>
            <div className="font-(--font-display) text-[11px] text-white/25">
              KA &middot; EN &middot; RU
            </div>
          </div>

          {/* Speed */}
          <div className="rounded-2xl border border-white/6 bg-white/3 flex flex-col items-center justify-center py-6 px-4 text-center">
            <div className="font-(--font-display) text-[28px] font-extrabold text-white leading-none">
              &lt; 60s
            </div>
            <div className="font-(--font-display) text-[11px] font-semibold text-white/35 mt-2 uppercase tracking-wide">
              Per listing
            </div>
          </div>

          {/* Google Sheets */}
          <SheetsPreview />

          {/* Live */}
          <div className="rounded-2xl border border-white/6 bg-white/3 flex flex-col items-center justify-center py-6 px-4 text-center">
            <div className="w-10 h-10 rounded-full border-2 border-[#4ADE80] flex items-center justify-center mb-2.5 animate-[ring-pulse_3s_ease-in-out_infinite]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4ADE80]" />
            </div>
            <div className="font-(--font-display) text-[13px] font-bold text-[#4ADE80]">
              Live
            </div>
            <div className="font-(--font-display) text-[11px] text-white/30 mt-0.5">
              24/7 operational
            </div>
          </div>

          {/* Auto-sync */}
          <div className="rounded-2xl border border-white/6 bg-white/3 flex flex-col items-center justify-center py-6 px-4 text-center">
            <RefreshCw
              size={26}
              strokeWidth={1.5}
              className="text-white/45 mb-2"
            />
            <div className="font-(--font-display) text-[13px] font-bold text-white/60">
              Auto-sync
            </div>
            <div className="font-(--font-display) text-[11px] text-white/30 mt-0.5">
              Real-time data flow
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
