import { useAppContext } from "@/AppContext";
import ShapeGrid from "@/components/ShadeGrid";

export default function Bg({ focusStart }: { focusStart: boolean }) {

  const {
    theme: [theme],
  } = useAppContext()!;


  return (
    <ShapeGrid
      speed={focusStart ? 0.2 * (Math.PI ** 2 / 2) : 0.2}
      squareSize={65}
      direction={focusStart ? "up" : "diagonal"}
      
      borderColor={theme === "dark" ? "white" : "gray"} // Hardcored ye
      hoverFillColor={"oklch(0.324 0.032 281.978)"}
      shape="square"
      hoverTrailAmount={0}
    />
  );
}