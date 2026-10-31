import FourOFourMain from "./main/404Main";
import { AppContextProvider } from "../AppContextProvider";
import Nav from "@/components/Nav";
import Bg404 from "@/components/bgs/Bg404";
// import BgReferences from "./components/BgReferences";

export default function FourOFourApp() {
  return (
    <AppContextProvider>
      <Bg404/>
      <Nav current={null} />
      <FourOFourMain/>
    </AppContextProvider>
  );
}
