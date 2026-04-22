import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useAboutScroll } from "../../../hooks/useAboutScroll";
import SectionTitle from "../../ui/SectionTitle";
import AboutContent from "./AboutContent";
import { INFO_ITEMS } from "../../../data/aboutData";
import AboutHighlights from "./AboutHighlights";
import AboutInfoBadge from "./AboutInfoBadge";
import ScrollButton from "../../ui/ScrollButton";
import AboutExperience from "./AboutExperience";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useAboutScroll()

    return (
        <section id="about" className="page-padding relative">

            <SectionTitle
                label="01."
                title="Crafting Digital Experiences That Matter"
                subtitle="Background"
            />

            <div id="vertical" className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-40 w-full items-start">

                <div className="about-left min-w-0">
                    <AboutContent />
                </div>

                <div className="about-right min-w-0 flex flex-col gap-20">
                    <div className="about-panel flex gap-6">
                        {INFO_ITEMS.map(({ id, icon, title, description }) => (
                            <AboutInfoBadge
                                key={id}
                                icon={icon}
                                title={title}
                                description={description}
                            />
                        ))}
                    </div>

                    <div className="flex items-center max-w-full">
                        <AboutHighlights />
                    </div>

                    <div className="flex items-center max-w-full">
                        <AboutExperience />
                    </div>

                </div>
            </div>

            <div className="flex justify-center mt-40">
                <ScrollButton direction="down" scrollToId="skills" />
            </div>

        </section>
    );
};

export default About;