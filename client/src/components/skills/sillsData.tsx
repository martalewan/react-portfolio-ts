import {
    SiExpress,
    SiFigma,
    SiGit,
    SiGithub,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNetlify,
    SiPostgresql,
    SiPostman,
    SiRedux,
    SiTypescript,
    SiStorybook
} from "react-icons/si";
import {
    FaAngular,
    FaBootstrap,
    FaCss3Alt,
    FaHtml5,
    FaJs,
    FaNodeJs,
    FaReact,
    FaSass,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
    GiMaterialsScience,
} from "react-icons/gi";
import { DiPython, DiVisualstudio, DiPhotoshop, DiIllustrator } from "react-icons/di";
import { TbBrandAdobeIndesign } from "react-icons/tb";

export const skillsData = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },
            { name: "SASS", icon: <FaSass /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "React JS", icon: <FaReact /> },
            { name: "Angular", icon: <FaAngular /> },
            { name: "Redux", icon: <SiRedux /> },
            { name: "Next JS", icon: <RiNextjsFill /> },
            {
                name: "Tailwind CSS",
                icon: <RiTailwindCssFill />,
            },
            {
                name: "Material UI",
                icon: <GiMaterialsScience />,
            },
            { name: "Bootstrap", icon: <FaBootstrap /> },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node JS", icon: <FaNodeJs /> },
            { name: "Express JS", icon: <SiExpress /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
        ],
    },
    {
        title: "Languages",
        skills: [
            {
                name: "JavaScript",
                icon: <SiJavascript />,
            },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Python", icon: <DiPython /> },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: <SiGit /> },
            { name: "GitHub", icon: <SiGithub /> },
            { name: "VS Code", icon: <DiVisualstudio /> },
            { name: "Postman", icon: <SiPostman /> },
            { name: "Netlify", icon: <SiNetlify /> },
            { name: "Storybook", icon: <SiStorybook /> },
        ],
    },
    {
        title: "Design",
        skills: [
            { name: "Photoshop", icon: <DiPhotoshop /> },
            { name: "Illustrator", icon: <DiIllustrator /> },
            { name: "InDesign", icon: <TbBrandAdobeIndesign /> },
            { name: "Figma", icon: <SiFigma /> },
        ],
    }
];