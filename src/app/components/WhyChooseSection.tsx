const comparisons = [
  { feature: "Inalámbrica y portable", mini: true, trad: false },
  { feature: "Recarga por USB-C", mini: true, trad: false },
  { feature: "Función aspirar + soplar", mini: true, trad: false },
  { feature: "Peso menor a 400g", mini: true, trad: false },
  { feature: "Filtro reutilizable", mini: true, trad: true },
  { feature: "Accesorios incluidos", mini: true, trad: false },
  { feature: "Nivel de ruido < 60 dB", mini: true, trad: false },
  { feature: "Precio accesible", mini: true, trad: false },
  { feature: "Cabe en cualquier bolso", mini: true, trad: false },
];

const stats = [
  { value: "+12,000", label: "Clientes satisfechos" },
  { value: "4.9★", label: "Calificación promedio" },
  { value: "30 días", label: "Garantía de devolución" },
  { value: "2 en 1", label: "Modos de uso" },
];

export function WhyChooseSection() {
  return (
    <section style={{ background: "#1A1A1A", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span
            style={{
              background: "rgba(249,115,22,0.2)",
              color: "#F97316",
              padding: "6px 16px",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Comparativa
          </span>
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(24px, 4vw, 40px)",
              fontWeight: 800,
              marginTop: "16px",
              marginBottom: "12px",
              lineHeight: 1.2,
            }}
          >
            ¿Por Qué Elegir Esta
            <br />
            <span style={{ color: "#F97316" }}>Mini Aspiradora?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", maxWidth: "480px", margin: "0 auto" }}>
            Las aspiradoras tradicionales ya son historia. Descubre la diferencia.
          </p>
        </div>

        {/* Comparison Table */}
        <div
          style={{
            background: "#242424",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            marginBottom: "56px",
          }}
        >
          {/* Table Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              padding: "20px 24px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontWeight: 600 }}>Característica</span>
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  background: "#F97316",
                  color: "#fff",
                  padding: "6px 16px",
                  borderRadius: "50px",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                ✨ Mini Aspiradora 2en1
              </span>
            </div>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontWeight: 600, textAlign: "center" }}>
              Aspiradora Tradicional
            </span>
          </div>

          {/* Table Rows */}
          {comparisons.map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                padding: "16px 24px",
                borderBottom: i < comparisons.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px" }}>{row.feature}</span>
              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: row.mini ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)",
                    color: row.mini ? "#10B981" : "#EF4444",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  {row.mini ? "✓" : "✕"}
                </span>
              </div>
              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: row.trad ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)",
                    color: row.trad ? "#10B981" : "#EF4444",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  {row.trad ? "✓" : "✕"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "24px",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                background: "rgba(249,115,22,0.08)",
                border: "1px solid rgba(249,115,22,0.2)",
                borderRadius: "20px",
                padding: "28px 24px",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#F97316", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, marginBottom: "6px" }}>
                {stat.value}
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
