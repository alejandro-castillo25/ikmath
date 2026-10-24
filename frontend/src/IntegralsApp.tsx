import { AppContextProvider } from "./AppContextProvider";
import Nav from "@/components/Nav";


import PixelSnow from '@/components/PixelSnow';
import BgIntegrals from "./components/BgIntegrals";


export default function IntegralsApp() {
  return (
    <AppContextProvider>
      <BgIntegrals/>
      
      <Nav current="integrals"/>
      <main></main>
    </AppContextProvider>
  );
}
