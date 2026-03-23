const carImg = "https://images.unsplash.com/photo-1759704822780-53bf21599938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGNsZWFuaW5nJTIwdmFjdXVtfGVufDF8fHx8MTc3MzY2MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080";
const keyboardImg = "https://images.unsplash.com/photo-1577375729078-820d5283031c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMGNsZWFuaW5nJTIwZGVzayUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzM3MDA2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const sofaImg = "https://images.unsplash.com/photo-1758272421615-d1f76c306178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VjaCUyMHNvZmElMjBjbGVhbmluZyUyMGhvbWV8ZW58MXx8fHwxNzczNzAwNjUwfDA&ixlib=rb-4.1.0&q=80&w=1080";

const cases = [
  {
    img: carImg,
    emoji: "🚗",
    title: "Interior de Auto",
    description: "Llega a los rincones del asiento, tapetes y consola central con facilidad.",
    tag: "Más popular",
    tagColor: "#F97316",
  },
  {
    img: keyboardImg,
    emoji: "⌨️",
    title: "Teclados y Escritorios",
    description: "Elimina migajas, polvo y suciedad entre teclas sin dañar tus dispositivos.",
    tag: "Oficina",
    tagColor: "#3B82F6",
  },
  {
    img: sofaImg,
    emoji: "🛋️",
    title: "Sofás y Tapizados",
    description: "Aspira pelo de mascotas, migas y polvo del sofá en segundos.",
    tag: "Hogar",
    tagColor: "#10B981",
  },
];

const extraCases = [
  { emoji: "🖥️", label: "Pantallas y monitores" },
  { emoji: "🪟", label: "Marcos de ventana" },
  { emoji: "👜", label: "Interior de bolsos" },
  { emoji: "🌱", label: "Macetas y plantas" },
  { emoji: "🎮", label: "Consolas de videojuegos" },
  { emoji: "📦", label: "Cajones y estantes" },
];

export function UseCasesSection() {
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
            Úsala donde quieras
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
            Limpia Cualquier Superficie,<br />
            <span style={{ color: "#F97316" }}>En Cualquier Lugar</span>
          </h2>
          <p style={{ color: "#6B7280", fontSize: "16px", maxWidth: "500px", margin: "0 auto", lineHeight: 1.6 }}>
            Tan versátil que se convierte en la herramienta de limpieza más usada de tu hogar y oficina.
          </p>
        </div>

        {/* Main use case cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {cases.map((c, i) => (
            <div
              key={i}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #E5E7EB",
                background: "#FFFFFF",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <img
                  src={c.img}
                  alt={c.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: c.tagColor,
                    color: "#fff",
                    padding: "4px 12px",
                    borderRadius: "50px",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                >
                  {c.tag}
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <span style={{ fontSize: "24px" }}>{c.emoji}</span>
                  <h3 style={{ color: "#1A1A1A", fontSize: "18px", fontWeight: 700 }}>{c.title}</h3>
                </div>
                <p style={{ color: "#6B7280", fontSize: "14px", lineHeight: 1.65 }}>{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra use cases grid */}
        <div
          style={{
            background: "#F9FAFB",
            borderRadius: "20px",
            padding: "32px",
            border: "1px solid #E5E7EB",
          }}
        >
          <p style={{ color: "#6B7280", fontSize: "14px", fontWeight: 600, textAlign: "center", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            También perfecta para:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "12px",
            }}
          >
            {extraCases.map((ec, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <span style={{ fontSize: "20px" }}>{ec.emoji}</span>
                <span style={{ color: "#374151", fontSize: "13px", fontWeight: 500 }}>{ec.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
