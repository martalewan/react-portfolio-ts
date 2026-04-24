import { ABOUT_PARAGRAPHS } from "../../../data/aboutData";
export const ABOUT_PARAGRAPHS_M = [
    {
        id: 1,
        text: "I’m a Frontend Engineer with over +5 years of experience building scalable, accessible web applications using React and TypeScript."
    },
    {
        id: 2,
        title: "Engineering Approach",
        text: "My work focuses on designing clean, modular architectures that support long-term growth. I prioritize readability, reusability, and consistency across codebases, whether I’m building component libraries, refining state management, or improving application performance."
    },
    {
        id: 3,
        title: "Beyond Work",
        text: "Before transitioning fully into engineering, I worked as a graphic designer and trained as a cellist. These experiences shape how I think about structure, balance, and detail, influencing how I craft UI systems and user experiences. Outside of engineering, I enjoy playing tennis, studying chess, and learning new languages. These interests help me stay curious, disciplined, and continuously improving."
    },
];
const AboutContent = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-16">
            <div className="flex flex-col">

                {ABOUT_PARAGRAPHS_M.map((item) => (
                    <div key={item.id} className="pb-6">
                        <p className="text-base leading-relaxed text-muted-foreground">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutContent;