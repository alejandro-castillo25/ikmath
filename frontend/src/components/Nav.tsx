import NavExtraButtons from "./NavExtraButtons";
import { Logo } from "@/components/Logo";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Nav() {
  return (
    <header
      className="flex items-center absolute top-0 p-4 w-full h-16
    border-b border-border bg-background/5 backdrop-blur-xs"
    >
      <a href="/" className="flex items-center gap-4 mr-4">
        <Logo size={32} />
        <h2 className="select-none">
          {" "}
          <span className="text-primary">ik</span>math
        </h2>
      </a>

      <Tabs defaultValue="none" className="hidden md:block">
        <TabsList variant="line">
          <TabsTrigger value="none" className="hidden">
            none
          </TabsTrigger>
          <TabsTrigger value="overview">Materias</TabsTrigger>
          <TabsTrigger value="analytics">Integrales</TabsTrigger>
          <TabsTrigger value="reports">Referencias</TabsTrigger>
        </TabsList>
      </Tabs>

      <NavExtraButtons />
    </header>
  );
}
