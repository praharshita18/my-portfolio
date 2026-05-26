'use client'

import { useId } from 'react'

interface LogoMarkProps {
  /** Override width/height (both scale proportionally from 34×28 viewBox) */
  size?: number
  className?: string
}

/**
 * Brand mark: a sigmoid growth curve (slow start → fast rise → apex dot).
 * The shape reads simultaneously as an analytics trend line, an organic
 * growth arc, and a stylised calligraphic stroke.
 *
 * Uses React's useId() so the SVG gradient ID is unique per instance —
 * safe to render in both Navbar and Footer without ID collisions.
 */
export default function LogoMark({ size = 34, className }: LogoMarkProps) {
  const id = useId()
  const gradId = `logo-grad-${id}`.replace(/:/g, '')

  const h = Math.round(size * (28 / 34))

  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 34 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Praharshita Kulkarni — logo mark"
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="2"
          y1="25"
          x2="31"
          y2="3"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#7C8C6C" />
          <stop offset="100%" stopColor="#C96C4A" />
        </linearGradient>
      </defs>

      {/* Sigmoid growth curve
          Starts horizontal at bottom-left (lazy launch),
          sweeps upward (growth phase),
          arrives horizontal at the apex dot (plateau).
          Control points hug the start and end so the curve reads
          as confident rather than tentative. */}
      <path
        d="M 2 25 C 9 25 23 3 31 3"
        stroke={`url(#${gradId})`}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Apex dot — the goal / destination */}
      <circle cx="31" cy="3" r="3.5" fill={`url(#${gradId})`} />
    </svg>
  )
}
