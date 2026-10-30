import { Button } from "@/components/ui/button";
import {
  SquareFunction,
  Variable,
  Infinity as Inf,
  Angle,
  SquareSigma,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useAppContext } from "@/AppContext";

import subjectsLang from "../../langs/subjects.json";

export default function SubjectsMain() {
  const {
    lang: [lang],
  } = useAppContext();

  return (
    <main className="main-subjects flex w-full justify-center flex-col md:flex-row flex-wrap gap-4 p-2 mt-16 pt-6 pb-6">
      <Button
        variant="secondary"
        className="border-(--calculus) bg-linear-to-br from-background from-40% to-(--calculus)/30"
      >
        <Badge
          variant="secondary"
          className="absolute top-0 right-0 m-2 md:m-4"
        >
          {subjectsLang[lang].cards.comingSoon}
        </Badge>

        <h2 className="text-(--calculus)">
          {subjectsLang[lang].cards.calculus.title}
        </h2>
        <p className="text-foreground/80">
          {subjectsLang[lang].cards.calculus.text}
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
          {subjectsLang[lang].cards.comingSoon}
        </Badge>

        <h2 className="text-(--algebra)">
          {subjectsLang[lang].cards.algebra.title}
        </h2>
        <p className="text-foreground/80">
          {subjectsLang[lang].cards.algebra.text}
        </p>

        <Variable className="size-10 absolute bottom-0 right-0 m-2 md:m-4 text-(--algebra)" />
      </Button>
      <Button
        variant="secondary"
        className="border-(--real-analysis) bg-linear-to-br from-background from-40% to-(--real-analysis)/30"
      >
        <Badge variant="secondary" className="absolute top-0 right-0 m-2">
          {subjectsLang[lang].cards.comingSoon}
        </Badge>

        <h2 className="text-(--real-analysis)">{subjectsLang[lang].cards.realAnalysis.title}</h2>
        <p className="text-foreground/80">
          {subjectsLang[lang].cards.realAnalysis.text}
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
          {subjectsLang[lang].cards.comingSoon}
        </Badge>

        <h2 className="text-(--complex-analysis)">{subjectsLang[lang].cards.complexAnalysis.title}</h2>
        <p className="text-foreground/80">
          {subjectsLang[lang].cards.realAnalysis.text}
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
          {subjectsLang[lang].cards.comingSoon}
        </Badge>

        <h2 className="text-(--number-theory)">{subjectsLang[lang].cards.numberTheory.title}</h2>
        <p className="text-foreground/80">
          {subjectsLang[lang].cards.realAnalysis.text}
        </p>
        <SquareSigma className="size-10 absolute bottom-0 right-0 m-2 md:m-4 text-(--number-theory)" />
      </Button>
    </main>
  );
}
