import {
    SiExpress,
    SiFigma,
    SiGit,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiPostman,
    SiRedux,
    SiTypescript,
    SiStorybook,
    SiVitest,
    SiJest
} from "react-icons/si";
import {
    FaAngular,
    FaCss3Alt,
    FaHtml5,
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
            { name: "HTML", icon: <FaHtml5 />, level: "Expert", years: 5 },
            { name: "CSS", icon: <FaCss3Alt />, level: "Expert", years: 5 },
            { name: "SASS", icon: <FaSass />, level: "Intermediate", years: 3 },
            { name: "React JS", icon: <FaReact />, level: "Expert", years: 5 },
            { name: "Angular", icon: <FaAngular />, level: "Intermediate", years: 2 },
            { name: "Redux", icon: <SiRedux />, level: "Advanced", years: 5 },
            { name: "Next JS", icon: <RiNextjsFill />, level: "Intermediate", years: 2 },
            { name: "Tailwind CSS", icon: <RiTailwindCssFill />, level: "Advanced", years: 3 },
            { name: "Material UI", icon: <GiMaterialsScience />, level: "Advanced", years: 4 },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node JS", icon: <FaNodeJs />, level: "Advanced", years: 5 },
            { name: "Express JS", icon: <SiExpress />, level: "Advanced", years: 5 },
            { name: "MySQL", icon: <SiMysql />, level: "Advanced", years: 4 },
            { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate", years: 3 },
            { name: "PostgreSQL", icon: <SiPostgresql />, level: "Intermediate", years: 3 },
        ],
    },
    {
        title: "Languages",
        skills: [
            { name: "JavaScript", icon: <SiJavascript />, level: "Expert", years: 5 },
            { name: "TypeScript", icon: <SiTypescript />, level: "Expert", years: 5 },
            { name: "Python", icon: <DiPython />, level: "Beginner", years: 1 },
        ],
    },
    {
        title: "Testing",
        skills: [
            { name: "Vitest", icon: <SiVitest />, level: "Advanced", years: 4 },
            { name: "Jest", icon: <SiJest />, level: "Intermediate", years: 4 },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: <SiGit />, level: "Advanced", years: 5 },
            { name: "VS Code", icon: <DiVisualstudio />, level: "Advanced", years: 5 },
            { name: "Postman", icon: <SiPostman />, level: "Intermediate", years: 5 },
            { name: "Storybook", icon: <SiStorybook />, level: "Beginner", years: 2 },
        ],
    },
    {
        title: "Design",
        skills: [
            { name: "Figma", icon: <SiFigma />, level: "Advanced", years: 3 },
            { name: "Photoshop", icon: <DiPhotoshop />, level: "Expert", years: 12 },
            { name: "Illustrator", icon: <DiIllustrator />, level: "Expert", years: 12 },
            { name: "InDesign", icon: <TbBrandAdobeIndesign />, level: "Expert", years: 12 },
        ],
    }
];