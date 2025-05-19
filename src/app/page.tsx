import HomeComponent from "./components/Home";
import ProjectShowcase from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
   <div>
    <Navbar/>
   <HomeComponent/>
   <Skills/>
   <ProjectShowcase/>
   <Contact/>
   <Footer/>
    </div>
  );
}
