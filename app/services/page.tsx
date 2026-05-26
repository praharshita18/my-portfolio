'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection, AnimatedItem } from '@/components/AnimatedSection'
import GradientMesh from '@/components/GradientMesh'
import { services } from '@/lib/data'

const iconMap = {
  rocket: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  cpu: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  map: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  ),
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F6F1E8]">
      {/* Page header */}
      <div className="relative pt-32 pb-16 overflow-hidden border-b border-[#D8D1C7]">
        <GradientMesh />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-widest text-[#7C8C6C] font-medium mb-3 block">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1C1917] leading-tight mb-4">
              How I can help
            </h1>
            <p className="text-[#57534E] text-base max-w-xl leading-relaxed">
              Four focused engagements designed for early-stage startups. Each one is scoped for
              clarity, built for execution, and priced for the stage you're at.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <AnimatedItem key={service.id}>
              <motion.div
                whileHover={{ scale: 1.012, y: -2 }}
                transition={{ duration: 0.22 }}
                className="group bg-[#FFFDF8] border border-[#D8D1C7] rounded-2xl p-7 hover:border-[#7C8C6C]/50 transition-colors duration-300 hover:shadow-[0_8px_36px_rgba(124,140,108,0.12)] flex flex-col h-full"
              >
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#7C8C6C]/10 border border-[#7C8C6C]/25 flex items-center justify-center text-[#7C8C6C] shrink-0 group-hover:bg-[#7C8C6C]/15 transition-colors duration-200">
                    {iconMap[service.icon]}
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-[#1C1917] leading-snug">
                      {service.title}
                    </h2>
                    <span className="text-sm text-[#C96C4A] font-medium">{service.priceRange}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#57534E] text-sm leading-relaxed mb-6">{service.description}</p>

                {/* Deliverables */}
                <div className="mb-6 flex-1">
                  <p className="text-xs uppercase tracking-wider text-[#78716C] font-medium mb-3">
                    What's included
                  </p>
                  <ul className="flex flex-col gap-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-[#7C8C6C] shrink-0 mt-2" />
                        <span className="text-sm text-[#57534E] leading-snug">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who for */}
                <div className="pt-5 border-t border-[#D8D1C7]">
                  <p className="text-xs uppercase tracking-wider text-[#78716C] font-medium mb-1.5">
                    Best for
                  </p>
                  <p className="text-sm text-[#57534E] leading-relaxed">{service.whoFor}</p>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Note + CTA */}
        <AnimatedSection delay={0.3} className="mt-16">
          <div className="bg-[#ECE4D8] border border-[#D8D1C7] rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[#1C1917] font-semibold text-sm mb-1">Not sure which fits?</p>
              <p className="text-[#57534E] text-sm leading-relaxed max-w-md">
                Most engagements start with a short discovery call. Tell me where you are and I'll
                recommend the right scope.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7C8C6C] text-white font-semibold text-sm hover:bg-[#6a7a5c] transition-all duration-200 hover:shadow-[0_4px_20px_rgba(124,140,108,0.35)]"
            >
              Start here
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
