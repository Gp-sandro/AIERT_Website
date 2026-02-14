import { Send, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="AIERT" className="w-8 h-8 rounded-full" />
            <div className="text-sm text-text-muted">
              <span className="text-text-secondary font-semibold">AIERT</span>
              {' '}&middot; Tbilisi, Georgia
              <br />
              &copy; {new Date().getFullYear()} AIERT. All rights reserved.
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-coral transition-colors"
            >
              <Send size={15} />
              Telegram
            </a>
            <a
              href="mailto:sandro@aiert.xyz"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-coral transition-colors"
            >
              <Mail size={15} />
              sandro@aiert.xyz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
