import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingLines from '@/components/FloatingLines'
import Grain from '@/components/Grain'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Praharshita Kulkarni — AI-Native Growth Marketer',
  description:
    'I help early-stage AI and SaaS startups build organic growth — without a big team or budget. Content strategy, SEO, social-led distribution.',
  openGraph: {
    title: 'Praharshita Kulkarni — AI-Native Growth Marketer',
    description:
      'I help early-stage AI and SaaS startups build organic growth — without a big team or budget.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#F6F1E8] text-[#1C1917] font-sans antialiased">
        {/* Background layers — sit below all page content */}
        <FloatingLines />
        <Grain />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
