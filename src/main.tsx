import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

// Inicializar Meta Pixel
if (window.fbq) {
  window.fbq('init', '1474318414099318');
  window.fbq('track', 'PageView');
  window.fbq('trackCustom', 'Lead');
}

createRoot(document.getElementById("root")!).render(<App />);
  