import Cursor from "./components/Cursor";
import DotsContainer from "./components/modules/DotsContainer";
import Navbar from "./components/modules/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import ProjectsSection from "./components/sections/ProjectsSection";
import Skills from "./components/sections/Skills";


const App = () => {
  return (
    <div className="bg-(--primary-color) relative bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
  bg-size-[540px_540px] bg-position-[calc(50%)_calc(50%)]">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <DotsContainer />
      <Skills />
      <ProjectsSection />
    </div>
  );
}

export default App;
