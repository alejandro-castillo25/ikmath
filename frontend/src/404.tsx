import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import FourOFourApp from "./apps/404App";
import { flushSync } from "react-dom";
import { TOOLTIP_DELAY } from "./lib/utils";

flushSync(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <TooltipProvider delay={TOOLTIP_DELAY}>
        <FourOFourApp />
      </TooltipProvider>
    </StrictMode>,
  );
});
