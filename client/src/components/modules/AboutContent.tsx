import { ABOUT_PARAGRAPHS, INFO_ITEMS } from "../../data/aboutData";
import AboutInfoBadge from "./AboutInfoBadge";

const AboutContent = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
            <div className="flex flex-col gap-8 max-w-210">
                {ABOUT_PARAGRAPHS.map((item) => (
                    <p
                        key={item.id}
                        className="p-large"
                    >
                        {item.text}
                    </p>
                ))}
            </div>

            <div className="flex flex-col gap-6">
                {INFO_ITEMS.map(({ id, icon, title, description }) => (
                    <AboutInfoBadge key={id} icon={icon} title={title} description={description} />
                ))}
            </div>
        </div>

    );
};

export default AboutContent;