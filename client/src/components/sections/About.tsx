import SectionTitle from "../modules/SectionTitle";
import AboutIntro from "../modules/AboutIntro";
import NeonFrame from "../modules/NeonFrame";
import AboutContent from "../modules/AboutContent";
import AboutExperience from "../modules/AboutExperience";

const About = () => {
    return (
        <section id="about" className="page-padding">

            <SectionTitle label="01." title="What makes me different" subtitle="Background" />
            <AboutIntro />

            <div className="mt-16">
                <NeonFrame>

                    <div className="grid grid-cols-2 gap-20 relative z-10">
                        <AboutContent />
                        <AboutExperience />
                    </div>

                </NeonFrame>
            </div>

        </section>
    );
};

export default About;