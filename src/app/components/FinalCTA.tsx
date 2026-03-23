import productImage from "../../assets/gadget.jpeg";

export function FinalCTA() {
  return (
    <section style={{ background: "#FFFFFF", padding: "80px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)",
            borderRadius: "32px",
            padding: "56px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "32px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative circle */}
          <div
            style={{
              position: "absolute",
              right: "-80px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Product image */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <img
              src={productImage}
              alt="Mini Aspiradora 2 en 1"
              style={{
                width: "100%",
                maxWidth: "340px",
                borderRadius: "20px",
                border: "2px solid rgba(249,115,22,0.3)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
            />
          </div>

          <div style={{ position: "relative", zIndex: 1, maxWidth: "600px" }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(249,115,22,0.15)",
                border: "1px solid rgba(249,115,22,0.3)",
                borderRadius: "50px",
                padding: "6px 18px",
                marginBottom: "20px",
              }}
            >
              <span style={{ color: "#F97316", fontSize: "13px", fontWeight: 700 }}>
                🔥 Oferta especial por tiempo limitado
              </span>
            </div>

            <h2
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(24px, 4vw, 42px)",
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              Tu Espacio Merece Estar
              <br />
              <span style={{ color: "#F97316" }}>Siempre Limpio</span>
            </h2>

            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", lineHeight: 1.6, marginBottom: "32px" }}>
              Únete a más de 12,000 clientes satisfechos que ya disfrutan de la comodidad de la Mini Aspiradora 2 en 1. Hoy con 50% de descuento y envío gratis.
            </p>

            {/* Trust badges */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "32px",
              }}
            >
              {[
                { icon: "⭐", text: "4.9/5 en reseñas" },
                { icon: "🛡️", text: "30 días garantía" },
                { icon: "🚚", text: "Envío gratis" },
                { icon: "🔒", text: "Pago seguro" },
              ].map((badge, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: "50px",
                    padding: "8px 14px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>{badge.icon}</span>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", fontWeight: 500 }}>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Price display */}
            <div style={{ marginBottom: "24px" }}>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "20px", textDecoration: "line-through", marginRight: "12px" }}>
                $59.99
              </span>
              <span style={{ color: "#F97316", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800 }}>
                $29.99
              </span>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/573236524637?text=Hola%2C%20dame%20informaci%C3%B3n%20sobre%20la%20aspiradora%202%20en%201"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #F97316, #EA580C)",
                color: "#FFFFFF",
                padding: "20px 52px",
                borderRadius: "50px",
                fontSize: "clamp(16px, 3vw, 20px)",
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 8px 40px rgba(249,115,22,0.55)",
                transition: "transform 0.2s, box-shadow 0.2s",
                letterSpacing: "0.3px",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px) scale(1.03)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 50px rgba(249,115,22,0.7)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(249,115,22,0.55)";
              }}
            >
              🛒 Quiero la Mía con 50% OFF →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
