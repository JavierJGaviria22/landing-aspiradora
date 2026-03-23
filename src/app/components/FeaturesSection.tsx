import productImage from "../../assets/gadget.jpeg";

const features = [
  { icon: "📡", label: "100% Inalámbrica", sub: "Sin cables, máxima libertad de movimiento" },
  { icon: "⚡", label: "Recargable USB-C", sub: "Carga completa en 90 minutos" },
  { icon: "🔩", label: "Boquillas Intercambiables", sub: "3 accesorios incluidos para cada necesidad" },
  { icon: "🖌️", label: "Cepillo de Limpieza", sub: "Para superficies delicadas y teclas de teclado" },
  { icon: "🪶", label: "Ultra Compacta y Ligera", sub: "Solo 350g · 21cm de largo · cabe en cualquier bolso" },
  { icon: "♻️", label: "Filtro Reutilizable", sub: "Lavable y duradero, ahorra dinero en repuestos" },
];

const specs = [
  { label: "Potencia", value: "6000 Pa de succión" },
  { label: "Batería", value: "2000 mAh Li-ion" },
  { label: "Carga", value: "USB-C, 90 min" },
  { label: "Autonomía", value: "Hasta 30 min de uso continuo" },
  { label: "Peso", value: "350 gramos" },
  { label: "Nivel de ruido", value: "< 60 dB" },
  { label: "Accesorios", value: "3 boquillas + cepillo + filtro" },
  { label: "Modos", value: "Aspirar / Soplar" },
];

export function FeaturesSection() {
  return (
    <section style={{ background: "#F9FAFB", padding: "80px 20px" }}>
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
            Especificaciones
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
            Características del Producto
          </h2>
          <p style={{ color: "#6B7280", fontSize: "16px", maxWidth: "480px", margin: "0 auto" }}>
            Tecnología de última generación en formato de bolsillo.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Left: Product Image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #1A1A1A, #2D2D2D)",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src={productImage}
                alt="Mini Aspiradora - características"
                style={{ width: "100%", borderRadius: "16px", display: "block" }}
              />
            </div>
            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                top: "-16px",
                right: "-16px",
                background: "#F97316",
                color: "#fff",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(249,115,22,0.5)",
                fontSize: "12px",
                fontWeight: 800,
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              <span style={{ fontSize: "22px" }}>⭐</span>
              4.9/5
            </div>
          </div>

          {/* Right: Features */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
              {features.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    background: "#FFFFFF",
                    borderRadius: "14px",
                    padding: "16px 20px",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(249,115,22,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      flexShrink: 0,
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p style={{ color: "#1A1A1A", fontWeight: 700, fontSize: "15px", marginBottom: "2px" }}>{f.label}</p>
                    <p style={{ color: "#9CA3AF", fontSize: "13px" }}>{f.sub}</p>
                  </div>
                  <span style={{ marginLeft: "auto", color: "#10B981", fontSize: "18px" }}>✓</span>
                </div>
              ))}
            </div>

            {/* Specs table */}
            <div
              style={{
                background: "#1A1A1A",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "#F97316",
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "14px" }}>📋 Especificaciones Técnicas</span>
              </div>
              <div style={{ padding: "4px 0" }}>
                {specs.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px 20px",
                      borderBottom: i < specs.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px" }}>{s.label}</span>
                    <span style={{ color: "#FFFFFF", fontSize: "13px", fontWeight: 600 }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
