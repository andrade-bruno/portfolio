import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, TranslationsProvider } from "./contexts";
import "./globals.scss";
import "./reset.scss";
import { AllRoutes } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <TranslationsProvider>
        <AllRoutes />
      </TranslationsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
