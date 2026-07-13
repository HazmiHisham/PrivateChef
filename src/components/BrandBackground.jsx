import bgBatik from '../assets/bg-batik-5.PNG'

/** Full-page batik background with subtle overlay for readability */
export function BrandBackground({ children, className = '', id }) {
  return (
    <div id={id} className={`rantau-bg relative min-h-screen ${className}`}>
      <div
        className="rantau-bg__batik pointer-events-none fixed inset-0 z-0"
        style={{ backgroundImage: `url(${bgBatik})` }}
        aria-hidden="true"
      />
      <div className="rantau-bg__overlay pointer-events-none fixed inset-0 z-0" aria-hidden="true" />

      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  )
}
