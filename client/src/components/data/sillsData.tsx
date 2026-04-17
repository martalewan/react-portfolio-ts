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
            { name: "HTML", icon: <FaHtml5 />, level: "Advanced", years: 5 },
            { name: "CSS", icon: <FaCss3Alt />, level: "Advanced", years: 5 },
            { name: "SASS", icon: <FaSass />, level: "Intermediate", years: 3 },
            { name: "React JS", icon: <FaReact />, level: "Advanced", years: 3 },
            { name: "Angular", icon: <FaAngular />, level: "Intermediate", years: 2 },
            { name: "Redux", icon: <SiRedux />, level: "Intermediate", years: 2 },
            { name: "Next JS", icon: <RiNextjsFill />, level: "Intermediate", years: 2 },
            { name: "Tailwind CSS", icon: <RiTailwindCssFill />, level: "Advanced", years: 3 },
            { name: "Material UI", icon: <GiMaterialsScience />, level: "Intermediate", years: 2 },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node JS", icon: <FaNodeJs />, level: "Intermediate", years: 3 },
            { name: "Express JS", icon: <SiExpress />, level: "Intermediate", years: 3 },
            { name: "MySQL", icon: <SiMysql />, level: "Intermediate", years: 2 },
            { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate", years: 3 },
            { name: "PostgreSQL", icon: <SiPostgresql />, level: "Beginner", years: 1 },
        ],
    },
    {
        title: "Languages",
        skills: [
            { name: "JavaScript", icon: <SiJavascript />, level: "Advanced", years: 4 },
            { name: "TypeScript", icon: <SiTypescript />, level: "Intermediate", years: 2 },
            { name: "Python", icon: <DiPython />, level: "Beginner", years: 1 },
        ],
    },
    {
        title: "Tools & Design",
        skills: [
            { name: "Git", icon: <SiGit />, level: "Advanced", years: 4 },
            { name: "VS Code", icon: <DiVisualstudio />, level: "Advanced", years: 5 },
            { name: "Postman", icon: <SiPostman />, level: "Intermediate", years: 3 },
            { name: "Storybook", icon: <SiStorybook />, level: "Beginner", years: 1 },
            { name: "Figma", icon: <SiFigma />, level: "Advanced", years: 3 },
            { name: "Photoshop", icon: <DiPhotoshop />, level: "Intermediate", years: 2 },
            { name: "Illustrator", icon: <DiIllustrator />, level: "Intermediate", years: 2 },
            { name: "InDesign", icon: <TbBrandAdobeIndesign />, level: "Beginner", years: 1 },
        ],
    }
];