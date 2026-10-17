import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import FluentMindLanding from "./App.tsx";
import "./index.css";

const root = document.getElementById("root") as HTMLElement;
const app = (
  <React.StrictMode>
    <FluentMindLanding />
  </React.StrictMode>
);

if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
