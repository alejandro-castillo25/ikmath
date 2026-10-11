import NavExtraButtons from "./NavExtraButtons";
import { Logo } from "@/components/Logo";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const links = [
  { value: "subjects", href: "/subjects.html", label: "Materias" },
  { value: "integrals", href: "/integrals.html", label: "Integrales" },
  { value: "references", href: "/references.html", label: "Referencias" },
];

export default function Nav() {
  const current =
    links.find((l) => l.href === window.location.pathname)?.value ?? null;

  return (
    <nav
      className="z-10 flex items-center fixed top-0 p-4 w-full h-16
    border-b border-border bg-background/35 backdrop-blur-xs"
    >
      <a href="/" className="flex items-center gap-4 mr-4">
        <Logo size={32} />
        <h2 className="select-none">
          <span className="text-primary">ik</span>math
        </h2>
      </a>

      <Tabs value={current} className="hidden md:block">
        <TabsList variant="line">
          {links.map((l) => (
            <TabsTrigger
              key={l.value}
              value={l.value}
              nativeButton={false}
              render={<a href={l.href} />}
            >
              {l.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <NavExtraButtons />
    </nav>
  );
}
