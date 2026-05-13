import asteroidGame1 from "../assets/frontendPortfolio/asteroidGame1.webp";
import asteroidGame2 from "../assets/frontendPortfolio/asteroidGame2.webp";
import asteroidGame3 from "../assets/frontendPortfolio/asteroidGame3.webp";
import asteroidGame4 from "../assets/frontendPortfolio/asteroidGame4.webp";
import lokalTank1 from "../assets/frontendPortfolio/lokaltank1.webp";
import lokalTank2 from "../assets/frontendPortfolio/lokaltank2.webp";
import lokalTank3 from "../assets/frontendPortfolio/lokaltank3.webp";
import lokalTank4 from "../assets/frontendPortfolio/lokaltank4.webp";
import mestate1 from "../assets/frontendPortfolio/mestate1.webp";
import mestate2 from "../assets/frontendPortfolio/mestate2.webp";
import mestate3 from "../assets/frontendPortfolio/mestate3.webp";
import mestate4 from "../assets/frontendPortfolio/mestate4.webp";
import mestate5 from "../assets/frontendPortfolio/mestate5.webp";
import mestate6 from "../assets/frontendPortfolio/mestate6.webp";
import mestate7 from "../assets/frontendPortfolio/mestate7.webp";
import yogiWeb1 from "../assets/frontendPortfolio/yogiWeb1.webp";
import yogiWeb2 from "../assets/frontendPortfolio/yogiWeb2.webp";
import yogiWeb3 from "../assets/frontendPortfolio/yogiWeb3.webp";
import yogiWeb4 from "../assets/frontendPortfolio/yogiWeb4.webp";
import yogiWeb5 from "../assets/frontendPortfolio/yogiWeb5.webp";

export const projects = [
    {
        id: "lokal-tank",
        title: "Lokal Tank — Industrial Manufacturing Website Redesign",
        description:
            "A complete redesign and frontend development of a corporate industrial website for Lokal Tank — a manufacturer specializing in pressure tanks, steel constructions, and process installations. The project focused on transforming a traditional manufacturing website into a modern editorial-style digital experience with strong typography, refined layouts, multilingual support, SEO optimization, responsive architecture, and interactive product catalog previews. Special attention was given to visual hierarchy, accessibility, performance, and creating a more premium and trustworthy digital identity tailored to the industrial sector.", images: [lokalTank1, lokalTank2, lokalTank3, lokalTank4],
        techStack: [
            "Gatsby",
            "React",
            "JavaScript",
            "styled-components",
            "react-i18next / i18n",
            "SEO optimization",
        ],
        link: "https://lokaltank-gatsby.pages.dev/"
    },

    {
        id: "mestate",
        title: "Mestate — Modern Real Estate Platform Concept",
        description:
            "A modern real estate platform concept designed with a strong focus on premium presentation, clean layouts, and contemporary frontend architecture. The interface combines editorial-inspired typography, responsive UI systems, and carefully structured property showcases to create a polished browsing experience across desktop and mobile devices. The project explored modern component design, luxury-inspired visual direction, scalable layouts, and refined interaction patterns tailored for the real estate industry.",
        images: [
            mestate1,
            mestate2,
            mestate3,
            mestate4,
            mestate5,
            mestate6,
            mestate7,
        ],
        techStack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Responsive Design",
            "UI Design",
            "Frontend Development",
        ],
        link: "https://real-estate-webside.pages.dev"
    },

    {
        id: "yogi-web",
        title: "Yogi Web — Editorial Wellness & Lifestyle Experience",
        description:
            "A calm and minimal wellness-inspired website experience created for a yoga and lifestyle brand. The project focused on soft visual rhythm, spacious layouts, elegant typography, and subtle interactions to create a refined digital atmosphere aligned with mindfulness and modern editorial aesthetics. Special attention was given to responsive behavior, visual balance, smooth user flow, and creating an immersive frontend experience that feels both premium and approachable across all screen sizes.",
        images: [yogiWeb1, yogiWeb2, yogiWeb3, yogiWeb4, yogiWeb5],
        techStack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Responsive Design",
            "UI Design",
            "Frontend Development",
        ],
    },

    {
        id: "asteroid-game",
        title: "Asteroid Game — Interactive Browser Arcade Experience",
        description:
            "A browser-based arcade game inspired by classic asteroid shooters, built with a focus on gameplay responsiveness, animation systems, and interactive frontend logic. The project explored collision detection, dynamic rendering, game state management, keyboard interactions, and visual effects inside a modern JavaScript environment. The goal was to create a lightweight but engaging gameplay experience while experimenting with performance optimization and interactive canvas-based animations.",
        images: [
            asteroidGame1,
            asteroidGame2,
            asteroidGame3,
            asteroidGame4,
        ],
        techStack: [
            "JavaScript",
            "React",
            "Canvas API",
            "Game Logic",
            "Animations",
        ],
        link: "https://asteroid-game-ez2.pages.dev"
    },
];