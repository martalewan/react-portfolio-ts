import Cursor from "./components/ui/Cursor";
import Navbar from "./components/ui/Navbar";
import BackgroundEffects from "./components/layout/BackgroundEffects";
import BottomBlurFade from "./components/layout/BottomBlurFade";
import Footer from "./components/layout/Footer";
import { useLenis } from "./hooks/useLenis";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Hero from "./components/sections/hero/Hero";
import Parallax from "./components/sections/parallax/Parallax";
import About from "./components/sections/about/About";
import TextWave from "./components/effects/TextWave";
import Skills from "./components/sections/skills/Skills";
import AmbientDots from "./components/effects/AmbientDots";
import Projects from "./components/sections/projects/Projects";
import Contact from "./components/sections/contact/Contact";

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

      <Projects />
      <Contact />

      <Footer />

    </div >
  );
}

export default App;
