import { AppContextProvider } from "../AppContextProvider";
import Nav from "@/components/Nav";
import BgReferences from "../components/bgs/BgReferences";
import ReferencesMain from "./main/ReferencesMain";

export default function ReferencesApp() {
  return (
    <AppContextProvider>
      <BgReferences/>
      <Nav current="references"/>
      <ReferencesMain/>
    </AppContextProvider>
  );
}
