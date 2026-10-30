import FourOFourMain from "./main/404Main";
import { AppContextProvider } from "../AppContextProvider";
import Nav from "@/components/Nav";
// import BgReferences from "./components/BgReferences";

export default function FourOFourApp() {
  return (
    <AppContextProvider>
      {/*<BgReferences/>*/}
      <Nav current={null} />
      <FourOFourMain/>
    </AppContextProvider>
  );
}
