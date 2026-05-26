'use client'

import { useEffect, useRef } from 'react'

/**
 * Five full-width wave lines that very slowly breathe across the background.
 * Each line is a sum of three sine harmonics at different spatial and time
 * frequencies — this prevents any obviously repeating or mechanical look.
 *
 * All values are tuned to be almost imperceptible frame-to-frame but clearly
 * alive when you watch for 10–20 seconds.
 */

interface WaveLine {
  /** Vertical position as a fraction of canvas height */
  yRatio: number
  /** Peak-to-trough amplitudes for three harmonic layers (px) */
  amps: [number, number, number]
  /** Time-domain angular speeds (radians per frame at ~60fps) */
  speeds: [number, number, number]
  /** Initial phase offsets so lines don't all move in sync */
  phases: [number, number, number]
  color: string
  opacity: number
  width: number
}

const LINES: WaveLine[] = [
  {
    yRatio: 0.13,
    amps: [40, 18, 7],
    speeds: [0.00038, 0.00061, 0.00115],
    phases: [0.0, 1.1, 2.4],
    color: '#7C8C6C',
    opacity: 0.10,
    width: 1.0,
  },
  {
    yRatio: 0.31,
    amps: [28, 22, 10],
    speeds: [0.00030, 0.00054, 0.00092],
    phases: [0.7, 2.0, 0.4],
    color: '#C96C4A',
    opacity: 0.07,
    width: 0.85,
  },
  {
    yRatio: 0.50,
    amps: [44, 14, 12],
    speeds: [0.00025, 0.00068, 0.00108],
    phases: [1.3, 0.6, 3.1],
    color: '#B7BDC7',
    opacity: 0.09,
    width: 0.9,
  },
  {
    yRatio: 0.69,
    amps: [32, 20, 8],
    speeds: [0.00044, 0.00046, 0.00085],
    phases: [2.1, 1.5, 0.9],
    color: '#7C8C6C',
    opacity: 0.08,
    width: 1.1,
  },
  {
    yRatio: 0.86,
    amps: [22, 26, 10],
    speeds: [0.00035, 0.00058, 0.00100],
    phases: [0.4, 2.8, 1.7],
    color: '#C96C4A',
    opacity: 0.06,
    width: 0.7,
  },
]

export default function FloatingLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Capture as non-null locals so nested functions stay happy under strict TS
    const canvasEl: HTMLCanvasElement = canvas
    const ctxEl: CanvasRenderingContext2D = ctx

    let W = 0
    let H = 0
    let t = 0
    let raf: number

    function resize() {
      W = window.innerWidth
      H = window.innerHeight
      canvasEl.width = W
      canvasEl.height = H
    }

    function tick() {
      ctxEl.clearRect(0, 0, W, H)
      t++

      for (const line of LINES) {
        const baseY = H * line.yRatio
        ctxEl.beginPath()

        // Sample the wave at every 6 pixels horizontally
        for (let px = 0; px <= W; px += 6) {
          const xr = px / W // 0 → 1 across the width

          // Three harmonic layers with different spatial frequencies
          const y =
            baseY +
            line.amps[0] * Math.sin(t * line.speeds[0] + xr * 3.0 + line.phases[0]) +
            line.amps[1] * Math.sin(t * line.speeds[1] + xr * 7.0 + line.phases[1]) +
            line.amps[2] * Math.sin(t * line.speeds[2] + xr * 14.0 + line.phases[2])

          px === 0 ? ctxEl.moveTo(px, y) : ctxEl.lineTo(px, y)
        }

        ctxEl.globalAlpha = line.opacity
        ctxEl.strokeStyle = line.color
        ctxEl.lineWidth = line.width
        ctxEl.lineJoin = 'round'
        ctxEl.stroke()
      }

      ctxEl.globalAlpha = 1
      raf = requestAnimationFrame(tick)
    }

    resize()
    tick()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none select-none"
      style={{ zIndex: 0 }}
    />
  )
}
