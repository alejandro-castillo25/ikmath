import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import ReferencesApp from "./apps/ReferencesApp";
import { flushSync } from "react-dom";
import { TOOLTIP_DELAY } from "./lib/utils";

flushSync(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <TooltipProvider delay={TOOLTIP_DELAY}>
        <ReferencesApp />
      </TooltipProvider>
    </StrictMode>,
  );
});
