const benefits = [
  {
    icon: "🔄",
    title: "Función 2 en 1",
    description: "Aspira y sopla con un solo dispositivo. Cambia el modo en segundos para diferentes necesidades.",
    color: "#F97316",
  },
  {
    icon: "🔋",
    title: "Inalámbrica y Recargable",
    description: "Carga rápida vía USB-C. Sin cables molestos, llévala a donde quieras sin limitaciones.",
    color: "#3B82F6",
  },
  // {
  //   icon: "💨",
  //   title: "Potente Succión",
  //   description: "Motor de alta potencia en un cuerpo compacto. Más succión que aspiradoras del doble de tamaño.",
  //   color: "#8B5CF6",
  // },
  {
    icon: "🪶",
    title: "Ligera y Portátil",
    description: "Solo 350g de peso. Cabe en el guantera de tu auto, mochila o cajón de escritorio.",
    color: "#10B981",
  },
  {
    icon: "🔇",
    title: "Silenciosa",
    description: "Diseño de bajo ruido para no molestar en oficinas, bibliotecas o mientras otros duermen.",
    color: "#F59E0B",
  },
  {
    icon: "♻️",
    title: "Filtro Lavable",
    description: "Filtro reutilizable y lavable. Sin gastos adicionales en filtros de repuesto.",
    color: "#EF4444",
  },
];

export function BenefitsSection() {
  return (
    <section style={{ background: "#F9FAFB", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
            style={{
              background: "rgba(249,115,22,0.1)",
              color: "#F97316",
              padding: "6px 16px",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Por qué la amarás
          </span>
          <h2
            style={{
              color: "#1A1A1A",
              fontSize: "clamp(24px, 4vw, 40px)",
              fontWeight: 800,
              marginTop: "16px",
              marginBottom: "12px",
              lineHeight: 1.2,
            }}
          >
            Todo lo que Necesitas en un Solo Dispositivo
          </h2>
          <p style={{ color: "#6B7280", fontSize: "16px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>
            Diseñada para hacer tu vida más fácil. Potente, inteligente y siempre lista.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {benefits.map((benefit, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "32px 28px",
                border: "1px solid #E5E7EB",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: `${benefit.color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
              >
                {benefit.icon}
              </div>
              <h3
                style={{
                  color: "#1A1A1A",
                  fontSize: "18px",
                  fontWeight: 700,
                  marginBottom: "10px",
                }}
              >
                {benefit.title}
              </h3>
              <p style={{ color: "#6B7280", fontSize: "15px", lineHeight: 1.65 }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
