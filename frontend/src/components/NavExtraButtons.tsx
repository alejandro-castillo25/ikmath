import { useIsMobile } from "@/hooks/use-mobile";

import { Menu, X, Languages } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Separator } from "@/components/ui/separator";

import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { Github } from "./Icons";
import { useAppContext, type Lang } from "@/AppContext";

export default function NavExtraButtons() {
  const {
    theme: [theme, setTheme],
    lang: [lang, setLang],
  } = useAppContext()!;

  const isMobile = useIsMobile();

  useEffect(() => {
    if (theme === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [theme]);

  const items: Array<{label: string, value: Lang}> = [
    { label: "Español", value: "es" },
    { label: "English", value: "en" },
  ];

  return (
    <>
      <div className="md:flex hidden ml-auto gap-3 h-[115%]">
        {/*TODO: Add this project github repository link*/}
        <a
          href="/"
          className={
            buttonVariants({ variant: "ghost", size: "icon-lg" }) + " h-full"
          }
        >
          <Github />
        </a>

        <Separator orientation="vertical" />

        <Select
          items={items}
          value={lang}
          onValueChange={(lan) => setLang(lan)}
        >
          <SelectTrigger className="w-35 bg-transparent! hover:bg-muted! border-0! h-full!">
            <Languages />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Idiomas</SelectLabel>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button
          variant="ghost"
          size="icon-lg"
          className="h-full"
          onClick={() => setTheme((v) => (v === "dark" ? "light" : "dark"))}
        >
          {theme === "dark" ? <Moon /> : <Sun />}
        </Button>
      </div>

      <Drawer showSwipeHandle={isMobile} swipeDirection="right">
        <DrawerTrigger
          render={
            <Button
              size="icon-lg"
              className="ml-auto md:hidden flex "
              variant="ghost"
            />
          }
        >
          <Menu />
        </DrawerTrigger>
        <DrawerContent className="">
          <DrawerHeader>
            <DrawerClose
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="absolute top-0 right-0 m-1"
                />
              }
            >
              <X />{" "}
            </DrawerClose>
            <DrawerTitle>Contenidos</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className="p-4 flex flex-col gap-2">
            <Button variant="outline">Materias</Button>
            <Button variant="outline">Integrales</Button>
            <Button variant="outline">Referencias</Button>
          </div>
          <DrawerFooter className="gap-4">
            <Separator />
            <div className="flex">
              <div className="flex gap-3 w-full">
                {/*TODO: Add this project github repository link*/}
                <a
                  href="/"
                  className={
                    buttonVariants({ variant: "outline", size: "icon-lg" }) +
                    " h-full mr-auto rounded-"
                  }
                >
                  <Github />
                </a>

                <Select
                  items={items}
                  value={lang}
                  onValueChange={(lan) => setLang(lan)}
                >
                  <SelectTrigger className="w-32 h-full!">
                    <Languages />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Idiomas</SelectLabel>
                      {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  size="icon-lg"
                  className="h-full!"
                  onClick={() =>
                    setTheme((v) => (v === "dark" ? "light" : "dark"))
                  }
                >
                  {theme === "dark" ? <Moon /> : <Sun />}
                </Button>
              </div>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
