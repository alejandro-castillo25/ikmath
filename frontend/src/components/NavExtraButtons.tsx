import { useIsMobile } from "@/hooks/use-mobile";

import { Menu, X, Languages, Moon, Sun } from "lucide-react";
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

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import GlideSelect from "./GlideSelect";

const formats = [
  { value: "png", label: "PNG", tag: "Lossless" },
  { value: "jpg", label: "JPG", tag: "Smallest" },
  { value: "webp", label: "WebP", tag: "Modern" },
  { value: "svg", label: "SVG", tag: "Vector" },
  { value: "pdf", label: "PDF", tag: "Print" },
];

import { Separator } from "@/components/ui/separator";

import { useEffect, useRef, useState } from "react";
import { Github } from "./Icons";
import { useAppContext, type Lang } from "@/AppContext";
import type { Contents, Links } from "./Nav";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import navLang from "../langs/nav.json";

const items: Array<{ label: string; value: Lang }> = [
  { label: "Español", value: "es" },
  { label: "English", value: "en" },
];

export default function NavExtraButtons({
  current,
  links,
}: {
  current: Contents;
  links: Links;
}) {
  const {
    theme: [theme, setTheme],
    lang: [lang, setLang],
  } = useAppContext()!;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const pendingHref = useRef<string | null>(null);

  const [langOpen, setLangOpen] = useState(false);
  const [langTipOpen, setLangTipOpen] = useState(false);

  const [langDrawerOpen, setLangDrawerOpen] = useState(false);
  const [langDrawerTipOpen, setLangDrawerTipOpen] = useState(false);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (theme === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [theme]);

  return (
    <>
      <div className="md:flex hidden ml-auto gap-3 h-[115%]">
        <Tooltip>
          <TooltipTrigger
            render={
              <a
                target="_blank"
                href="https://github.com/alejandro-castillo25/ikmath"
                className={
                  buttonVariants({ variant: "ghost", size: "icon-lg" }) +
                  " h-full"
                }
              >
                <Github />
              </a>
            }
          >
            <Languages />
            <SelectValue />
          </TooltipTrigger>
          <TooltipContent>
            <p>{navLang[lang].settings.githubLabel}</p>
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" />

        <Tooltip open={langTipOpen && !langOpen} onOpenChange={setLangTipOpen}>
          <TooltipTrigger render={<div className="w-35 h-full" />}>
            <GlideSelect
              options={items}
              value={lang}
              onChange={(v) => setLang(v as Lang)}
              onOpenChange={(o) => {
                setLangOpen(o);
                if (o) setLangTipOpen(false);
              }}
              ariaLabel={navLang[lang].settings.langLabel}
              showTags={false}
              placement="bottom"
              icon={<Languages size={16} />}
              className="w-full h-full"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{navLang[lang].settings.langLabel}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                className="h-full"
                onClick={() =>
                  setTheme((v) => (v === "dark" ? "light" : "dark"))
                }
              >
                {theme === "dark" ? <Moon /> : <Sun />}
              </Button>
            }
          />
          <TooltipContent>
            <p>{navLang[lang].settings.themeLabel}</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <Drawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        onOpenChangeComplete={(open) => {
          if (!open && pendingHref.current) {
            const href = pendingHref.current;

            pendingHref.current = null;
            window.location.href = href;
          }
        }}
        showSwipeHandle={isMobile}
        swipeDirection="right"
      >
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
              <X />
            </DrawerClose>
            <DrawerTitle>{navLang[lang].drawerTitle}</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>

          <ToggleGroup
            value={[current]}
            variant="outline"
            orientation="vertical"
            className="w-full p-2"
          >
            {links.map((l) => (
              <ToggleGroupItem
                nativeButton={false}
                key={l.label}
                value={l.value}
                render={
                  <a
                    href={l.href}
                    onClick={(e) => {
                      // ? let ctrl/cmd/shift/middle click behave normally
                      if (
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.button !== 0
                      )
                        return;

                      e.preventDefault();
                      if (l.value !== current) pendingHref.current = l.href;
                      setDrawerOpen(false);
                    }}
                  >
                    {l.icon}
                    {l.label}
                  </a>
                }
              />
            ))}
          </ToggleGroup>

          <DrawerFooter className="gap-4 ">
            <Separator />
            <div className="flex gap-3 w-full">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a
                      href="https://github.com/alejandro-castillo25/ikmath"
                      target="_blank"
                      className={
                        buttonVariants({
                          variant: "outline",
                          size: "icon-lg",
                        }) + " size-9.5 mr-auto border border-input!"
                      }
                    >
                      <Github />
                    </a>
                  }
                >
                  <Languages />
                  <SelectValue />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{navLang[lang].settings.githubLabel}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip
                open={langDrawerTipOpen && !langDrawerOpen}
                onOpenChange={setLangDrawerTipOpen}
              >
                <TooltipTrigger render={<div className="w-35 h-9.5" />}>
                  <GlideSelect
                    options={items}
                    value={lang}
                    onChange={(v) => setLang(v as Lang)}
                    onOpenChange={(o) => {
                      setLangDrawerOpen(o);
                      if (o) setLangDrawerTipOpen(false);
                    }}
                    ariaLabel={navLang[lang].settings.langLabel}
                    showTags={false}
                    placement="top"
                    icon={<Languages size={16} />}

                    className="w-full h-full"
                    triggerClassName="border! border-input! dark:bg-input/30 dark:hover:bg-input/50"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{navLang[lang].settings.langLabel}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="outline"
                      size="icon-lg"
                      className="size-9.5"
                      onClick={() =>
                        setTheme((v) => (v === "dark" ? "light" : "dark"))
                      }
                    >
                      {theme === "dark" ? <Moon /> : <Sun />}
                    </Button>
                  }
                />
                <TooltipContent>
                  <p>{navLang[lang].settings.themeLabel}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
