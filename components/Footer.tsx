import Link from 'next/link'
import LogoFull from '@/components/LogoFull'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#ECE4D8] border-t border-[#D8D1C7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="group block" aria-label="Home">
              <LogoFull
                width={200}
                className="transition-opacity duration-300 group-hover:opacity-75"
              />
            </Link>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#57534E] hover:text-[#1C1917] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/praharshita-kulkarni" // [PLACEHOLDER] Replace with actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#FFFDF8] border border-[#D8D1C7] flex items-center justify-center text-[#57534E] hover:text-[#1C1917] hover:border-[#7C8C6C]/60 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* X / Twitter */}
            <a
              href="https://x.com/praharshita" // [PLACEHOLDER] Replace with actual X/Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#FFFDF8] border border-[#D8D1C7] flex items-center justify-center text-[#57534E] hover:text-[#1C1917] hover:border-[#7C8C6C]/60 transition-all duration-200"
              aria-label="X / Twitter"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#D8D1C7] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#78716C] text-xs">
            © {new Date().getFullYear()} Praharshita Kulkarni. All rights reserved.
          </p>
          <p className="text-[#B7BDC7] text-xs">Built with Next.js + Tailwind</p>
        </div>
      </div>
    </footer>
  )
}
