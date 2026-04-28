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
import type { IconType } from "react-icons";

type Skill = {
    name: string;
    icon: IconType;
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    years: number;
};

type SkillCategory = {
    id: string;
    title: string;
    skills: Skill[];
    layout?: "primary" | "secondary";
};

const SKILL_LEVEL = {
    BEGINNER: "Beginner",
    INTERMEDIATE: "Intermediate",
    ADVANCED: "Advanced",
    EXPERT: "Expert",
} as const;

export const SKILLS_DATA: SkillCategory[] = [
    {
        id: "frontend",
        title: "Frontend",
        layout: "primary",
        skills: [
            { name: "HTML", icon: FaHtml5, level: SKILL_LEVEL.EXPERT, years: 5 },
            { name: "CSS", icon: FaCss3Alt, level: SKILL_LEVEL.EXPERT, years: 5 },
            { name: "SASS", icon: FaSass, level: SKILL_LEVEL.INTERMEDIATE, years: 3 },
            { name: "React JS", icon: FaReact, level: SKILL_LEVEL.EXPERT, years: 5 },
            { name: "Angular", icon: FaAngular, level: SKILL_LEVEL.INTERMEDIATE, years: 2 },
            { name: "Redux", icon: SiRedux, level: SKILL_LEVEL.ADVANCED, years: 5 },
            { name: "Next JS", icon: RiNextjsFill, level: SKILL_LEVEL.INTERMEDIATE, years: 2 },
            { name: "Tailwind CSS", icon: RiTailwindCssFill, level: SKILL_LEVEL.ADVANCED, years: 3 },
            { name: "Material UI", icon: GiMaterialsScience, level: SKILL_LEVEL.ADVANCED, years: 4 },
        ],
    },
    {
        id: "backend",
        title: "Backend",
        layout: "primary",
        skills: [
            { name: "Node JS", icon: FaNodeJs, level: SKILL_LEVEL.ADVANCED, years: 5 },
            { name: "Express JS", icon: SiExpress, level: SKILL_LEVEL.ADVANCED, years: 5 },
            { name: "MySQL", icon: SiMysql, level: SKILL_LEVEL.ADVANCED, years: 4 },
            { name: "MongoDB", icon: SiMongodb, level: SKILL_LEVEL.INTERMEDIATE, years: 3 },
            { name: "PostgreSQL", icon: SiPostgresql, level: SKILL_LEVEL.INTERMEDIATE, years: 3 },
        ],
    },
    {
        id: "languages",
        title: "Languages",
        layout: "secondary",
        skills: [
            { name: "JavaScript", icon: SiJavascript, level: SKILL_LEVEL.EXPERT, years: 5 },
            { name: "TypeScript", icon: SiTypescript, level: SKILL_LEVEL.EXPERT, years: 5 },
            { name: "Python", icon: DiPython, level: SKILL_LEVEL.BEGINNER, years: 1 },
        ],
    },
    {
        id: "testing",
        title: "Testing",
        layout: "secondary",
        skills: [
            { name: "Vitest", icon: SiVitest, level: SKILL_LEVEL.ADVANCED, years: 4 },
            { name: "Jest", icon: SiJest, level: SKILL_LEVEL.INTERMEDIATE, years: 4 },
        ],
    },
    {
        id: "tools",
        title: "Tools",
        layout: "secondary",
        skills: [
            { name: "Git", icon: SiGit, level: SKILL_LEVEL.ADVANCED, years: 5 },
            { name: "VS Code", icon: DiVisualstudio, level: SKILL_LEVEL.ADVANCED, years: 5 },
            { name: "Postman", icon: SiPostman, level: SKILL_LEVEL.INTERMEDIATE, years: 5 },
            { name: "Storybook", icon: SiStorybook, level: SKILL_LEVEL.BEGINNER, years: 2 },
        ],
    },
    {
        id: "design",
        title: "Design",
        layout: "secondary",
        skills: [
            { name: "Figma", icon: SiFigma, level: SKILL_LEVEL.ADVANCED, years: 3 },
            { name: "Photoshop", icon: DiPhotoshop, level: SKILL_LEVEL.EXPERT, years: 12 },
            { name: "Illustrator", icon: DiIllustrator, level: SKILL_LEVEL.EXPERT, years: 12 },
            { name: "InDesign", icon: TbBrandAdobeIndesign, level: SKILL_LEVEL.EXPERT, years: 12 },
        ],
    }
];

export const SKILLS_LAYOUT_COLUMNS = [
    SKILLS_DATA.slice(0, 1), // Frontend
    SKILLS_DATA.slice(1, 2), // Backend
    SKILLS_DATA.slice(2, 4), // Languages + Testing
    SKILLS_DATA.slice(4, 6), // Tools + Design
];