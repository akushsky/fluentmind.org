import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import FluentMindLanding from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FluentMindLanding />
  </React.StrictMode>
);

