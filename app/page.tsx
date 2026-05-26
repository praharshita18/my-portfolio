'use client'

import Link from 'next/link'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import GradientMesh from '@/components/GradientMesh'
import { AnimatedSection, AnimatedItem } from '@/components/AnimatedSection'
import { caseStudies } from '@/lib/data'

const whatIDo = [
  {
    symbol: '◈',
    title: 'AI-Augmented Marketing',
    description:
      'I build content systems and workflows using AI tools. Lean teams get more done without adding headcount. If your team is two people with a marketing problem, this is a good place to start.',
    tags: ['AI Workflows', 'Prompt Engineering', 'Systems Thinking'],
  },
  {
    symbol: '◎',
    title: 'Organic Growth Systems',
    description:
      'SEO, content clusters, and community outreach. I have built these from zero, solo, across multiple products and industries. The goal is always sustainable traction that compounds over time.',
    tags: ['SEO', 'Content Strategy', 'Distribution'],
  },
  {
    symbol: '⬡',
    title: 'GTM Strategy and Brand Positioning',
    description:
      'I define your ICP, messaging framework, and brand voice. Then I build content around what your customers struggle with.',
    tags: ['GTM', 'Positioning', 'ICP Definition'],
  },
]

export default function Home() {
  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)
  const springX = useSpring(mouseX, { stiffness: 55, damping: 22 })
  const springY = useSpring(mouseY, { stiffness: 55, damping: 22 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  const featuredStudies = caseStudies.slice(0, 2)

  return (
    <>
      {/* Cursor glow — sage green tint */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-10 rounded-full"
        style={{
          width: 480,
          height: 480,
          background:
            'radial-gradient(circle, rgba(124,140,108,0.09) 0%, transparent 70%)',
          translateX: '-50%',
          translateY: '-50%',
          top: 0,
          left: 0,
          x: springX,
          y: springY,
        }}
      />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <GradientMesh />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF8] border border-[#D8D1C7] text-sm text-[#57534E] mb-10 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C96C4A] animate-pulse" />
            Available for new projects
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold text-[#1C1917] tracking-tight mb-6"
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.1]">
              Your business deserves to be found by the right people.
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.15] mt-3">
              I build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C8C6C] to-[#C96C4A]">
                AI-native organic growth engines
              </span>{' '}
              from the ground up
            </span>
          </motion.h1>

          {/* Subheadline tags */}
          <motion.div
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            {[
              'AI-native growth marketer',
              'Content strategy',
              'SEO',
              'Social-led distribution',
            ].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full bg-[#FFFDF8] border border-[#D8D1C7] text-sm text-[#57534E]"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/work"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#7C8C6C] text-white font-semibold text-sm hover:bg-[#6a7a5c] transition-all duration-200 hover:shadow-[0_4px_24px_rgba(124,140,108,0.4)] text-center"
            >
              See My Work
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-[#D8D1C7] text-[#1C1917] font-semibold text-sm hover:border-[#7C8C6C] hover:bg-[#7C8C6C]/6 transition-all duration-200 text-center"
            >
              Let's Talk
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-10 bg-gradient-to-b from-[#78716C]/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── Proof Strip ──────────────────────────────────────── */}
      <section className="bg-[#ECE4D8] border-y border-[#D8D1C7] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0 sm:divide-x sm:divide-[#D8D1C7]">
            {[
              {
                number: '0 → 100+',
                label: 'X followers in 30 days',
                sub: 'Social growth',
                delay: 0,
              },
              {
                number: '4+ Industries',
                label: 'AI · DevTools · B2B SaaS · GenAI',
                sub: 'Cross-sector experience',
                delay: 0.1,
              },
              {
                number: '3.2 Years',
                label: 'Full-cycle growth work',
                sub: 'From 0 to pipeline',
                delay: 0.2,
              },
            ].map((stat) => (
              <AnimatedSection
                key={stat.number}
                delay={stat.delay}
                className="flex flex-col items-center text-center px-10"
              >
                <span className="text-3xl sm:text-[38px] font-bold text-[#1C1917] tracking-tight mb-2">
                  {stat.number}
                </span>
                <span className="text-[#57534E] text-sm mb-1">{stat.label}</span>
                <span className="text-[#7C8C6C] text-xs uppercase tracking-widest font-medium">
                  {stat.sub}
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What I Do ────────────────────────────────────────── */}
      <section className="py-28 bg-[#F6F1E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <span className="text-xs uppercase tracking-widest text-[#7C8C6C] font-medium mb-3 block">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917]">What I Do</h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {whatIDo.map((card) => (
              <AnimatedItem key={card.title}>
                <motion.div
                  whileHover={{ scale: 1.012, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group bg-[#FFFDF8] border border-[#D8D1C7] rounded-2xl p-7 hover:border-[#7C8C6C]/50 transition-colors duration-300 hover:shadow-[0_6px_28px_rgba(124,140,108,0.12)] h-full flex flex-col"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#7C8C6C]/10 border border-[#7C8C6C]/25 flex items-center justify-center text-[#7C8C6C] text-xl mb-5 font-mono">
                    {card.symbol}
                  </div>
                  <h3 className="text-base font-semibold text-[#1C1917] mb-3">{card.title}</h3>
                  <p className="text-[#57534E] text-sm leading-relaxed flex-1 mb-5">
                    {card.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#F6F1E8] border border-[#D8D1C7] text-[#57534E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Featured Work ────────────────────────────────────── */}
      <section className="py-28 bg-[#ECE4D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C96C4A] font-medium mb-3 block">
                Featured Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917]">
                A few projects worth looking at closely
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden sm:flex items-center gap-2 text-sm text-[#57534E] hover:text-[#1C1917] transition-colors shrink-0"
            >
              View all
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredStudies.map((study) => (
              <AnimatedItem key={study.slug}>
                <motion.div
                  whileHover={{ scale: 1.012, y: -3 }}
                  transition={{ duration: 0.22 }}
                  className="group bg-[#FFFDF8] border border-[#D8D1C7] rounded-2xl overflow-hidden hover:border-[#7C8C6C]/50 transition-colors duration-300 hover:shadow-[0_8px_36px_rgba(124,140,108,0.14)] flex flex-col"
                >
                  {/* Thumbnail placeholder */}
                  <div
                    className={`h-44 bg-gradient-to-br ${study.coverGradient} relative flex items-center justify-center`}
                  >
                    <span className="text-[#1C1917]/20 text-xs uppercase tracking-widest px-4 text-center">
                      [PLACEHOLDER thumbnail — 16:9 image]
                    </span>
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full bg-[#FFFDF8]/80 backdrop-blur-sm text-xs text-[#57534E] border border-[#D8D1C7]">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-[#57534E] uppercase tracking-wider font-medium">
                        {study.company}
                      </span>
                      <span className="text-[#D8D1C7]">·</span>
                      <span className="text-xs text-[#78716C] uppercase tracking-wider">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[#1C1917] mb-2 group-hover:text-[#7C8C6C] transition-colors duration-200">
                      {study.headline}
                    </h3>
                    <p className="text-[#57534E] text-sm leading-relaxed flex-1 mb-5">
                      {study.description}
                    </p>
                    <Link
                      href={`/work/${study.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-[#7C8C6C] font-medium hover:gap-3 transition-all duration-200"
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

          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/work"
              className="text-sm text-[#57534E] hover:text-[#1C1917] transition-colors"
            >
              View all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ───────────────────────────────────────── */}
      <section className="py-28 bg-[#F6F1E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative rounded-3xl bg-[#FFFDF8] border border-[#7C8C6C]/30 p-12 sm:p-16 text-center overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-[#7C8C6C]/5 via-transparent to-[#C96C4A]/5"
              />
              <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#7C8C6C]/6 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[#C96C4A]/5 blur-3xl" />

              <div className="relative z-10">
                <span className="text-xs uppercase tracking-widest text-[#7C8C6C] font-medium mb-4 block">
                  Let's Build
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] mb-5">
                  Ready to build your growth engine?
                </h2>
                <p className="text-[#57534E] text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                  Whether you need a focused sprint, a content system, or a full embedded partner,
                  let's figure out what fits your current stage.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#7C8C6C] text-white font-semibold text-sm hover:bg-[#6a7a5c] transition-all duration-200 hover:shadow-[0_4px_24px_rgba(124,140,108,0.4)]"
                >
                  Start the conversation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
