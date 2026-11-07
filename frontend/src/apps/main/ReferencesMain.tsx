import { useAppContext } from "@/AppContext";
import Link from "@/components/ui/link";
import refsLang from "../../langs/references.json";

export default function ReferencesMain() {
  const {
    lang: [lang],
  } = useAppContext();

  // NOTE: APA 7 Style (kinda)
  return (
    <main className="flex flex-col w-full h-auto items-start justify-start gap-4 p-2 mt-16 pt-6 pb-6">
      <ol className="list-[decimal-leading-zero] list-inside space-y-2">
        <li>
          Ahlfors, L. V. (1979).{" "}
          <cite className="italic">Complex analysis</cite> (
          {refsLang[lang].ordinal[3]} {refsLang[lang].editionSuffix}).
        </li>
        <li>
          arXiv. (2026). <cite className="italic">arXiv.org</cite>.{" "}
          <Link href="https://arxiv.org">https://arxiv.org</Link>.
        </li>
        <li>
          Burton, D. M. (2011).{" "}
          <cite className="italic">Elementary number theory</cite> (
          {refsLang[lang].ordinal[7]} {refsLang[lang].editionSuffix}).
        </li>
        <li>
          The Daily Integral. (2026).{" "}
          <cite className="italic">The Daily Integral</cite>.{" "}
          <Link href="https://dailyintegral.com">
            https://dailyintegral.com
          </Link>
          .
        </li>
        <li>
          Dyke, P. (2014).{" "}
          <cite className="italic">
            An introduction to Laplace transforms and Fourier series
          </cite>{" "}
          ({refsLang[lang].ordinal[2]} {refsLang[lang].editionSuffix}).
        </li>
        <li>
          International Organization for Standardization. (2019).{" "}
          <cite className="italic">
            Quantities and units — Part 2: Mathematics
          </cite>{" "}
          ({refsLang[lang].isoStandard} 80000-2:2019).
        </li>
        <li>
          Santiago, M. (2024). <cite className="italic">Book of integrals</cite>
          .
        </li>
        <li>
          Santiago, M. (2025).{" "}
          <cite className="italic">Book of marvelous integrals</cite>.
        </li>
        <li>
          ScienceDirect. (2026). <cite className="italic">ScienceDirect</cite>.{" "}
          <Link href="https://www.sciencedirect.com">
            https://www.sciencedirect.com
          </Link>
          .
        </li>
        <li>
          Wikipedia. (2026). <cite className="italic">Wikipedia</cite>.{" "}
          <Link href="https://www.wikipedia.org">
            https://www.wikipedia.org
          </Link>
          .
        </li>
      </ol>
    </main>
  );
}
