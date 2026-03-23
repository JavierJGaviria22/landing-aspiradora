import { useState } from "react";

const faqs = [
  {
    q: "¿Cuánto tiempo dura la batería con una carga completa?",
    a: "La batería de 2000 mAh ofrece hasta 30 minutos de uso continuo en modo aspiración. En modo soplado puede durar un poco más. La carga completa tarda aproximadamente 90 minutos mediante el cable USB-C incluido.",
  },
  {
    q: "¿Funciona bien para limpiar el interior de un auto?",
    a: "¡Absolutamente! Es uno de sus usos más populares. Las boquillas intercambiables permiten llegar a las rendijas entre asientos, la consola central y los ventiladores de clima. La succión de 6000 Pa es más que suficiente para polvo, arena y migas.",
  },
  {
    q: "¿El filtro es realmente lavable? ¿Cuánto dura?",
    a: "Sí, el filtro es 100% lavable con agua. Puedes lavarlo cada 2-4 semanas dependiendo del uso. Con un cuidado adecuado, el filtro puede durar 6 a 12 meses antes de necesitar reemplazo. Esto te ahorra dinero en filtros de repuesto.",
  },
  {
    q: "¿Cómo funciona el modo 'soplar'?",
    a: "Para activar el modo soplado, simplemente gira el cabezal de la boquilla 180 grados. El motor expulsa aire con fuerza para desalojar polvo de teclados, rejillas de ventilación, plantas o espacios difíciles de alcanzar. Es ideal para complementar la limpieza.",
  },
  {
    q: "¿Cuánto tiempo tarda en llegar mi pedido?",
    a: "Los pedidos se procesan en 24 horas hábiles. El tiempo de entrega estándar es de 5-10 días hábiles dependiendo de tu ubicación. Ofrecemos seguimiento de pedido en tiempo real una vez que tu paquete sea enviado.",
  },
  {
    q: "¿Qué hago si el producto llega con algún defecto?",
    a: "Todos nuestros productos cuentan con garantía de 24 horas de satisfacción. Si tu producto llega con defectos, contáctanos por Whatsapp.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "16px",
        border: `1px solid ${isOpen ? "rgba(249,115,22,0.3)" : "#E5E7EB"}`,
        overflow: "hidden",
        transition: "border-color 0.2s",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <span
          style={{
            color: "#1A1A1A",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: 1.4,
            flex: 1,
          }}
        >
          {faq.q}
        </span>
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: isOpen ? "#F97316" : "#F3F4F6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s, transform 0.2s",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        >
          <span style={{ color: isOpen ? "#fff" : "#6B7280", fontSize: "20px", lineHeight: 1 }}>+</span>
        </div>
      </button>

      {isOpen && (
        <div style={{ padding: "0 24px 20px" }}>
          <div style={{ width: "100%", height: "1px", background: "#F3F4F6", marginBottom: "16px" }} />
          <p style={{ color: "#6B7280", fontSize: "15px", lineHeight: 1.7 }}>{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ background: "#F9FAFB", padding: "80px 20px" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
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
            Preguntas frecuentes
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
            ¿Tienes Dudas?
            <br />
            <span style={{ color: "#F97316" }}>Las Resolvemos Aquí</span>
          </h2>
          <p style={{ color: "#6B7280", fontSize: "16px" }}>
            Todo lo que necesitas saber antes de hacer tu compra.
          </p>
        </div>

        {/* FAQ list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Contact prompt */}
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            padding: "24px",
            background: "#FFFFFF",
            borderRadius: "16px",
            border: "1px solid #E5E7EB",
          }}
        >
          <p style={{ color: "#6B7280", fontSize: "15px" }}>
            ¿No encontraste lo que buscabas?{" "}
            <a href="mailto:grupo.bjc26@gmail.com" style={{ color: "#F97316", fontWeight: 600, textDecoration: "none" }}>
              Contáctanos por Whatsapp →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
