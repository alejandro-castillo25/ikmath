import SideRays from "./SideRays";
import { useAppContext } from "@/AppContext";

export default function BgSubjects() {
  const {
    theme: [theme],
  } = useAppContext()!;

  return (
    <div
      className="fixed size-full -z-3"
      style={{ width: "100%", height: "100%", position: "fixed" }}
    >
      <SideRays
        speed={2.5}
        rayColor1={theme === "dark" ? "#74c7ec" : "#209fb5"}
        rayColor2={theme === "dark" ? "#74c7ec" : "#209fb5"}
        intensity={4}
        spread={2}
        origin="bottom-right"
        tilt={0}
        saturation={1}
        blend={0.75}
        falloff={1.6}
        opacity={1}
        lightMode={theme === "light"}
        
      />
    </div>
  );
}
