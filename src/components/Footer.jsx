import { Send, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="AIERT" className="w-7 h-7 rounded-full" />
            <span className="font-(--font-display) font-extrabold text-[15px]">
              AIERT
            </span>
          </div>

          <div className="text-[13px] text-text-faint text-center md:text-left">
            sandro@aiert.xyz &middot; Tbilisi, Georgia
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] text-text-dim hover:text-red transition-colors"
            >
              <Send size={14} />
              Telegram
            </a>
            <a
              href="mailto:sandro@aiert.xyz"
              className="flex items-center gap-1.5 text-[13px] text-text-dim hover:text-red transition-colors"
            >
              <Mail size={14} />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
