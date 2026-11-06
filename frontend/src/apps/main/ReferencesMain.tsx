import Link from "@/components/ui/link"

export default function ReferencesMain() {
  // NOTE: California Style notation being used
  return (
    <main className="flex flex-col w-full h-auto items-start justify-start gap-4 p-2 mt-16 pt-6 pb-6">
      <ol className="list-decimal list-inside space-y-2">
        <li>Miguel Santiago, Book of Integrals (2024).</li>
        <li>Miguel Santiago, Book of Marvelous Integrals (2025).</li>
        <li>David M. Burton, Elementary Number Theory (7d ed. 2011).</li>
        <li>Phil Dyke, An Introduction to Laplace Transforms and Fourier Series (2d ed. 2014).</li>
        <li>International Organization for Standardization, ISO 80000-2 (2009)</li>
        <li>The Daily Integral (2026). <Link href="https://dailyintegral.com">dailyintegral.com</Link>.</li>
        <li>arxiv (2026) <Link href="https://arxiv.org">arxiv.org</Link>.</li>
        <li>ScienceDirect (2026) <Link href="https://www.sciencedirect.com/">sciencedirect.com</Link>.</li>
        <li>Wikipedia (2026) <Link href="https://www.wikipedia.org">wikipedia.org</Link>.</li>
      </ol>
    </main>
  );
}
