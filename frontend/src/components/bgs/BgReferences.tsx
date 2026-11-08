import Aurora from "@/components/Aurora";
import { useAppContext } from "@/AppContext";

export default function BgReferences() {
  const {
    theme: [theme],
  } = useAppContext()!;

  return (
    <div
      className="fixed size-full -z-3"
      style={{ width: "100%", height: "100%", position: "fixed" }}
    >
      <Aurora
        colorStops={
          theme === "dark"
            ? ["#74c7ec", "#89b4fa", "#94e2d5"]
            : ["#209fb5", "#1e66f5", "#179299"]
        }
        amplitude={1.75}
        blend={0.2}
        height={0.45}
        speed={1}
        glow={0.6}
        scale={1}
        brightness={.65}
        layers={1}
        direction="bottom"
        opacity={1}
        mouseInteraction={false} //? disabled for now!
        intro
        lightMode={theme === "light"}
      />
    </div>
  );
}
