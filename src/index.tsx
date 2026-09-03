import React from "react";
import ReactDOM from "react-dom/client";
import { AllRoutes } from "./routes";
import "./globals.scss";
import "./reset.scss";

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
    <AllRoutes />
  </React.StrictMode>
);
