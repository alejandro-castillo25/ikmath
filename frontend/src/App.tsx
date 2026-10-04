import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BlockMath } from "react-katex";

import type { Int } from "ikmath-shared";


import "./App.css";

function App() {
  const [tex, setTex] = useState<string>("f(x)");
  const [headerTuple, setHeaderTuple] = useState<[boolean, string]>([false, ""])

  return (
    <>
      <h1 className="text-2xl font-bold">Talking to my server</h1>

      <div className=" min-h-48 flex flex-col justify-center items-center">
        {headerTuple[0] && <BlockMath math={headerTuple[1]}/>}
      <BlockMath math={tex}/>

      </div>

      <Button
        onClick={() => {
          async function fetchData() {
            try {
              const index = Math.floor(Math.random() * 100);

              const API_URL =
                import.meta.env.VITE_API_URL ?? "http://localhost:3000";


              const response = await fetch(
                `${API_URL}/ints/monsters?id=${index + 1}`,
              );

              const data: Int = await response.json();


              if (data.header !== undefined) {
                setHeaderTuple(() => [true, data.header])
              } else {
                setHeaderTuple(() => [false, ""])

              }

              setTex(() => data.int);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          }

          fetchData();
        }}
      >
        Generate Random Tex
      </Button>
    </>
  );
}

export default App;
