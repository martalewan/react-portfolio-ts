import { ABOUT_PARAGRAPHS } from "../../data/aboutData";

const AboutContent = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
            <div className="flex flex-col gap-8 max-w-210">
                {ABOUT_PARAGRAPHS.map((item) => (
                    <p
                        key={item.id}
                        className="text-large"
                    >
                        {item.text}
                    </p>
                ))}

            </div>


        </div>

    );
};

export default AboutContent;