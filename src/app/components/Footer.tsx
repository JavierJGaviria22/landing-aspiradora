export function Footer() {
  return (
    <footer style={{ background: "#111111", padding: "60px 20px 32px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              {/* <span style={{ fontSize: "28px" }}>🌀</span> */}
              <span style={{ color: "#FFFFFF", fontSize: "18px", fontWeight: 800 }}>Wolfora Store</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.65, marginBottom: "16px" }}>
              La mini aspiradora 2 en 1 más popular del mercado. Millones de hogares más limpios y felices.
            </p>
            {/* <div style={{ display: "flex", gap: "10px" }}>
              {["📘", "📸", "🎵", "▶️"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(249,115,22,0.3)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)")}
                >
                  {icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* Guarantee */}
          {/* <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 700, marginBottom: "16px" }}>🛡️ Garantías</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "30 días de garantía de satisfacción",
                "Garantía de fábrica 12 meses",
                "Reembolso total si no funciona",
                "Soporte técnico incluido",
              ].map((item, i) => (
                <p key={i} style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "#10B981", marginTop: "1px" }}>✓</span>
                  {item}
                </p>
              ))}
            </div>
          </div> */}

          {/* Shipping */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 700, marginBottom: "16px" }}>🚚 Envíos</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Envío gratis en tu pedido",
                "Procesamiento en 24 hrs",
                "Entrega 5-10 días hábiles",
                "Seguimiento en tiempo real",
                "Empaque seguro y protegido",
              ].map((item, i) => (
                <p key={i} style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "#F97316", marginTop: "1px" }}>→</span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 700, marginBottom: "16px" }}>📞 Contacto</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { icon: "📧", text: "grupobjc@gmail.com.com" },
                // { icon: "💬", text: "Chat en vivo (9am - 6pm)" },
                { icon: "📱", text: "WhatsApp: +57 323 652 4637" },
              ].map((c, i) => (
                <p key={i} style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>{c.icon}</span>
                  {c.text}
                </p>
              ))}
            </div>

            {/* Payment methods */}
            <div style={{ marginTop: "20px" }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Métodos de pago:
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {/* {["💳 Visa", "💳 MC", "🅿️ PayPal", "🍎 Apple Pay"].map((m, i) => ( */}
                {["📦 + 💵 Contra entrega"].map((m, i) => (
                  <span
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "11px",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>
            © 2026 Wolfora Store. Todos los derechos reservados.
          </p>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {["Política de privacidad", "Términos de servicio"].map((link, i) => (
              <a
                key={i}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontSize: "13px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#F97316")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
