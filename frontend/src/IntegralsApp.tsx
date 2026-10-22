import { AppContextProvider } from "./AppContextProvider";
import Nav from "@/components/Nav";

export default function IntegralsApp() {
  return (
    <AppContextProvider>
      <Nav current="integrals"/>
      <main></main>
    </AppContextProvider>
  );
}
