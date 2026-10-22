import { AppContextProvider } from "./AppContextProvider";
import Nav from "@/components/Nav";

export default function ReferencesApp() {
  return (
    <AppContextProvider>
      <Nav current="references"/>
      <main></main>
    </AppContextProvider>
  );
}
