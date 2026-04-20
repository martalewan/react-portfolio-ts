import HeroPresentation from "../modules/HeroPresentation";
import HeroPortrait from "../modules/HeroPortrait";
import ScrollButton from "../ui/ScrollButton";
import RadialGrandientBackground from "../modules/RadialGradientBackground";

const Hero = () => {
    return (
        <section id="home" className="page-padding min-h-screen">
            <RadialGrandientBackground />

            <div className="min-h-screen flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-3 mt-5 xl:mt-0">

                <HeroPresentation />
                <HeroPortrait />

            </div>

            <div className="absolute bottom-11 left-1/2 -translate-x-1/2">
                <ScrollButton direction="down" scrollToId="about" />
            </div>
        </section>
    );
};

export default Hero;