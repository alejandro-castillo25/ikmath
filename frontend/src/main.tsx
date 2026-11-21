import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./apps/App.tsx";

import { TooltipProvider } from "@/components/ui/tooltip";
import { flushSync } from "react-dom";
import { TOOLTIP_DELAY } from "./lib/utils.ts";

flushSync(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <TooltipProvider delay={TOOLTIP_DELAY}>
        <App />
      </TooltipProvider>
    </StrictMode>,
  );
});
