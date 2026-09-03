import React from "react";
import ReactDOM from "react-dom/client";
import { TranslationsProvider } from "./contexts";
import "./globals.scss";
import "./reset.scss";
import { AllRoutes } from "./routes";

const THEME_KEY = "site:dark";
const savedTheme = window.localStorage.getItem(THEME_KEY);
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const shouldUseDark = savedTheme !== null ? savedTheme === "true" : prefersDark;

document.body.classList.toggle("dark", shouldUseDark);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <TranslationsProvider>
       <AllRoutes />
    </TranslationsProvider>
  </React.StrictMode>
);
