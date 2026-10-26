import { Button } from "./components/ui/button";
import { useCallback, useEffect, useRef, useState } from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Tex from "./components/Tex";
import type { Int } from "ikmath-shared";
import { Spinner } from "./components/ui/spinner";
import { Badge } from "./components/ui/badge";
import { Download, Ellipsis } from "lucide-react";

import { toPng } from "html-to-image";

export interface FetchDataSettings {
  id?: number;
  from?: number;
  to?: number;
  search?: string;
}


// IMPORTANT set DEV to false, to build to prodution (yeah... i thought that process.env would've worked)
const DEV = true;

export default function IntegralsMain() {

  // TODO: Add light/dark label as a postfix of the download name

  const [int, setInt] = useState<Int>({ int: "", id: 0 });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const fetchData = useCallback(async (settings: FetchDataSettings) => {
    let paramsStr = "?";

    if (Object.keys(settings).length === 0) {
      paramsStr = "";
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

    const data: Int = await response.json();
    console.log(data);

    setInt(data);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    queueMicrotask(() => {
      fetchData({ id: Math.floor(Math.random() * 133) + 1 });
    });
  }, [fetchData]);

  const handleDownloadPng = async () => {
      if (!cardRef.current || isLoading || isExporting) return;

      try {
        setIsExporting(true);

        const element = cardRef.current;

        const originalWidth = element.style.width;
        element.style.width = "max-content";

        const fullWidth = element.scrollWidth + 64;
        const fullHeight = element.scrollHeight + 64;

        // ? Someone kill me, this took a lil long;-;

        element.style.width = originalWidth;

        const dataUrl = await toPng(element, {
          cacheBust: true,
          pixelRatio: 4,
          backgroundColor: "var(--background)",
          width: fullWidth,
          height: fullHeight,
          style: {
            width: "max-content",
            height: "max-content",
            minHeight: "100%",
            maxWidth: "none",
            maxHeight: "none",
            overflow: "visible",
            padding: "32px",
          },
        });

        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `integral-#${int.id || "card"}.png`;
        link.click();
      } catch (error) {
        console.error("Error generating image with html-to-image:", error);
      } finally {
        setIsExporting(false);
      }
    };
  return (
    <main className="flex w-full h-full items-center justify-center flex-col gap-2 p-2 pt-6 pb-6 mt-16 ">
      <ScrollArea
        key={int?.id}
        className={`relative h-auto min-h-35 sm:max-w-[65%] w-full border border-border bg-background/35 backdrop-blur-xs p-2 rounded-lg`}
      >
        {int.id !== 0 && (
          <Badge
            className="absolute -top-1 -left-1 text-md p-2.5"
            variant="default"
          >
            {isLoading ? <Ellipsis /> : <Tex>{`\\#\\,${int.id}`}</Tex>}
          </Badge>
        )}
        <div ref={cardRef} className="w-full flex flex-col items-center justify-center min-h-full">
          {isLoading ? (
            <Spinner className="size-10 text-primary" />
          ) : (
            <>
              {int?.header !== undefined && (
                <Tex className="w-full">{int.header}</Tex>
              )}

              <Tex className="w-full">
                {int.int}
              </Tex>

              {int?.footer !== undefined && (
                <Tex className="w-full">{int.footer}</Tex>
              )}
            </>
          )}
        </div>

        <Button
          onClick={handleDownloadPng}
          disabled={isLoading || isExporting}
          className="absolute -bottom-1 -right-1 z-10"
          variant="secondary"
          size="icon"
        >
          {isExporting ? <Spinner className="size-4" /> : <Download />}
        </Button>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <Button
        onClick={() => fetchData({ id:106 })}
      >
        ¡Sorpréndeme!
      </Button>
    </main>
  );
}
