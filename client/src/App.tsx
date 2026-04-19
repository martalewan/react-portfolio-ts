import Cursor from "./components/ui/Cursor";
import AmbientDots from "./components/modules/AmbientDots";
import Navbar from "./components/ui/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import ProjectsSection from "./components/sections/ProjectsSection";
import Skills from "./components/sections/Skills";
import BackgroundEffects from "./components/ui/BackgroundEffects";
import BottomBlurFade from "./components/ui/BottomBlurFade";
import Footer from "./components/ui/Footer";


const App = () => {
  return (
    <div className="bg-(--color-bg) relative min-h-screen">

      <BackgroundEffects />
      <BottomBlurFade height={"h-17"} />
      <Cursor />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <AmbientDots />
      <ProjectsSection />
      <Contact />
      <Footer />

    </div >
  );
}

export default App;
