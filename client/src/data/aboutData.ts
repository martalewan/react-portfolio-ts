import { FiCode, FiLayers, FiZap, FiMusic } from "react-icons/fi";
import {
    SiRedux,
    SiTypescript,
    SiVitest,
} from "react-icons/si";

import {
    FaAngular,
    FaReact,
} from "react-icons/fa";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GiMaterialsScience } from "react-icons/gi";

import {
    SiFigma,
} from "react-icons/si";

import {
    DiPhotoshop,
    DiIllustrator,
} from "react-icons/di";

import { TbBrandAdobeIndesign } from "react-icons/tb";


export const ABOUT_PARAGRAPHS = [
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


export const ABOUT_HIGHLIGHTS = [
    {
        id: "architecture-performance",
        icon: FiCode,
        prefix: "A",
        title: "Architecture & Performance",
        text: `
      I design and build scalable, high-performance web applications using React and TypeScript.
      My focus is on clean architecture, maintainable code, and interfaces that feel fast,
      accessible, and reliable in real-world use.
    `,
    },
    {
        id: "build-refine",
        icon: FiMusic,
        prefix: "B",
        title: "Build & Refine",
        text: `
      My experience as a cellist shaped my discipline, patience, and attention to detail.
      I bring that same mindset into development—refining UI details and solving complex
      component challenges with precision and consistency.
    `,
    },
    {
        id: "continuous-growth",
        icon: FiZap,
        prefix: "C",
        title: "Continuous Growth",
        text: `
      My transition from design to engineering has been intentional and ongoing.
      I enjoy learning, experimenting, and improving with every project—always aiming
      to build better systems and stronger user experiences.
    `,
    },
    {
        id: "design-foundations",
        icon: FiLayers,
        prefix: "D",
        title: "Design Foundations",
        text: `
      With a background in graphic design, I approach frontend development through structure,
      hierarchy, and visual clarity. I create interfaces that not only look polished, but also
      communicate clearly and intuitively.
    `,
    },
];

export const EXPERIENCES_DATA = [
    {
        role: "Frontend Engineer",
        company: "Digiexam",
        location: "Stockholm",
        period: "2022 — 2025",
        type: "Full-time",
        description: "Developed and maintained large-scale React and TypeScript applications for a high-stakes digital examination platform used by schools and universities. Focused on performance optimization, accessibility (WCAG compliance), and building reusable component systems within a structured design system.",
        tech: [
            { icon: FaReact, name: "React" },
            { icon: SiTypescript, name: "TypeScript" },
            { icon: SiRedux, name: "Redux" },
            { icon: RiNextjsFill, name: "Next.js" },
            { icon: RiTailwindCssFill, name: "Tailwind" },
            { icon: GiMaterialsScience, name: "Material UI" },
            { icon: FaAngular, name: "Angular" },
            { icon: SiVitest, name: "Vitest" },
        ],
    },
    {
        role: "Graphic Designer",
        company: "Demant",
        location: "Warsaw",
        period: "2019 — 2022",
        type: "Full-time",
        description:
            "Designed visual systems and UI layouts for a global healthcare company specializing in hearing solutions. Focused on creating consistent design language across digital and print assets, improving usability through clear hierarchy, typography, and accessible interface patterns for international audiences.",
        tech: [
            { icon: SiFigma, name: "Figma" },
            { icon: DiIllustrator, name: "Illustrator" },
            { icon: DiPhotoshop, name: "Photoshop" },
            { icon: TbBrandAdobeIndesign, name: "InDesign" },
        ],
    },
    {
        role: "Graphic Designer",
        company: "Freelance",
        location: "Paris",
        period: "2010 — 2022",
        type: "Freelance",
        description:
            "Collaborated with startups, agencies, and independent clients on branding, typography, and digital design projects. Delivered end-to-end visual identities and web interfaces, focusing on clarity, consistency, and translating abstract ideas into functional and visually coherent design systems.",
        tech: [
            { icon: SiFigma, name: "Figma" },
            { icon: DiIllustrator, name: "Illustrator" },
            { icon: DiPhotoshop, name: "Photoshop" },
            { icon: TbBrandAdobeIndesign, name: "InDesign" },
        ],
    },
];