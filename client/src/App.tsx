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
import ParallaxRow from "./components/modules/ParallaxRow";
import { useRef } from "react";
import { useScroll } from "framer-motion";

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
      <div className="flex flex-col py-55">
        <ParallaxRow index={0} progress={scrollYProgress} text="Frontend Developer" />
        <ParallaxRow index={1} progress={scrollYProgress} text="Based in Paris" />
        <ParallaxRow index={2} progress={scrollYProgress} text="Open to collaborations" />

      </div>
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
