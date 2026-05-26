'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { caseStudies } from '@/lib/data'

export default function CaseStudyPage() {
  const params = useParams()
  const slug = params?.slug as string
  const study = caseStudies.find((s) => s.slug === slug)
  const studyIndex = caseStudies.findIndex((s) => s.slug === slug)
  const nextStudy = caseStudies[(studyIndex + 1) % caseStudies.length]

  if (!study) {
    return (
      <div className="min-h-screen bg-[#F6F1E8] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#57534E] mb-4">Case study not found.</p>
          <Link href="/work" className="text-[#7C8C6C] hover:underline text-sm">
            ← Back to Work
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F6F1E8]">
      {/* Hero header */}
      <div
        className={`relative pt-32 pb-20 bg-gradient-to-br ${study.coverGradient} border-b border-[#D8D1C7] overflow-hidden`}
      >
        <div className="absolute inset-0 bg-[#F6F1E8]/45" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-[#57534E] hover:text-[#1C1917] transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Work
            </Link>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1 rounded-full bg-[#FFFDF8] border border-[#D8D1C7] text-xs text-[#57534E] uppercase tracking-wider font-medium">
                {study.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FFFDF8] border border-[#C96C4A]/30 text-xs text-[#C96C4A] uppercase tracking-wider font-medium">
                {study.industry}
              </span>
            </div>

            <p className="text-sm text-[#57534E] uppercase tracking-widest font-medium mb-3">
              {study.company}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] leading-tight">
              {study.headline}
            </h1>
          </AnimatedSection>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Results — top of page for impact */}
        <AnimatedSection className="mb-20">
          <span className="text-xs uppercase tracking-widest text-[#C96C4A] font-medium mb-6 block">
            Results
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {study.results.map((r) => (
              <motion.div
                key={r.metric}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-[#FFFDF8] border border-[#D8D1C7] rounded-2xl p-5 text-center hover:border-[#7C8C6C]/40 transition-colors duration-200 hover:shadow-[0_4px_20px_rgba(124,140,108,0.1)]"
              >
                <p className="text-2xl sm:text-3xl font-bold text-[#1C1917] leading-none mb-2">
                  {r.metric}
                </p>
                <p className="text-[#57534E] text-xs leading-tight">{r.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 lg:gap-16">

          {/* Main content */}
          <div className="flex flex-col gap-14">

            {/* Context */}
            <AnimatedSection delay={0.05}>
              <span className="text-xs uppercase tracking-widest text-[#7C8C6C] font-medium mb-5 block">
                Context
              </span>
              <p className="text-[#57534E] text-[15px] leading-relaxed">{study.context}</p>
            </AnimatedSection>

            {/* Role */}
            <AnimatedSection delay={0.1}>
              <span className="text-xs uppercase tracking-widest text-[#7C8C6C] font-medium mb-5 block">
                My Role
              </span>
              <div className="bg-[#FFFDF8] border border-[#D8D1C7] rounded-xl p-5">
                <p className="text-[#57534E] text-sm leading-relaxed">{study.role}</p>
              </div>
            </AnimatedSection>

            {/* What I Did */}
            <AnimatedSection delay={0.15} stagger={false}>
              <span className="text-xs uppercase tracking-widest text-[#7C8C6C] font-medium mb-6 block">
                What I Did
              </span>
              <div className="flex flex-col gap-3">
                {study.whatIDid.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-4 p-4 rounded-xl bg-[#FFFDF8] border border-[#D8D1C7] hover:border-[#7C8C6C]/35 transition-colors duration-200"
                  >
                    <span className="text-[#7C8C6C] font-mono text-xs font-bold shrink-0 pt-0.5 w-5 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-[#57534E] text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Key Insight */}
            <AnimatedSection delay={0.2}>
              <span className="text-xs uppercase tracking-widest text-[#7C8C6C] font-medium mb-5 block">
                Key Insight
              </span>
              <div className="relative p-6 rounded-2xl bg-[#FFFDF8] border border-[#7C8C6C]/30 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#7C8C6C] to-[#C96C4A] rounded-l-2xl" />
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#7C8C6C]/5 blur-2xl" />
                <p className="text-[#1C1917] text-[15px] leading-relaxed font-medium relative z-10">
                  "{study.keyInsight}"
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <AnimatedSection delay={0.08} className="flex flex-col gap-5 lg:sticky lg:top-24 self-start">
            <div className="bg-[#FFFDF8] border border-[#D8D1C7] rounded-2xl p-5">
              <p className="text-xs uppercase tracking-widest text-[#78716C] font-medium mb-4">
                Engagement details
              </p>
              <div className="flex flex-col divide-y divide-[#D8D1C7]/60">
                {[
                  { label: 'Client', value: study.company },
                  { label: 'Industry', value: study.industry },
                  { label: 'Type', value: study.category },
                ].map((d) => (
                  <div key={d.label} className="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0">
                    <span className="text-xs text-[#78716C] uppercase tracking-wider">{d.label}</span>
                    <span className="text-sm text-[#1C1917]">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#7C8C6C] text-white font-semibold text-sm hover:bg-[#6a7a5c] transition-all duration-200 hover:shadow-[0_4px_20px_rgba(124,140,108,0.35)]"
            >
              Work with me
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>

        {/* Next case study */}
        {nextStudy && (
          <AnimatedSection delay={0.1} className="mt-24 pt-12 border-t border-[#D8D1C7]">
            <p className="text-xs uppercase tracking-widest text-[#78716C] font-medium mb-4">
              Next case study
            </p>
            <Link href={`/work/${nextStudy.slug}`} className="group block">
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between p-6 rounded-2xl bg-[#FFFDF8] border border-[#D8D1C7] hover:border-[#7C8C6C]/50 transition-colors duration-200 hover:shadow-[0_4px_20px_rgba(124,140,108,0.1)]"
              >
                <div>
                  <p className="text-xs text-[#57534E] uppercase tracking-wider mb-1">
                    {nextStudy.company} · {nextStudy.industry}
                  </p>
                  <p className="text-[#1C1917] font-semibold group-hover:text-[#7C8C6C] transition-colors">
                    {nextStudy.headline}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-[#57534E] group-hover:text-[#7C8C6C] transition-colors shrink-0 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </Link>
          </AnimatedSection>
        )}
      </div>
    </div>
  )
}
