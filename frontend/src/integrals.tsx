import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import IntegralsApp from "./IntegralsApp";
import { flushSync } from "react-dom";

flushSync(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <TooltipProvider>
        <IntegralsApp />
      </TooltipProvider>
    </StrictMode>,
  );
});
