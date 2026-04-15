import { aboutData } from "../data/aboutData";
import ExperienceItem from "./ExperienceItem";

const AboutExperience = () => {
    return (
        <div className="relative">

            <h3 className="mb-10">Experience</h3>

            <div className="absolute left-0 top-12 bottom-0 w-px bg-white/10" />

            <div className="flex flex-col gap-8">

                {aboutData.map((item, index) => (
                    <ExperienceItem key={index} item={item} />
                ))}

            </div>
        </div>
    );
};

export default AboutExperience;