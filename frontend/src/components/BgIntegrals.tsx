import PixelSnow from "./PixelSnow";
import { useAppContext } from "@/AppContext";

export default function BgIntegrals() {
  const {
    theme: [theme],
  } = useAppContext()!;

  return (
    <div
      className="fixed size-full -z-3"
      >
      <PixelSnow
        color={"#74c7ec"}
        variant="snowflake"
        density={0.6}
        speed={1}
        wind={0.25}
        flakeSize={1}
        pixelSize={3}
        glow={0.8}
        mouseInteraction
        sway={0.5}
        twinkle={0.35}
        accumulate
        depth={0.6}
        brightness={1}
        fade={0}
        opacity={1}
        intro
        lightMode={theme==="light"}
    />
    </div>
  );
}
