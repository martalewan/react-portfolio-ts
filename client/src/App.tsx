import About from "./components/about/About";
import Cursor from "./components/Cursor";
import DotsContainer from "./components/dotsContainer/DotsContainer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";

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
    </div>
  );
}

export default App;
