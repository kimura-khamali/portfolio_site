import Image from "next/image";
import HomeComponent from "./components/Home";
import ProjectShowcase from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
   <div>
   <HomeComponent/>
   <Skills/>
   <ProjectShowcase/>
    </div>
  );
}
