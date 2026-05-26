/**
 * Full typographic brand signature.
 *
 * Recreates the logo design exactly:
 *   • "Praharshita" — large elegant serif (Georgia / system serif fallback)
 *   • Burnt-orange accent dot centred between the two name lines
 *   • "KULKARNI" — tracked caps in muted sage-gray, lighter weight
 *   • "AI-NATIVE GROWTH MARKETER" — micro tagline, silver, wide tracking
 *                                    (omitted in compact mode)
 *
 * compact={true} — drops the tagline and uses a tighter viewBox, ideal for
 * the navbar where vertical space is limited (renders ≈39px tall at width=155).
 *
 * Rendered as inline SVG (no background rect) so it blends transparently
 * on any surface. Inter is already loaded by the page via next/font.
 *
 * Server component — no interactivity needed.
 */
interface LogoFullProps {
  /** Rendered width in px; height scales proportionally from the viewBox. */
  width?: number
  className?: string
  /**
   * compact=true  → no tagline, tighter viewBox — use in the navbar.
   * compact=false → full version with tagline — use in the footer / standalone.
   */
  compact?: boolean
}

export default function LogoFull({ width = 220, className, compact = false }: LogoFullProps) {
  // Compact viewBox clips below KULKARNI so the navbar render stays tight.
  const viewBox = compact ? '0 0 540 136' : '0 0 540 156'

  return (
    <svg
      viewBox={viewBox}
      width={width}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      overflow="visible"
      aria-label="Praharshita Kulkarni — AI-Native Growth Marketer"
    >
      {/* First name — large roman serif */}
      <text
        x="270"
        y="76"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="78"
        fontWeight="normal"
        fill="#1C1917"
        textAnchor="middle"
      >
        Praharshita
      </text>

      {/* Burnt-orange accent dot — sits in the gap between the two name lines */}
      <circle cx="270" cy="90" r="3.5" fill="#C96C4A" />

      {/* Last name — tracked all-caps, muted sage */}
      <text
        x="270"
        y="126"
        fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontSize="27"
        fontWeight="300"
        fill="#78716C"
        textAnchor="middle"
        letterSpacing="9"
      >
        KULKARNI
      </text>

      {/* Tagline — full version only */}
      {!compact && (
        <text
          x="270"
          y="147"
          fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
          fontSize="8.5"
          fontWeight="400"
          fill="#B7BDC7"
          textAnchor="middle"
          letterSpacing="3.8"
        >
          AI-NATIVE GROWTH MARKETER
        </text>
      )}
    </svg>
  )
}
