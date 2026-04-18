import SectionTitle from "../modules/SectionTitle";
import AboutHighlights from "../modules/AboutHighlights";
import AboutContent from "../modules/AboutContent";
import AboutExperience from "../modules/AboutExperience";
import ScrollButton from "../ui/ScrollButton";

const About = () => {
    return (
        <section id="about" className="page-padding relative">

            <SectionTitle label="01." title="Crafting Digital Experiences That Matter" subtitle="Background" />

            <div className="flex flex-col gap-30 pb-40">

                <AboutContent />
                <AboutHighlights />
                <AboutExperience />
            </div>

            <ScrollButton direction="down" scrollToId="skills" />

        </section>
    );
};

export default About;