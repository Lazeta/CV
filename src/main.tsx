import React from "react";
import ReactDOM from "react-dom/client";

import AppRouterProvider from "./main.router";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouterProvider />
  </React.StrictMode>
);
