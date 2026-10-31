import { useCallback, useRef } from "react";
import FuzzyText from "../../components/FuzzyText";

import messagesLang from "../../langs/404.json";
import { useAppContext } from "@/AppContext";

export default function FourOFourMain() {
  const {
    lang: [lang],
  } = useAppContext();


  const aRef = useRef<number>(Math.floor(
    Math.random() * messagesLang[lang].messages.length,
  ))


  const getRandomText = useCallback((): string => {
    return messagesLang[lang].messages[aRef.current];
  }, [lang]);

  return (
    <main className="flex w-full justify-center items-center flex-col gap-4 p-2 mt-16 pt-6 pb-6">
      <FuzzyText
        colorSplit={0}
        trigger="hover"
        direction="horizontal"
        baseIntensity={0.2}
        hoverIntensity={0.5}
        fuzzRange={30}
        sliceSize={1}
        fps={60}
        transitionDuration={0}
        intro
        introDuration={1400}
        letterSpacing={0}
        fontSize={"10rem"}
        enableHover
        clickEffect
        glitchMode
        glitchInterval={2000}
        glitchDuration={200}
      >
        404
      </FuzzyText>
      <FuzzyText
        colorSplit={0}
        trigger="hover"
        // className="bg-red-400"
        direction="horizontal"
        baseIntensity={0.2}
        hoverIntensity={0.5}
        fuzzRange={30}
        sliceSize={1}
        fps={60}
        transitionDuration={0}
        intro
        introDuration={1400}
        letterSpacing={0}
        fontSize={"1.5rem"}
        // className="text-wrap!"
        enableHover
        clickEffect
        glitchMode
        glitchInterval={2000}
        glitchDuration={200}
      >
        {messagesLang[lang].notFountText}
      </FuzzyText>

      <FuzzyText
        colorSplit={0}
        trigger="hover"
        className="mt-4"
        direction="horizontal"
        baseIntensity={0.2}
        hoverIntensity={0.5}
        fuzzRange={12}
        sliceSize={1}
        fps={60}
        transitionDuration={0}
        intro
        introDuration={1400}
        letterSpacing={0}
        fontSize={"0.85rem"}
        // className="text-wrap!"
        enableHover
        clickEffect
        glitchMode
        glitchInterval={4000}
        glitchDuration={200}
      >
        {getRandomText()}
      </FuzzyText>
    </main>
  );
}
