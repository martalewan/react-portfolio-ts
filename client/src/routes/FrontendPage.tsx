import Cursor from "./../components/ui/Cursor";
import Navbar from "./../components/ui/Navbar";
import BackgroundEffects from "./../components/effects/BackgroundEffects";
import BottomFade from "./../components/layout/BottomFade";
import { useLenis } from "./../hooks/useLenis";
import Hero from "./../components/sections/hero/Hero";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./../components/sections/about/About"));
const TextWave = lazy(() => import("./../components/effects/TextWave"));
const Skills = lazy(() => import("./../components/sections/skills/Skills"));
const AmbientDots = lazy(() => import("./../components/effects/AmbientDots"));
const Projects = lazy(() => import("./../components/sections/projects/Projects"));
const Contact = lazy(() => import("./../components/sections/contact/Contact"));
const Footer = lazy(() => import("../components/layout/footer/Footer"));

const Home = () => {
    useLenis();

    return (
        <main className="relative min-h-screen overflow-hidden">
            <BackgroundEffects />
            <BottomFade height={"h-17"} />
            <Cursor />

            <Navbar />
            <Hero />

            <Suspense fallback={null}>
                <About />
                <TextWave />
                <Skills />
                <AmbientDots />
                <Projects />
                <Contact />

                <Footer />
            </Suspense>

        </main >
    );
}

export default Home;
