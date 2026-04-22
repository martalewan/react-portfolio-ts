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
import { useLenis } from "./hooks/useLenis";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import TextWave from "./components/modules/TextWave";
import Parallax from "./components/sections/Parallax";

const App = () => {
  useLenis();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div className="relative min-h-screen overflow-hidden" ref={ref}>
      <BackgroundEffects />
      <BottomBlurFade height={"h-17"} />
      <Cursor />

      <Navbar />
      <Hero />

      <Parallax scrollYProgress={scrollYProgress} />

      <About />

      <TextWave />
      <Skills />

      <AmbientDots />

      <ProjectsSection />
      <Contact />

      <Footer />

    </div >
  );
}

export default App;
