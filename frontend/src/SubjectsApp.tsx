import { AppContextProvider } from "./AppContextProvider";
import Nav from "@/components/Nav";
import BgSubjects from "./components/BgSubjects";
import { Button } from "@/components/ui/button";
import {
  SquareFunction,
  Variable,
  Infinity as Inf,
  Angle,
  SquareSigma,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SubjectsApp() {
  return (
    <AppContextProvider>
      <BgSubjects />

      <Nav current="subjects" />

      <main className="main-subjects flex w-full justify-center flex-col md:flex-row flex-wrap gap-4 p-2 mt-20 pb-6">
        <Button
          variant="secondary"
          className="border-(--calculus) bg-linear-to-br from-background from-40% to-(--calculus)/30"
        >
          <Badge
            variant="secondary"
            className="absolute top-0 right-0 m-2 md:m-4"
          >
            Próximamente
          </Badge>

          <h2 className="text-(--calculus)">Cálculo</h2>
          <p className="text-foreground/80">
            Las herramientas de la matemáticas, y donde nacen los conceptos más
            importantes de estas. Estudia el cambio contínuo, y como cantidades
            se acumulas con el tiempo
          </p>

          <SquareFunction className="size-10 absolute bottom-0 right-0 m-2 md:m-4 text-(--calculus)" />
        </Button>
        <Button
          variant="secondary"
          className="border-(--algebra) bg-linear-to-br from-background from-40% to-(--algebra)/30"
        >
          <Badge
            variant="secondary"
            className="absolute top-0 right-0 m-2 md:m-4"
          >
            Próximamente
          </Badge>

          <h2 className="text-(--algebra)">Álgebra</h2>
          <p className="text-foreground/80">
            El lenguaje universal de las matemáticas. Estudiando los símbolos,
            la notación, y estructuras algebraicas para generalizar la
            aritmética
          </p>

          <Variable className="size-10 absolute bottom-0 right-0 m-2 md:m-4 text-(--algebra)" />
        </Button>
        <Button
          variant="secondary"
          className="border-(--real-analysis) bg-linear-to-br from-background from-40% to-(--real-analysis)/30"
        >
          <Badge variant="secondary" className="absolute top-0 right-0 m-2">
            Próximamente
          </Badge>

          <h2 className="text-(--real-analysis)">Análisis Real</h2>
          <p className="text-foreground/80">
            Es la rama de las matemáticas que desarrolla la fundación rigurosa y
            lógica del cálculo. Estudia el sistema de los números reales, y toda
            función que sea de valor real
          </p>
          <Inf className="size-10 absolute bottom-0 right-0 m-2 md:m-4 text-(--real-analysis)" />
        </Button>
        <Button
          variant="secondary"
          className="border-(--complex-analysis) bg-linear-to-br from-background from-40% to-(--complex-analysis)/30"
        >
          <Badge
            variant="secondary"
            className="absolute top-0 right-0 m-2 md:m-4"
          >
            Próximamente
          </Badge>

          <h2 className="text-(--complex-analysis)">Análisis Complejo</h2>
          <p className="text-foreground/80">
            Es la rama de las matemáticas que estudia las funciones complejas de
            forma analítica. Estudia cómo trabajar con los complejos simplifica
            un problema, que hacerlo únicamente con análisis real
          </p>
          <Angle className="size-10 absolute bottom-0 right-0 m-2 md:m-4 text-(--complex-analysis)" />
        </Button>
        <Button
          variant="secondary"
          className="border-(--number-theory) bg-linear-to-br from-background from-40% to-(--number-theory)/30"
        >
          <Badge
            variant="secondary"
            className="absolute top-0 right-0 m-2 md:m-4"
          >
            Próximamente
          </Badge>

          <h2 className="text-(--number-theory)">Teoría de Números</h2>
          <p className="text-foreground/80">
            Es una rama de matemáticas puras, que estudia las relaciones de
            enteros, funciones enteras, números primos, divisivilidad, así
            también como teoría de funciones especiales
          </p>
          <SquareSigma className="size-10 absolute bottom-0 right-0 m-2 md:m-4 text-(--number-theory)" />
        </Button>
      </main>
    </AppContextProvider>
  );
}
