'use client'

import { motion } from 'framer-motion'

export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Sage green orb — top left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          background: 'radial-gradient(circle, rgba(124,140,108,0.14) 0%, transparent 65%)',
          top: '-15%',
          left: '-15%',
        }}
        animate={{ x: [0, 40, -25, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Burnt orange orb — top right */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 550,
          height: 550,
          background: 'radial-gradient(circle, rgba(201,108,74,0.10) 0%, transparent 65%)',
          top: '10%',
          right: '-10%',
        }}
        animate={{ x: [0, -30, 25, 0], y: [0, 25, -20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Chrome silver orb — bottom center */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 450,
          height: 450,
          background: 'radial-gradient(circle, rgba(183,189,199,0.14) 0%, transparent 65%)',
          bottom: '5%',
          left: '30%',
        }}
        animate={{ x: [0, 20, -35, 0], y: [0, -30, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 9 }}
      />

      {/* Subtle dot grid — dark dots on light background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(28,25,23,0.9) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}
