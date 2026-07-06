/** Poster-inspired dark canvas with gold songket-style corner motifs */
export function BrandBackground({ children, className = '', id }) {
  return (
    <div id={id} className={`rantau-bg relative min-h-screen ${className}`}>
      <div className="rantau-bg__texture pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="rantau-bg__glow pointer-events-none fixed inset-0 z-0" aria-hidden="true" />

      <svg
        className="rantau-bg__corner rantau-bg__corner--tr pointer-events-none fixed -right-8 -top-8 z-0 h-[min(55vw,420px)] w-[min(55vw,420px)]"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <g opacity="0.55" stroke="#c4a35a" strokeWidth="0.75">
          <path d="M380 20 Q320 80 280 40 Q240 0 200 60 Q160 120 120 80 Q80 40 40 100" />
          <path d="M360 60 Q300 120 260 100 Q220 80 180 140" />
          <path d="M340 100 Q280 160 240 140" />
          <circle cx="320" cy="48" r="6" fill="#c4a35a" stroke="none" opacity="0.6" />
          <circle cx="260" cy="88" r="4" fill="#c4a35a" stroke="none" opacity="0.45" />
          <circle cx="200" cy="52" r="5" fill="#c4a35a" stroke="none" opacity="0.5" />
        </g>
        <g opacity="0.35" fill="#c4a35a">
          <path d="M350 30 L365 45 L350 60 L335 45 Z" />
          <path d="M290 70 L302 82 L290 94 L278 82 Z" />
          <path d="M230 110 L240 120 L230 130 L220 120 Z" />
          <path d="M170 50 L180 60 L170 70 L160 60 Z" />
        </g>
        <g opacity="0.25" stroke="#d4b876" strokeWidth="0.5">
          <path d="M400 0 L400 120 L280 0 Z" fill="url(#goldFadeTR)" />
          <path d="M400 0 L280 0 L400 140 Z" />
        </g>
        <defs>
          <linearGradient id="goldFadeTR" x1="400" y1="0" x2="280" y2="120">
            <stop offset="0%" stopColor="#c4a35a" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#c4a35a" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="rantau-bg__corner rantau-bg__corner--bl pointer-events-none fixed -bottom-8 -left-8 z-0 h-[min(55vw,420px)] w-[min(55vw,420px)]"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <g opacity="0.55" stroke="#c4a35a" strokeWidth="0.75">
          <path d="M20 380 Q80 320 120 360 Q160 400 200 340 Q240 280 280 320 Q320 360 360 300" />
          <path d="M40 340 Q100 280 140 300 Q180 320 220 260" />
          <path d="M60 300 Q120 240 160 260" />
          <circle cx="80" cy="352" r="6" fill="#c4a35a" stroke="none" opacity="0.6" />
          <circle cx="140" cy="312" r="4" fill="#c4a35a" stroke="none" opacity="0.45" />
          <circle cx="200" cy="348" r="5" fill="#c4a35a" stroke="none" opacity="0.5" />
        </g>
        <g opacity="0.35" fill="#c4a35a">
          <path d="M50 370 L65 355 L50 340 L35 355 Z" />
          <path d="M110 330 L122 318 L110 306 L98 318 Z" />
          <path d="M170 290 L180 280 L170 270 L160 280 Z" />
          <path d="M230 350 L240 340 L230 330 L220 340 Z" />
        </g>
        <g opacity="0.25" stroke="#d4b876" strokeWidth="0.5">
          <path d="M0 400 L0 280 L120 400 Z" fill="url(#goldFadeBL)" />
        </g>
        <defs>
          <linearGradient id="goldFadeBL" x1="0" y1="400" x2="120" y2="280">
            <stop offset="0%" stopColor="#c4a35a" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#c4a35a" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  )
}
