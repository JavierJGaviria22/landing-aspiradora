import { useState, useEffect } from "react";
import productImage from "../../assets/gadget.jpeg";

function useCountdown(targetSeconds: number) {
  const [time, setTime] = useState(targetSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => (prev <= 0 ? targetSeconds : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetSeconds]);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          background: "#1A1A1A",
          color: "#F97316",
          borderRadius: "12px",
          padding: "12px 18px",
          fontSize: "clamp(28px, 5vw, 44px)",
          fontWeight: 800,
          minWidth: "70px",
          letterSpacing: "-1px",
          fontVariantNumeric: "tabular-nums",
          border: "2px solid rgba(249,115,22,0.3)",
        }}
      >
        {value}
      </div>
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", marginTop: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
        {label}
      </p>
    </div>
  );
}

export function OfferSection() {
  const countdown = useCountdown(4 * 3600 + 23 * 60 + 47); // 4h 23m 47s

  return (
    <section
      id="oferta"
      style={{
        background: "linear-gradient(135deg, #1A1A1A 0%, #2A1500 50%, #1A1A1A 100%)",
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Urgency badge */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(239,68,68,0.15)",
              border: "1px solid rgba(239,68,68,0.4)",
              borderRadius: "50px",
              padding: "8px 20px",
              marginBottom: "20px",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#EF4444", display: "inline-block", animation: "pulse 1.5s infinite" }} />
            <span style={{ color: "#EF4444", fontWeight: 700, fontSize: "14px" }}>⚠️ OFERTA EXPIRA HOY — QUEDAN POCAS UNIDADES</span>
          </div>

          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(26px, 5vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "12px",
            }}
          >
            🔥 Oferta Flash
            <br />
            <span style={{ color: "#F97316" }}>Envio GRATIS</span> Hoy
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px" }}>
            No pierdas esta oportunidad única. El precio vuelve a normal cuando el contador llegue a cero.
          </p>
        </div>

        {/* Countdown */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.8px" }}>
            La oferta termina en:
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <TimeBlock value={countdown.hours} label="Horas" />
            <span style={{ color: "#F97316", fontSize: "36px", fontWeight: 800, marginBottom: "20px" }}>:</span>
            <TimeBlock value={countdown.minutes} label="Minutos" />
            <span style={{ color: "#F97316", fontSize: "36px", fontWeight: 800, marginBottom: "20px" }}>:</span>
            <TimeBlock value={countdown.seconds} label="Segundos" />
          </div>
        </div>

        {/* Price card */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(249,115,22,0.3)",
            borderRadius: "24px",
            padding: "40px 32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
            
            <div style={{ width: "200px", flexShrink: 0 }}>
              <img src={productImage} alt="Mini Aspiradora" style={{ width: "100%", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)" }} />
            </div>

            
            <div style={{ flex: 1, minWidth: "220px", textAlign: "center" }}>
              <div style={{ display: "inline-block", background: "#F97316", color: "#fff", borderRadius: "8px", padding: "4px 14px", fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>
                AHORRA 50%
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "8px" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "24px", textDecoration: "line-through" }}>$59.99</span>
                <span style={{ color: "#F97316", fontSize: "clamp(36px, 6vw, 52px)", fontWeight: 800 }}>$29.99</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginBottom: "8px" }}>
                Incluye envío gratis 🚚
              </p>

              
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px", alignItems: "flex-start" }}>
                {["✅ Mini Aspiradora 2 en 1", "✅ 3 boquillas intercambiables", "✅ Cepillo de limpieza", "✅ Cable USB-C", "✅ Filtro reutilizable", "✅ Caja protectora"].map((item, i) => (
                  <span key={i} style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px" }}>{item}</span>
                ))}
              </div>
            </div>
          </div> */}

          {/* CTA Button */}
          <a
            href="https://wa.me/573236524637?text=Hola%2C%20dame%20informaci%C3%B3n%20sobre%20la%20aspiradora%202%20en%201"
            style={{
              background: "linear-gradient(135deg, #F97316, #EA580C)",
              color: "#fff",
              padding: "20px 56px",
              borderRadius: "50px",
              fontSize: "clamp(16px, 3vw, 20px)",
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 8px 40px rgba(249,115,22,0.6)",
              display: "inline-block",
              textAlign: "center",
              transition: "transform 0.2s, box-shadow 0.2s",
              width: "100%",
              maxWidth: "420px",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px) scale(1.02)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 50px rgba(249,115,22,0.7)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(249,115,22,0.6)";
            }}
          >
            🛒 ¡Comprar Ahora por $99.000!
          </a>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>🔒 Pago contra entrega</span>
            {/* <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>↩️ 30 días de garantía</span> */}
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>🚚 Envío gratis</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}