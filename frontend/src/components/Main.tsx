import { Logo } from "@/components/Logo";
import { Play } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import type { ButtonFocusStart } from "@/App";
import { useRef } from "react";
import Tex from "./Tex";




export default function Main({ focusStart, setFocusStart }: ButtonFocusStart) {
  const timeoutRef = useRef(null);

  function handleFocusIn() {
    timeoutRef.current = setTimeout(() => {
      setFocusStart(true);
    }, 300);
  }

  function handleFocusOut() {
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    setFocusStart(false);
  }

  return (
    <>
      <main
        className={`flex items-center w-full flex-col-reverse md:flex-row p-4 md:p-30 lg:p-40 md:gap-8`}
      >
        <div className="flex flex-col items-center gap-2 max-w-100">
          <h1 className="select-none">
            <span className="text-primary">ik</span>math
          </h1>
          <p className="text-center">
            Un lugar para aprender los límites divergentes de las matemáticas.
            Abarcando desde métodos elementales, hasta teoria de números
          </p>

          <a
            href="/subjects.html"
            className={buttonVariants({ variant: "default", size: "lg" })}

            onMouseEnter={handleFocusIn}
            onMouseLeave={handleFocusOut}
            onFocus={handleFocusIn}
            onBlur={handleFocusOut}
          >
            <Play />
            Empezar
          </a>
        </div>
        <Logo
          className={`main-logo md:ml-auto min-h-40 min-w-40 lg:min-w-60 lg:min-h-60 transition-colors duration-300 ease-in-out ${focusStart && "text-primary"}`}
        />
      </main>
      
      <Tex className={`fixed bottom-0 text-2xl opacity-0 transition-opacity duration-400 pointer-events-none ${focusStart && "main-lim-anim"} `}>
        {String.raw`\lim_{\Delta\to\infty} f(\Delta)`} 
      </Tex>
      
    </>
  );
}
