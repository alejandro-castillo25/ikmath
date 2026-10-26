import { useInView } from "@/hooks/use-in-view";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Tex from "@/components/Tex";

export function LazyTex({
  int,
  className = "",
}: {
  int: string;
  className: string;
}) {
  const [elementRef, isVisible] = useInView();

  return (
    <ScrollArea
      ref={elementRef as React.Ref<HTMLDivElement>}
      key={int}
      className={className + ` ${!isVisible ? "opacity-0" : ""}`}
    >
      {isVisible && <Tex>{int}</Tex>}

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
