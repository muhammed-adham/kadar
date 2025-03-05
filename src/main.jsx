import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./styles/app.scss";
import { LanguageProvider } from "./context/LanguageContext";
import { DirectionProvider } from "./context/DirectionContext";
import { ThemeProvider } from "./context/ThemeContext";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <LanguageProvider>
      <DirectionProvider>
        <App />
      </DirectionProvider>
    </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);
