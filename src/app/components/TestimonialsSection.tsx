const woman1 = "https://images.unsplash.com/photo-1707325345025-4a02a9bc5fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwY3VzdG9tZXIlMjByZXZpZXclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM3MDA2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const man1 = "https://images.unsplash.com/photo-1664101606938-e664f5852fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXQlMjB0ZXN0aW1vbmlhbHxlbnwxfHx8fDE3NzM3MDA2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const woman2 = "https://images.unsplash.com/photo-1511587477373-0e3e105ed675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBoYXBweSUyMHBvcnRyYWl0JTIwbGF0aW5hfGVufDF8fHx8MTc3MzcwMDY1NHww&ixlib=rb-4.1.0&q=80&w=1080";

const testimonials = [
  {
    name: "María González",
    location: "Ciudad de México",
    avatar: woman1,
    rating: 5,
    date: "Hace 3 días",
    verified: true,
    text: "¡Increíble producto! La uso todos los días para limpiar el teclado de la computadora y el asiento del carro. Tiene una succión increíblemente fuerte para su tamaño. La recarga es rápida y dura bastante. 100% recomendada.",
    tag: "✓ Compra verificada",
  },
  {
    name: "Carlos Ramírez",
    location: "Guadalajara",
    avatar: man1,
    rating: 5,
    date: "Hace 1 semana",
    verified: true,
    text: "Tenía dudas al principio por el precio, pero superó mis expectativas. La uso en mi auto detallando y limpia las rendijas del tablero perfectamente. La función de soplado también es muy útil para quitar polvo de lugares difíciles.",
    tag: "✓ Compra verificada",
  },
  {
    name: "Ana Sofía López",
    location: "Monterrey",
    avatar: woman2,
    rating: 5,
    date: "Hace 2 semanas",
    verified: true,
    text: "La mejor compra del año. Tengo dos gatos y el pelo estaba en todas partes. Esta mini aspiradora limpia el sofá en minutos. Es silenciosa, los gatos no se asustan. El filtro es lavable así que no gasto en repuestos. ¡La adoro!",
    tag: "✓ Compra verificada",
  },
  {
    name: "Roberto Martínez",
    location: "Buenos Aires",
    avatar: null,
    initials: "RM",
    rating: 5,
    date: "Hace 3 semanas",
    verified: true,
    text: "Soy técnico informático y la uso para limpiar computadoras y laptops de mis clientes. Es perfecta: potente, silenciosa y con las boquillas adecuadas para rincones difíciles. Muy buena relación calidad-precio.",
    tag: "✓ Compra verificada",
  },
  {
    name: "Lucía Fernández",
    location: "Bogotá",
    avatar: null,
    initials: "LF",
    rating: 5,
    date: "Hace 1 mes",
    verified: true,
    text: "Compré dos, una para la casa y otra para la oficina. El envío fue rapidísimo y el producto llegó en perfectas condiciones. La calidad supera a otras que he visto en tiendas locales y a un mejor precio. ¡Excelente!",
    tag: "✓ Compra verificada",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? "#F59E0B" : "#D1D5DB", fontSize: "16px" }}>
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section style={{ background: "#FFFFFF", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
            Testimonios reales
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
            Lo que Dicen Nuestros
            <br />
            <span style={{ color: "#F97316" }}>+12,000 Clientes</span>
          </h2>

          {/* Overall rating */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#F9FAFB",
              border: "1px solid #E5E7EB",
              borderRadius: "50px",
              padding: "10px 24px",
              marginTop: "16px",
            }}
          >
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#1A1A1A" }}>4.9</span>
            <div>
              <StarRating count={5} />
              <p style={{ color: "#6B7280", fontSize: "12px", marginTop: "2px" }}>Basado en +2,300 reseñas</p>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: "#F9FAFB",
                borderRadius: "20px",
                padding: "28px",
                border: "1px solid #E5E7EB",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Stars and date */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <StarRating count={t.rating} />
                <span style={{ color: "#9CA3AF", fontSize: "12px" }}>{t.date}</span>
              </div>

              {/* Text */}
              <p
                style={{
                  color: "#374151",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "12px", borderTop: "1px solid #E5E7EB" }}>
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #F97316",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "#F97316",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "14px",
                      flexShrink: 0,
                    }}
                  >
                    {(t as any).initials}
                  </div>
                )}
                <div>
                  <p style={{ color: "#1A1A1A", fontWeight: 700, fontSize: "14px" }}>{t.name}</p>
                  <p style={{ color: "#9CA3AF", fontSize: "12px" }}>📍 {t.location}</p>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <span
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      color: "#10B981",
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "3px 8px",
                      borderRadius: "50px",
                    }}
                  >
                    {t.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
