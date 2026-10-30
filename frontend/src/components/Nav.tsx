import NavExtraButtons from "./NavExtraButtons";
import { Logo } from "@/components/Logo";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookSearch, LibraryBig } from "lucide-react";
import { Int } from "./Icons";

import navLang from "../langs/nav.json"

import { useAppContext } from "@/AppContext";

export type Contents = "subjects" | "integrals" | "references";
export type Links = Array<{
  value: string;
  href: string;
  label: string;
  icon: React.JSX.Element;
}>;

export default function Nav({ current }: { current: Contents | null }) {

  const {
    lang: [lang]
  } = useAppContext();
  
  const links: Links = [
    {
      value: "subjects",
      href: "/subjects.html",
      label: navLang[lang].subjects,
      icon: <LibraryBig />,
    },
    {
      value: "integrals",
      href: "/integrals.html",
      label: navLang[lang].integrals,
      icon: <Int />,
    },
    {
      value: "references",
      href: "/references.html",
      label: navLang[lang].references,
      icon: <BookSearch />,
    },
  ];

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
      <NavExtraButtons current={current} links={links} />
    </nav>
  );
}
