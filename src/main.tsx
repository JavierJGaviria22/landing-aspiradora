import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

// Inicializar Meta Pixel
if (window.fbq) {
  window.fbq('init', '1282648013785020');
  window.fbq('track', 'PageView');
}

createRoot(document.getElementById("root")!).render(<App />);
  