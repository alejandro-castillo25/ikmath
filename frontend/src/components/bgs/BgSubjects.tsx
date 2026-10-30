// import SideRays from "./SideRays";
import { useAppContext } from "@/AppContext";

import LightRays from "../LightRays";

export default function BgSubjects() {
  const {
    theme: [theme],
  } = useAppContext()!;

  return (
    <div
      className="fixed size-full -z-3"
      style={{ width: "100%", height: "100%", position: "fixed" }}
    >
      <LightRays
        raysOrigin="bottom-center"
        raysColor={theme === "dark" ? "#74c7ec" : "#209fb5"}
        raysSpeed={1}
        lightSpread={2}
        rayLength={4}
        glow={0.8}
        haze={0.25}
        followMouse
        mouseInfluence={0.1}
        rayDensity={1}
        tilt={0}
        raySharpness={0.35}
        atmosphere={1}
        intensity={1}
        fadeDistance={1}
        saturation={1}
        noiseAmount={0}
        distortion={0.15}
        pulsating={true}
        cursorShadow
        clickPulse
        intro
        lightMode={theme === "light"}
      />
    </div>
  );
}
