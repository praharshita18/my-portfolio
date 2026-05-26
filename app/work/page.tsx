'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection, AnimatedItem } from '@/components/AnimatedSection'
import GradientMesh from '@/components/GradientMesh'
import { caseStudies } from '@/lib/data'

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#F6F1E8]">
      {/* Page header */}
      <div className="relative pt-32 pb-16 overflow-hidden border-b border-[#D8D1C7]">
        <GradientMesh />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-widest text-[#7C8C6C] font-medium mb-3 block">
              Work
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1C1917] leading-tight mb-4">
              Case Studies
            </h1>
            <p className="text-[#57534E] text-base max-w-xl leading-relaxed">
              A selection of growth engagements across AI, DevTools, and B2B SaaS — with full
              context, process, and results.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Case study grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {caseStudies.map((study) => (
            <AnimatedItem key={study.slug}>
              <motion.div
                whileHover={{ scale: 1.012, y: -3 }}
                transition={{ duration: 0.22 }}
                className="group bg-[#FFFDF8] border border-[#D8D1C7] rounded-2xl overflow-hidden hover:border-[#7C8C6C]/50 transition-colors duration-300 hover:shadow-[0_8px_36px_rgba(124,140,108,0.13)] flex flex-col h-full"
              >
                {/* Thumbnail placeholder */}
                <div
                  className={`h-48 bg-gradient-to-br ${study.coverGradient} relative flex items-center justify-center shrink-0`}
                >
                  <span className="text-[#1C1917]/20 text-xs uppercase tracking-widest px-4 text-center">
                    [PLACEHOLDER — case study thumbnail]
                  </span>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#FFFDF8]/80 backdrop-blur-sm text-xs text-[#57534E] border border-[#D8D1C7]">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="px-2 py-0.5 rounded-full bg-[#FFFDF8]/80 backdrop-blur-sm text-xs text-[#C96C4A] border border-[#C96C4A]/25">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-[#57534E] uppercase tracking-wider font-medium mb-3">
                    {study.company}
                  </p>
                  <h2 className="text-base font-semibold text-[#1C1917] mb-2 group-hover:text-[#7C8C6C] transition-colors duration-200 leading-snug">
                    {study.headline}
                  </h2>
                  <p className="text-[#57534E] text-sm leading-relaxed flex-1 mb-6">
                    {study.description}
                  </p>

                  {/* Quick results preview */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {study.results.slice(0, 2).map((r) => (
                      <div
                        key={r.metric}
                        className="bg-[#F6F1E8] rounded-xl p-3 border border-[#D8D1C7]"
                      >
                        <p className="text-lg font-bold text-[#1C1917] leading-none mb-1">
                          {r.metric}
                        </p>
                        <p className="text-[#78716C] text-xs leading-tight">{r.label}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/work/${study.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-[#7C8C6C] font-medium hover:gap-3 transition-all duration-200 mt-auto"
                  >
                    Read Case Study
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.3} className="mt-20 text-center">
          <p className="text-[#57534E] text-sm mb-6">
            Interested in working together on something similar?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#FFFDF8] border border-[#D8D1C7] text-[#1C1917] font-medium text-sm hover:border-[#7C8C6C]/60 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(124,140,108,0.14)]"
          >
            Let's Talk
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </div>
  )
}
