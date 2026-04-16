import SectionTitle from "../modules/SectionTitle";
import AboutIntro from "../modules/AboutIntro";
import AboutContent from "../modules/AboutContent";
import AboutExperience from "../modules/AboutExperience";

const About = () => {
    return (
        <section id="about" className="page-padding">

            <SectionTitle label="01." title="Crafting Digital Experiences That Matter" subtitle="Background" />

            <div className="grid grid-cols-[2fr_1fr] gap-20 relative ">
                <AboutContent />
                <AboutExperience />
            </div>

            <AboutIntro />


        </section>
    );
};

export default About;