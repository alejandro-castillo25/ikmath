import { useAppContext } from "@/AppContext";
import ShapeGrid from "@/components/ShapeGrid";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Bg({ focusStart }: { focusStart: boolean }) {
  const {
    theme: [theme],
  } = useAppContext()!;
  

  return (
    <div className="size-full -z-3 fixed">
      <ShapeGrid
        clickCascade={true}
        trail={0.6}
        glow={0}
        
        speed={focusStart ? 0.2 * Math.E ** 2 : 0.2}
        cellSize={useIsMobile() ? 65 : 85}
        direction={focusStart ? "down" : "diagonal"}
        intro={true}
        lineColor={theme === "dark" ? "white" : "gray"} // Hardcored ye
        hoverColor={theme === "dark" ? "#74c7ec" : "#209fb5"}
        
        hoverFillColor={theme === "dark" ? "#74c7ec" : "#209fb5"}
        fillOpacity={0.15}
        
        shape="square"
        fade={0.30}
      />
    </div>
  );
}
