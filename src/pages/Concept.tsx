export function Concept() {
  return (
    <main className="page-content">
      <div className="unofficial-banner">
        Propuesta creativa no oficial para KAOS Panamá — no oficial, no afiliada a la marca.
        Concepto elaborado únicamente como muestra de trabajo para esta postulación.
      </div>

      <h1>Concepto: Noche KAOS</h1>
      <p className="tagline">
        Tres piezas de muestra: poster de evento, carrusel de Instagram y dashboard de campaña.
      </p>

      <section className="concept-block">
        <h2>1. Poster de evento</h2>
        <div className="poster-mock">
          <p className="poster-eyebrow">Casco Antiguo · Panamá</p>
          <p className="poster-title">KAOS</p>
          <p className="poster-sub">Noche de Sábado</p>
          <div className="poster-lineup">
            <p>DJ LINEUP</p>
            <p>DJ Nombre 1 — DJ Nombre 2 — DJ Nombre 3</p>
          </div>
          <div className="poster-promo">
            <p>Entrada libre hasta las 11:00 PM</p>
            <p>Reservas de cumpleaños disponibles</p>
          </div>
          <p className="poster-cta">Preventa por Passline · Escanea el QR</p>
        </div>
      </section>

      <section className="concept-block">
        <h2>2. Carrusel de Instagram</h2>
        <div className="carousel-mock">
          <div className="phone-card">
            <p className="phone-label">Slide 1</p>
            <p className="phone-title">Lineup de la noche</p>
            <p>Anuncio de DJs y temática de la fecha</p>
          </div>
          <div className="phone-card">
            <p className="phone-label">Slide 2</p>
            <p className="phone-title">Promo de entrada</p>
            <p>Free antes de las 11 PM · fast pass por fases</p>
          </div>
          <div className="phone-card">
            <p className="phone-label">Slide 3</p>
            <p className="phone-title">Reserva tu cumpleaños</p>
            <p>Paquetes de mesa · CTA: escríbenos por WhatsApp</p>
          </div>
        </div>
      </section>

      <section className="concept-block">
        <h2>3. Dashboard de campaña (cifras de ejemplo)</h2>
        <div className="dashboard-mock">
          <div className="kpi-card">
            <p className="kpi-label">Alcance</p>
            <p className="kpi-value">42.3K</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Engagement</p>
            <p className="kpi-value">8.6%</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Clics a ticketing</p>
            <p className="kpi-value">1,120</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Reservas confirmadas</p>
            <p className="kpi-value">37</p>
          </div>
        </div>
        <p className="muted small">
          Flujo propuesto: QR / Instagram → registro → WhatsApp → recordatorio → encuesta posterior.
          Cifras ilustrativas, no datos reales de KAOS.
        </p>
      </section>
    </main>
  )
}
