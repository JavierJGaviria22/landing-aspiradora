import productImage from "../../assets/gadget.jpeg";

const benefits = [
  { icon: "⚡", text: "Potente succión" },
  { icon: "🔋", text: "Recargable USB" },
  { icon: "🔄", text: "Aspira y Sopla" },
];

export function HeroSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 60%, #F97316 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(249,115,22,0.12)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "rgba(249,115,22,0.08)",
          pointerEvents: "none",
        }}
      />

      {/* Badge */}
      <div
        style={{
          background: "rgba(249,115,22,0.2)",
          border: "1px solid rgba(249,115,22,0.5)",
          borderRadius: "50px",
          padding: "6px 18px",
          marginBottom: "24px",
          display: "inline-block",
        }}
      >
        <span style={{ color: "#F97316", fontSize: "13px", fontWeight: 600, letterSpacing: "0.5px" }}>
          🔥 OFERTA LIMITADA — ENVIO GRATIS
        </span>
      </div>

      {/* Headline */}
      <h1
        style={{
          color: "#FFFFFF",
          fontSize: "clamp(28px, 6vw, 52px)",
          fontWeight: 800,
          textAlign: "center",
          lineHeight: 1.15,
          maxWidth: "720px",
          marginBottom: "16px",
        }}
      >
        Limpia <span style={{ color: "#F97316" }}>Cualquier Rincón</span> en Segundos
      </h1>

      {/* Subtitle */}
      <p
        style={{
          color: "rgba(255,255,255,0.75)",
          fontSize: "clamp(15px, 2.5vw, 20px)",
          textAlign: "center",
          maxWidth: "560px",
          marginBottom: "36px",
          lineHeight: 1.6,
        }}
      >
        La mini aspiradora 2 en 1 que <strong style={{ color: "#fff" }}>aspira y sopla</strong>, inalámbrica, recargable y ultracompacta. Perfecta para auto, teclado, sofá y más.
      </p>

      {/* Product Image */}
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          borderRadius: "24px",
          overflow: "hidden",
          marginBottom: "36px",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
          border: "2px solid rgba(249,115,22,0.3)",
        }}
      >
        <img
          src={productImage}
          alt="Mini Aspiradora 2 en 1"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* Quick Benefits */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        {benefits.map((b, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "12px",
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "20px" }}>{b.icon}</span>
            <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>{b.text}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
        <a
          href="https://wa.me/573236524637?text=Hola%2C%20dame%20informaci%C3%B3n%20sobre%20la%20aspiradora%202%20en%201"
          style={{
            background: "linear-gradient(135deg, #F97316, #EA580C)",
            color: "#fff",
            padding: "18px 48px",
            borderRadius: "50px",
            fontSize: "18px",
            fontWeight: 800,
            textDecoration: "none",
            boxShadow: "0 8px 32px rgba(249,115,22,0.5)",
            display: "inline-block",
            transition: "transform 0.2s, box-shadow 0.2s",
            letterSpacing: "0.3px",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px) scale(1.03)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(249,115,22,0.65)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(249,115,22,0.5)";
          }}
        >
          🛒 Comprar Ahora
        </a>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
          ✅ Envío gratis · 🔒 Pago contra entrega
        </p>
      </div>
    </section>
  );
}
