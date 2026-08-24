export function ConceptVideoBackground() {
  return (
    <div className="concept-bg" aria-hidden="true">
      <video autoPlay loop muted playsInline>
        <source src="/concept/kaos-promo.webm" type="video/webm" />
      </video>
      <div className="concept-bg-scrim" />
    </div>
  )
}
