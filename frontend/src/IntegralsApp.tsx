import { AppContextProvider } from "./AppContextProvider";
import Nav from "@/components/Nav";

import BgIntegrals from "./components/BgIntegrals";
import IntegralsMain from "./IntegralsMain";





export default function IntegralsApp() {
 
  return (
    <AppContextProvider>
      <BgIntegrals />

      <Nav current="integrals" />
      <IntegralsMain/>
      
    </AppContextProvider>
  );
}
