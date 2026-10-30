import { AppContextProvider } from "../AppContextProvider";
import Nav from "@/components/Nav";

import BgIntegrals from "../components/bgs/BgIntegrals";
import IntegralsMain from "./main/IntegralsMain";

export default function IntegralsApp() {
  return (
    <AppContextProvider>
      <BgIntegrals />

      <Nav current="integrals" />
      <IntegralsMain />
    </AppContextProvider>
  );
}
