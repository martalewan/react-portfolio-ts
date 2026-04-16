import Cursor from "./components/Cursor";
import DotsContainer from "./components/modules/DotsContainer";
import Navbar from "./components/modules/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import ProjectsSection from "./components/sections/ProjectsSection";
import Skills from "./components/sections/Skills";


const App = () => {
  return (
    <div className="bg-(--primary-color) relative min-h-screen">
      <div className=" grid-glow absolute bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
                      bg-size-[64px_64px] bg-position-[0_0] inset-0 z-0" />

      <div className="grain absolute inset-0 z-0" />
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
