import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import FourOFourApp from "./apps/404App";
import { flushSync } from "react-dom";

flushSync(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <TooltipProvider>
        <FourOFourApp />
      </TooltipProvider>
    </StrictMode>,
  );
});
