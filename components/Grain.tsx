/**
 * Film-grain texture overlay using an SVG feTurbulence filter.
 * Renders as a fixed-position layer above the canvas animation but
 * below all page content. Gives the cream background a paper-like
 * tactile quality at opacity 0.045 — barely visible but clearly there.
 *
 * Server component — no interactivity needed.
 */
export default function Grain() {
  const noiseSvg =
    "data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E"

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        backgroundImage: `url("${noiseSvg}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '256px 256px',
        opacity: 0.045,
      }}
    />
  )
}
