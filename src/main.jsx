import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PortfolioApp from "./PortfolioApp.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PortfolioApp />
  </StrictMode>
);
