import { AppContextProvider } from "../AppContextProvider";
import Nav from "@/components/Nav";
import BgSubjects from "../components/bgs/BgSubjects";
import SubjectsMain from "./main/SubjectsMain";


export default function SubjectsApp() {
  return (
    <AppContextProvider>
      <BgSubjects />

      <Nav current="subjects" />

      <SubjectsMain/>
    </AppContextProvider>
  );
}
