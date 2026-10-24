// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { BlockMath } from "react-katex";
// import type { Int } from "ikmath-shared";

import { AppContextProvider } from "./AppContextProvider";

import Nav from "@/components/Nav";

import React from "react";

export interface ButtonFocusStart {
  focusStart: boolean;
  setFocusStart: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ThemeState {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

import { useState } from "react";
import Main from "@/components/Main";
import Bg from "@/components/Bg";

function App() {
  const [focusStart, setFocusStart] = useState<boolean>(false);

  return (
    <AppContextProvider>
      <Bg focusStart={focusStart} />

      <Nav current={null} />

      <Main focusStart={focusStart} setFocusStart={setFocusStart} />
    </AppContextProvider>
  );
}

export default App;
