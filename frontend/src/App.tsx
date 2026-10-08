// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { BlockMath } from "react-katex";

// import type { Int } from "ikmath-shared";
import { Logo } from "./components/Logo";
import { Menu, Play } from "lucide-react"

import "./App.css";
import { Button } from "./components/ui/button";

import ShapeGrid from './components/ShadeGrid';
import { useState } from "react";





function App() {

  const [focusStart, setFocusStart] = useState<boolean>(false);



  return (
    <>
      <ShapeGrid
      speed={focusStart ? 0.2 * (Math.PI** 2 / 2) : 0.2}
      squareSize={60}
      direction={focusStart ? "up" : "diagonal"}
      borderColor={getComputedStyle(document.body).getPropertyValue('--bg-line').trim()}
      hoverFillColor={ getComputedStyle(document.body).getPropertyValue('--secondary').trim()} // We dont really want this so
      shape='square'
      hoverTrailAmount={0}
      />

      <header className="flex items-center absolute top-0 p-4 w-full h-16
        border-b border-border bg-background/5 backdrop-blur-xs">

        <a href="/" className="flex items-center">
          <Logo size={32} className="mr-4" />
          <h2 className="select-none">ikmath</h2>

        </a>

        <Button size="icon-lg" className="bg-transparent ml-auto" variant="ghost">
          <Menu/>
        </Button>
      </header>
      <main className={`flex items-center w-full flex-col-reverse md:flex-row p-4 md:p-30 lg:p-40 md:gap-8`}>
        <div className="flex flex-col items-center gap-2 max-w-100">
          <h1 className="select-none">ikmath</h1>
          <p className="text-center">Un lugar para aprender los límites divirgentes de las matemáticas. Abarcando desde métodos elementales, hasta teoria de números</p>
          <Button onMouseEnter={() => setFocusStart(true)}
            onMouseLeave={() => setFocusStart(false)}
            onFocus={() => setFocusStart(true)}
            onBlur={() => setFocusStart(false)}
          >
            <Play/>
            Empezar
          </Button>
        </div>
        <Logo className={`main-logo md:ml-auto min-h-40 min-w-40 lg:min-w-60 lg:min-h-60 transition-colors duration-300 ease-in-out ${focusStart && "text-primary"}`} />
      </main>
    </>
  );
}

export default App;
