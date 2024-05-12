import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/style.scss";

const rootElement = document.getElementById("root")!;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
