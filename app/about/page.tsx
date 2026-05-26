'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import GradientMesh from '@/components/GradientMesh'

const skills = [
  'SEO Strategy',
  'Content Marketing',
  'LinkedIn Growth',
  'Email Newsletters',
  'GTM Strategy',
  'Copywriting',
  'AI Tooling',
  'Analytics & Tracking',
  'Keyword Research',
  'Demand Generation',
  'Content Distribution',
  'Positioning',
  'ICP Definition',
  'Editorial Calendar',
  'Thought Leadership',
  'Social Selling',
  'Competitive Research',
  'Persona Development',
]

const quickFacts = [
  { label: 'Location', value: '[PLACEHOLDER] Bangalore, India' },
  { label: 'Experience', value: '3.2 years' },
  { label: 'Availability', value: 'Open to new projects' },
  { label: 'Time zone', value: '[PLACEHOLDER] IST (UTC+5:30)' },
  { label: 'Focus', value: 'B2B SaaS · AI · DevTools' },
  { label: 'Preferred engagement', value: 'Fractional · Project-based' },
]

const beliefs = [
  {
    n: '01',
    text: "Organic growth is the most compounding channel available to a startup. Every piece of content you build today can be working for you in 3 years. Paid can't say the same.",
  },
  {
    n: '02',
    text: "AI doesn't replace good marketing judgment — it amplifies it. The growth marketers who thrive in the next decade will be the ones who use AI to think bigger, not just to produce faster.",
  },
  {
    n: '03',
    text: "The best GTM strategy is the one your team can actually execute. A brilliant plan that requires 10 people to run is useless for a team of 3.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F6F1E8]">
      {/* Page header */}
      <div className="relative pt-32 pb-16 overflow-hidden border-b border-[#D8D1C7]">
        <GradientMesh />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-widest text-[#7C8C6C] font-medium mb-3 block">
              About
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1C1917] leading-tight">
              Behind the growth strategy
            </h1>
          </AnimatedSection>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start">

          {/* ── Left column ─────────────────────────────── */}
          <AnimatedSection className="flex flex-col gap-6 lg:sticky lg:top-24">
            {/* Photo placeholder */}
            <div className="w-full aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#ECE4D8] to-[#F6F1E8] border border-[#D8D1C7] flex items-end overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C8C6C]/6 to-[#C96C4A]/5" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7C8C6C] to-[#C96C4A] flex items-center justify-center shadow-[0_4px_24px_rgba(124,140,108,0.3)]">
                  <span className="text-white font-bold text-2xl">PK</span>
                </div>
                <span className="text-[#78716C]/50 text-xs text-center px-6">
                  [PLACEHOLDER — 3:4 portrait photo]
                </span>
              </div>
              <div className="relative z-10 p-5 w-full bg-gradient-to-t from-[#ECE4D8]/70 to-transparent">
                <p className="text-[#1C1917] font-semibold text-sm">Praharshita Kulkarni</p>
                <p className="text-[#57534E] text-xs mt-0.5">AI-Native Growth Marketer</p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="bg-[#FFFDF8] border border-[#D8D1C7] rounded-2xl p-5 flex flex-col divide-y divide-[#D8D1C7]/60">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0"
                >
                  <span className="text-xs uppercase tracking-wider text-[#78716C] shrink-0">
                    {fact.label}
                  </span>
                  <span className="text-sm text-[#1C1917] text-right">{fact.value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
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

          {/* ── Right column ────────────────────────────── */}
          <div className="flex flex-col gap-14">

            {/* Bio */}
            <AnimatedSection delay={0.1}>
              <span className="text-xs uppercase tracking-widest text-[#C96C4A] font-medium mb-5 block">
                Background
              </span>
              <div className="space-y-4 text-[#57534E] text-[15px] leading-relaxed">
                <p>
                  [PLACEHOLDER] I started my career doing everything at once — writing blog posts,
                  managing social media, trying to run ads, and figuring out what "growth" actually
                  meant for a B2B startup. It was messy, but it taught me something that still shapes
                  every engagement: growth is a system, not a collection of tactics.
                </p>
                <p>
                  Over 3.2 years, I've worked with early-stage AI and SaaS companies across DevTools,
                  GenAI, and enterprise software — usually as the first dedicated growth hire or a
                  fractional partner embedded directly in the founding team. No layers. No account
                  managers. Just me, the work, and the results.
                </p>
                <p>
                  [PLACEHOLDER] I'm particularly drawn to the early stage — before the playbook exists,
                  when you're still figuring out who your buyer really is and what language makes them
                  pay attention. That's where ambiguity is highest, and where clear strategic thinking
                  creates the most leverage. That's where I do my best work.
                </p>
              </div>
            </AnimatedSection>

            {/* What I believe */}
            <AnimatedSection delay={0.18}>
              <span className="text-xs uppercase tracking-widest text-[#7C8C6C] font-medium mb-6 block">
                What I believe
              </span>
              <div className="flex flex-col gap-3">
                {beliefs.map((b) => (
                  <motion.div
                    key={b.n}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.18 }}
                    className="flex gap-5 p-5 rounded-xl bg-[#FFFDF8] border border-[#D8D1C7] hover:border-[#7C8C6C]/40 transition-colors duration-200"
                  >
                    <span className="text-[#7C8C6C] font-mono text-xs font-bold shrink-0 pt-0.5 tabular-nums">
                      {b.n}
                    </span>
                    <p className="text-[#57534E] text-sm leading-relaxed">{b.text}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Skills */}
            <AnimatedSection delay={0.26}>
              <span className="text-xs uppercase tracking-widest text-[#7C8C6C] font-medium mb-5 block">
                Skills
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.15 }}
                    className="text-sm px-3.5 py-1.5 rounded-full bg-[#FFFDF8] border border-[#D8D1C7] text-[#57534E] hover:border-[#7C8C6C]/50 hover:text-[#1C1917] transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </AnimatedSection>

            {/* Interests */}
            <AnimatedSection delay={0.32}>
              <span className="text-xs uppercase tracking-widest text-[#78716C] font-medium mb-4 block">
                When not working
              </span>
              <p className="text-[#57534E] text-sm leading-relaxed">
                [PLACEHOLDER] Reading AI research papers, experimenting with new LLM workflows,
                writing about growth and AI on LinkedIn, watching too many founder interviews, and
                building small tools that solve exactly one annoying problem in my own work.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
