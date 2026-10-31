import { useAppContext } from "@/AppContext";
import Orb from "@/components/Orb";

export default function Bg404() {
  const {
    theme: [theme],
  } = useAppContext();
  return (
    <div className="fixed size-full -z-3">
      <Orb
        colors={
          theme === "dark"
            ? ["#74c7ec", "#89b4fa", "#a6e3a1"]
            : ["#209fb5", "#1e66f5", "#40a02b"]
        }
        hoverIntensity={1}
        trail={1}
        rotateOnHover
        followCursor
        hue={0}
        size={1}
        glow={1}
        bleed={1}
        wobble={1}
        highlight={1}
        tiltX={0}
        tiltY={0}
        speed={1}
        backgroundColor="#000000"
        forceHoverState={false}
        clickPulse
        intro
      />
    </div>
  );
}
