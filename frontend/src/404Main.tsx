import { useCallback } from "react";
import FuzzyText from "./components/FuzzyText";

export default function FourOFourMain() {
  const getRandomText = useCallback((): string => {
    const messages = [
      "Oops!",
      "Knock knock. Who's there? I don't know",
      "404 is a palindomic number",
      "404 = 202 + 202, means twice Accepted",
      "Imagine getting a 404",
      "See you next time! (hopefully no)",
      "Hey, first time?",
      "Hey, last time?",
      "That doesn't even exist",
      "Is that a thing?",
      "Four O Four",
      "404 - Not found",
      "The server cannot find the requested resource",
      "This is a very useful message",
      "Footer text",
      "Header text (someday)",
      "But if you close your eyes, you don't see it",
      "040",
      "[4, 0, 4].join(\"\")",
      "How are you?",
      "I'm ok, how about you?",
      "What're you doing here? Go solve some integrals",
      "Maybe if you reload it, it'll be different",
      "Dev's Fault (I think)",
      "Sorry, that page wasn't found",
      "Sorry, that page was busy",
      "Sorry, that page was sleeping",
      "Sorry, that page was working on something else",
      "Sorry, that page was fired",
      "I don't know where the page is",
      "Missing page, reward: $0",
      "Have you seen that page? Because I haven't",
      "It's not here, go somewhere else",
      "The dev was too lazy to make this page, sorry",
      "The dev forgot about this page, sorry",
      "Click here, it'll do nothing, but do it",
      "Boo!",
      "Did I scare you?",
      "Some say that the page wasn't even real",
      "This is some random text",
      "Should I render?",
      "Hey, it's me, the 404 page",
      "Nice to meet you",
      "Lost media?",
      "Why does this text even exist?",
      "Nope",
      "Are you my creator?",
      "Oh, you're the user, hi",
      "Go study",
      "What time is it? 4:04",
      "Imagine working on a page that almost no one will see",
      "I know what's wrong, the page doesn't exist!",
      "My bad, I forgot to build this page",
      "The page was sick, sorry",
      "Why is this text glitching?",
      "Reload for: nothing",
      "Maybe type the url correctly?",
      "This page is too cool for you, sorry",
      "This page is too fun to be made, sorry",
      "Sorry, try again later",
      "But at least it's not code 500",
    ];

    return messages[Math.floor(Math.random() * messages.length)];
  }, []);

  return (
    <main className="flex w-full justify-center items-center flex-col gap-4 p-2 mt-16 pt-6 pb-6">
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
        Página no encontrada
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
