'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import GradientMesh from '@/components/GradientMesh'

type FormState = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')

    // [PLACEHOLDER] Replace this timeout with your actual form submission logic
    // e.g. fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setFormState('sent')
  }

  const inputClasses =
    'w-full bg-[#FFFDF8] border border-[#D8D1C7] rounded-xl px-4 py-3 text-[#1C1917] text-sm placeholder:text-[#B7BDC7] focus:outline-none focus:border-[#7C8C6C] focus:ring-1 focus:ring-[#7C8C6C]/20 transition-all duration-200'

  return (
    <div className="min-h-screen bg-[#F6F1E8]">
      {/* Page header */}
      <div className="relative pt-32 pb-16 overflow-hidden border-b border-[#D8D1C7]">
        <GradientMesh />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-widest text-[#7C8C6C] font-medium mb-3 block">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1C1917] leading-tight mb-4">
              Let's build something
            </h1>
            <p className="text-[#57534E] text-base max-w-md mx-auto leading-relaxed">
              Have a project in mind? Fill in the form or reach out directly — I typically respond
              within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">

          {/* Form */}
          <AnimatedSection delay={0.05}>
            <AnimatePresence mode="wait">
              {formState === 'sent' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center text-center py-20 px-8 bg-[#FFFDF8] border border-[#7C8C6C]/30 rounded-2xl"
                >
                  <div className="w-14 h-14 rounded-full bg-[#7C8C6C]/12 border border-[#7C8C6C]/30 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-[#7C8C6C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#1C1917] mb-2">Message sent</h2>
                  <p className="text-[#57534E] text-sm max-w-xs leading-relaxed">
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-wider text-[#78716C] font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className={inputClasses}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-wider text-[#78716C] font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-[#78716C] font-medium">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company or project name"
                      className={inputClasses}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-wider text-[#78716C] font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project — what you're working on, what you need, and where you are right now."
                      required
                      rows={6}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState === 'sending'}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#7C8C6C] text-white font-semibold text-sm hover:bg-[#6a7a5c] transition-all duration-200 hover:shadow-[0_4px_24px_rgba(124,140,108,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === 'sending' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-[#B7BDC7] text-center">
                    [PLACEHOLDER] No spam. No automations. A real reply from me.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection delay={0.12} className="flex flex-col gap-5">
            {/* Direct contact */}
            <div className="bg-[#FFFDF8] border border-[#D8D1C7] rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-[#78716C] font-medium mb-5">
                Reach out directly
              </p>

              <div className="flex flex-col gap-3">
                {/* Email */}
                <a
                  href="mailto:hello@praharshita.com" // [PLACEHOLDER] Replace with your actual email
                  className="group flex items-center gap-3 p-3.5 rounded-xl bg-[#F6F1E8] border border-[#D8D1C7] hover:border-[#7C8C6C]/45 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#7C8C6C]/10 border border-[#7C8C6C]/20 flex items-center justify-center text-[#7C8C6C] shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[#78716C] uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm text-[#1C1917] truncate group-hover:text-[#7C8C6C] transition-colors">
                      hello@praharshita.com {/* [PLACEHOLDER] */}
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/praharshita-kulkarni" // [PLACEHOLDER]
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3.5 rounded-xl bg-[#F6F1E8] border border-[#D8D1C7] hover:border-[#C96C4A]/45 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#C96C4A]/10 border border-[#C96C4A]/20 flex items-center justify-center text-[#C96C4A] shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[#78716C] uppercase tracking-wider mb-0.5">LinkedIn</p>
                    <p className="text-sm text-[#1C1917] truncate group-hover:text-[#C96C4A] transition-colors">
                      Praharshita Kulkarni {/* [PLACEHOLDER] */}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Response time */}
            <div className="bg-[#FFFDF8] border border-[#D8D1C7] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C8C6C] animate-pulse" />
                <p className="text-xs uppercase tracking-wider text-[#78716C] font-medium">
                  Response time
                </p>
              </div>
              <p className="text-[#1C1917] font-semibold text-sm mb-1">Usually within 24 hours</p>
              <p className="text-[#57534E] text-xs leading-relaxed">
                [PLACEHOLDER] Mon–Fri, IST timezone. I read every message and reply personally.
              </p>
            </div>

            {/* What to include */}
            <div className="bg-[#FFFDF8] border border-[#D8D1C7] rounded-2xl p-5">
              <p className="text-xs uppercase tracking-wider text-[#78716C] font-medium mb-3">
                Helpful to include
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  'What stage your startup is at',
                  'Your biggest current growth challenge',
                  "What you've already tried",
                  'Your rough timeline and budget range',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-[#7C8C6C] shrink-0 mt-2" />
                    <span className="text-sm text-[#57534E] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
