import Cursor from "./components/ui/Cursor";
import DotsContainer from "./components/modules/DotsContainer";
import Navbar from "./components/modules/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import ProjectsSection from "./components/sections/ProjectsSection";
import Skills from "./components/sections/Skills";
import BackgroundEffects from "./components/ui/BackgroundEffects";
import BottomBlurFade from "./components/ui/BottomBlurFade";


const App = () => {
  return (
    <div className="bg-(--primary-color) relative min-h-screen">

      <BackgroundEffects />
      <BottomBlurFade height={"h-17"} />
      <Cursor />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <DotsContainer />
      <ProjectsSection />
      <Contact />
    </div >
  );
}

export default App;
