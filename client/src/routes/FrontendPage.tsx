import Cursor from "./../components/ui/Cursor";
import Navbar from "./../components/ui/Navbar";
import BackgroundEffects from "./../components/effects/BackgroundEffects";
import BottomFade from "./../components/layout/BottomFade";
import { useLenis } from "./../hooks/useLenis";
import Hero from "./../components/sections/hero/Hero";
import About from "./../components/sections/about/About";
import TextWave from "./../components/effects/TextWave";
import Skills from "./../components/sections/skills/Skills";
import AmbientDots from "./../components/effects/AmbientDots";
import Projects from "./../components/sections/projects/Projects";
import Contact from "./../components/sections/contact/Contact";
import Footer from "../components/layout/footer/Footer";

const Home = () => {
    useLenis();


    return (
        <div className="relative min-h-screen overflow-hidden">
            <BackgroundEffects />
            <BottomFade height={"h-17"} />
            <Cursor />

            <Navbar />
            <Hero />
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

export default Home;
