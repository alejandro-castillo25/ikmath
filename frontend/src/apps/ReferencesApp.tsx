import { AppContextProvider } from "../AppContextProvider";
import Nav from "@/components/Nav";
import BgReferences from "../components/bgs/BgReferences";

export default function ReferencesApp() {
  return (
    <AppContextProvider>
      <BgReferences/>
      <Nav current="references"/>
      <main></main>
    </AppContextProvider>
  );
}
