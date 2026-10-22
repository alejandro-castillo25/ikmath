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
          <Badge variant="secondary" className="absolute top-0 right-0 m-2 md:m-4">
            Próximamente
          </Badge>

          <h2 className="text-(--calculus)">Cálculo</h2>
          <p className="text-foreground/80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quas
            eius veritatis nisi nobis pariatur aspernatur quisquam nulla
            voluptas consectetur! Debitis eligendi non dolores nisi sequi, harum
            quaerat distinctio impedit?
          </p>

          <SquareFunction className="size-10 absolute bottom-0 right-0 m-2 md:m-4 text-(--calculus)" />
        </Button>
        <Button
          variant="secondary"
          className="border-(--algebra) bg-linear-to-br from-background from-40% to-(--algebra)/30"
        >
          <Badge variant="secondary" className="absolute top-0 right-0 m-2 md:m-4">
            Próximamente
          </Badge>

          <h2 className="text-(--algebra)">Álgebra</h2>
          <p className="text-foreground/80">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
            laborum, sint quibusdam quae ipsam beatae sapiente neque
            necessitatibus modi tempora dolor nisi quasi maiores laboriosam? Qui
            quisquam dolores eveniet ipsa.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            fugit, ullam quod commodi architecto voluptates nemo placeat
            officiis, porro possimus nam explicabo expedita nostrum voluptatibus
            perferendis harum consequuntur quae rerum?
          </p>
          <Inf className="size-10 absolute bottom-0 right-0 m-2 md:m-4 text-(--real-analysis)" />
        </Button>
        <Button
          variant="secondary"
          className="border-(--complex-analysis) bg-linear-to-br from-background from-40% to-(--complex-analysis)/30"
        >
          <Badge variant="secondary" className="absolute top-0 right-0 m-2 md:m-4">
            Próximamente
          </Badge>

          <h2 className="text-(--complex-analysis)">Análisis Complejo</h2>
          <p className="text-foreground/80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            consequuntur optio ab porro tempora. Unde eveniet nihil adipisci
            quidem dicta, alias porro tenetur, provident numquam dolores magnam
            nobis tempore aspernatur.
          </p>
          <Angle className="size-10 absolute bottom-0 right-0 m-2 md:m-4 text-(--complex-analysis)" />
        </Button>
        <Button
          variant="secondary"
          className="border-(--number-theory) bg-linear-to-br from-background from-40% to-(--number-theory)/30"
        >
          <Badge variant="secondary" className="absolute top-0 right-0 m-2 md:m-4">
            Próximamente
          </Badge>

          <h2 className="text-(--number-theory)">Teoría de Números</h2>
          <p className="text-foreground/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            nam ducimus temporibus, reiciendis dignissimos, ab quia fuga ratione
            doloribus aliquam explicabo rem nisi praesentium similique,
            repellendus amet eveniet veritatis voluptates.
          </p>
          <SquareSigma className="size-10 absolute bottom-0 right-0 m-2 md:m-4 text-(--number-theory)" />
        </Button>
      </main>
    </AppContextProvider>
  );
}
