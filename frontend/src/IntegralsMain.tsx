import { Button } from "./components/ui/button";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Tex from "./components/Tex";
import type { Int } from "ikmath-shared";
import { Spinner } from "./components/ui/spinner";
import { Badge } from "./components/ui/badge";
import { Camera, Ellipsis, Dices } from "lucide-react";

import { toPng } from "html-to-image";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export interface FetchDataSettings {
  count?: true;
  id?: number;
  from?: number;
  to?: number;
  search?: string;
}

import { throttle } from "lodash";

// IMPORTANT set DEV to false, to build to prodution (yeah... i thought that process.env would've worked)
const DEV = true;

export default function IntegralsMain() {
  // TODO: Add light/dark label as a postfix of the download name

  const [int, setInt] = useState<Int>({ int: "", id: 0 });
  const [id, setId] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const [count, setCount] = useState<number>(0);

  const fetchData = useCallback(async (settings: FetchDataSettings) => {
    let paramsStr = "?";

    if (Object.keys(settings).length === 0) {
      paramsStr = "";
    } else if (settings?.count !== undefined) {
      paramsStr += `count=${settings.count.toString()}`;
    } else if (settings?.id !== undefined) {
      paramsStr += `id=${settings.id}`;
    } else if (settings?.search !== undefined) {
      paramsStr += `search=${settings.search}`;
    } else {
      const from: number | undefined = settings?.from;
      const to: number | undefined = settings?.to;

      if (from !== undefined) paramsStr += `from=${from}`;

      if (to !== undefined) {
        if (from !== undefined) paramsStr += "&";
        paramsStr += `to=${to}`;
      }
    }

    setIsLoading(true);

    const response = await fetch(
      `${DEV ? "http://localhost:3000" : ""}/api/integrals/monsters${paramsStr}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (settings?.count !== undefined) {
      const data: {
        count: number;
      } = await response.json();

      setCount(data.count);
      setIsLoading(false);

      console.log(data.count);

      return;
    }

    const data: Int = await response.json();
    console.log(data);

    setInt(data);

    setIsLoading(false);
  }, []);

  const getIdsArr = useCallback(
    (n = 3): Array<number> => {
      // const parts = Math.floor(count / n);
      const leftOver = count % n;

      const ans: Array<number> = [];

      for (let i = 1; i <= count; i += n) {
        const start = i;
        const end = i + n - 1;

        if (id <= end && id >= start) {
          if (end > count)
            for (let j = start; j <= end - leftOver - 1; j++) ans.push(j);
          else for (let j = start; j <= end; j++) ans.push(j);
          return ans;
        }
      }

      return ans;
    },
    [count, id],
  );

  const setLocationHash = useCallback((hash: `#${string}`) => {
    window.location.hash = hash;
  }, []);

  useEffect(() => {
    const initHash = window.location.hash.replace("#", "");
    let initId = Number.parseInt(initHash);

    if (Number.isNaN(initId)) initId = 1;

    queueMicrotask(() => {
      setId(initId);
      fetchData({ count: true });
      fetchData({ id: initId });
    });

    const ctrl = new AbortController();

    window.addEventListener(
      "hashchange",
      () => {
        const hash = window.location.hash.replace("#", "");
        let newId = Number.parseInt(hash);

        if (Number.isNaN(newId)) newId = 1;

        setId(newId);
        fetchData({ id: newId });
      },
      {
        signal: ctrl.signal,
      },
    );

    return () => {
      ctrl.abort();
    };
  }, [fetchData]);

  const handleDownloadPng = async () => {
    if (!cardRef.current || isLoading || isExporting) return;

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    setIsExporting(true);

    await sleep(250); //? for the animation to take effect, don't judge me!

    const element = cardRef.current;

    // Marging of the integral
    // ik it's technically padding but, think about it
    // const MARGIN = 8;

    const FRAME_W = 1920;
    const FRAME_H = 1080;

    const FRAME_PAD_X = 80; //? 140 -> 100
    const FRAME_PAD_Y = 120;

    const MAX_SCALE = Infinity;

    // TODO: If possible, make a function to change the quality of the image
    const EXPORT_PIXEL_RATIO = 3; //? 2

    const targets = new Set<HTMLElement>();
    element.querySelectorAll<HTMLElement>(".katex-display").forEach((d) => {
      let node: HTMLElement | null = d;
      while (node && node !== element) {
        targets.add(node);
        node = node.parentElement;
      }
    });

    const props = ["width", "overflow", "alignSelf", "textAlign"] as const;

    const saved = Array.from(targets).map((el) => ({
      el,
      values: props.map((p) => el.style[p]),
    }));
    const originalWidth = element.style.width;
    const originalMinHeight = element.style.minHeight;

    try {
      targets.forEach((t) => {
        t.style.width = "max-content";
        t.style.overflow = "visible";
        t.style.alignSelf = "center";
        t.style.textAlign = "center";
      });
      element.style.width = "max-content";
      element.style.minHeight = "0";

      const elRect = element.getBoundingClientRect();

      let minL = Infinity;
      let minT = Infinity;
      let maxR = -Infinity;
      let maxB = -Infinity;

      element.querySelectorAll<HTMLElement>(".katex").forEach((k) => {
        const r = k.getBoundingClientRect();

        if (r.width === 0 || r.height === 0) return;

        minL = Math.min(minL, r.left);
        minT = Math.min(minT, r.top);

        maxR = Math.max(maxR, r.right);
        maxB = Math.max(maxB, r.bottom);
      });

      // ? Fallback if no .katex was found (which is, not very likely)
      if (!Number.isFinite(minL)) {
        minL = elRect.left;
        minT = elRect.top;
        maxR = elRect.right;
        maxB = elRect.bottom;
      }

      const contentWidth = Math.ceil(maxR - minL);
      const contentHeight = Math.ceil(maxB - minT);

      const offsetX = minL - elRect.left; // where the math starts inside the card (he said the thing....)
      const offsetY = minT - elRect.top;

      const scale = Math.min(
        MAX_SCALE,
        (FRAME_W - FRAME_PAD_X * 2) / contentWidth,
        (FRAME_H - FRAME_PAD_Y * 2) / contentHeight,
      );

      // Center the scaled content inside the frame
      const tx = (FRAME_W - contentWidth * scale) / 2 - offsetX * scale;
      const ty = (FRAME_H - contentHeight * scale) / 2 - offsetY * scale;

      const probe = document.createElement("div");
      probe.style.backgroundColor = "var(--background)";

      document.body.appendChild(probe);

      const bgColor = getComputedStyle(probe).backgroundColor;
      probe.remove();

      const dataUrl = await toPng(element, {
        cacheBust: true,
        pixelRatio: EXPORT_PIXEL_RATIO,
        backgroundColor: bgColor,
        width: FRAME_W,
        height: FRAME_H,
        style: {
          width: `${Math.ceil(elRect.width)}px`,
          height: `${Math.ceil(elRect.height)}px`,
          minHeight: "0",
          maxWidth: "none",
          maxHeight: "none",
          overflow: "visible",
          margin: "0",
          padding: "0",
          transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
          transformOrigin: "top left",
        },
      });
      const link = document.createElement("a");

      link.href = dataUrl;
      link.download = `integral-#${int.id || "card"}.png`;
      link.click();
    } catch (error) {
      console.error("Error generating image with html-to-image:", error);
    } finally {
      element.style.width = originalWidth;
      element.style.minHeight = originalMinHeight;

      saved.forEach(({ el, values }) => {
        props.forEach((p, i) => {
          el.style[p] = values[i];
        });
      });
      setIsExporting(false);
    }
  };

  const handleSurprise = useMemo(
    () =>
      throttle(
        () => {
          const currentCount = count;
          if (currentCount === 0) return;

          const randomId = Math.floor(Math.random() * currentCount) + 1;

          setLocationHash(`#${randomId}`);
        },
        500,
        {
          trailing: true,
        },
      ),
    [count, setLocationHash],
  );

  const handleNavClick = useMemo(
    () =>
      throttle(
        (targetId: number) => {
          if (targetId < 1 || (count > 0 && targetId > count)) return;
          setLocationHash(`#${targetId}`);
        },
        500,
        { trailing: true },
      ),
    [count, setLocationHash],
  );

  return (
    <main className="flex w-full h-full items-center justify-center flex-col gap-2 p-2 pt-6 pb-6 mt-16 ">
      <ScrollArea
        key={int?.id}
        className={`relative h-auto min-h-38 sm:max-w-[65%] w-full border border-border bg-background/35 backdrop-blur-xs p-2 rounded-lg`}
      >
        {int.id !== 0 && (
          <Badge
            className="absolute -top-1 -left-1 text-md p-2.5 z-10"
            variant="default"
          >
            <Tex>{`\\#\\,${id}`}</Tex>
          </Badge>
        )}

        <div
          className={`${!isExporting && "opacity-0"} bg-white h-full w-full absolute top-0 left-0 pointer-events-none z-5 rounded-lg tansition-opacity duration-150 ease-in`}
        ></div>
        <div
          ref={cardRef}
          className="w-full flex flex-col items-center justify-center min-h-full"
        >
          {isLoading ? (
            <Spinner className="size-10 text-primary" />
          ) : (
            <>
              {int?.header !== undefined && (
                <Tex className="w-full">{int.header}</Tex>
              )}

              <Tex className="w-full">{int.int}</Tex>

              {int?.footer !== undefined && (
                <Tex className="w-full">{int.footer}</Tex>
              )}
            </>
          )}
        </div>

        {int.id !== 0 && (
          <Button
            onClick={handleDownloadPng}
            disabled={isLoading || isExporting}
            className="absolute -top-1 -right-1 z-10"
            variant="secondary"
            size="icon"
          >
            {isExporting ? <Spinner className="size-4" /> : <Camera />}
          </Button>
        )}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={id === 1 ? undefined : `#${id - 1}`}
              onClick={(e) => {
                if (id === 1) return;
                e.preventDefault();
                handleNavClick(id - 1);
              }}
              aria-disabled={id === 1}
              tabIndex={id === 1 ? -1 : undefined}
              className={`${int.int === "" && "hidden"} ${id === 1 && "pointer-events-none opacity-50 "} transition-opacity duration-250 ease-in-out`}
              text="Anterior"
            />
          </PaginationItem>

          {getIdsArr(3).map((i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href={`#${i}`}
                onClick={(e) => {
                  if (id === i) return;
                  e.preventDefault();
                  handleNavClick(i);
                }}
                isActive={id === i}
                className={id === i ? "bg-background/35! backdrop-blur-xs" : ""}
              >
                <Tex
                  className={`${id >= 100 ? "scale-90" : id >= 10 ? "scale-95" : ""}`}
                >
                  {i}
                </Tex>
              </PaginationLink>
            </PaginationItem>
          ))}
          {/*<PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>*/}
          <PaginationItem>
            <PaginationNext
              href={id === count ? undefined : `#${id + 1}`}

              onClick={(e) => {
                if (id === count) return;
                e.preventDefault();
                handleNavClick(id + 1);
              }}

              aria-disabled={id === 1}
              tabIndex={id === count ? -1 : undefined}
              className={`${int.int === "" && "hidden"} ${id === count && "pointer-events-none opacity-50"}  transition-opacity duration-250 ease-in-out`}
              text="Siguiente"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Button onClick={handleSurprise}>
        <Dices />
        ¡Sorpréndeme!
      </Button>
    </main>
  );
}
