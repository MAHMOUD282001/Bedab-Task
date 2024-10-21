import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GalleryProvider } from "./context/GalleryContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GalleryProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </GalleryProvider>
  </StrictMode>
);
