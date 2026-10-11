import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import IntegralsApp from "./IntegralsApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TooltipProvider>
      <IntegralsApp />
    </TooltipProvider>
  </StrictMode>,
);
