type SectionBase = {
    description: string;
};

type TitledSection = SectionBase & {
    title: string;
};

export type FooterSectionsData = {
    brand: SectionBase;
    contact: TitledSection;
    cta: TitledSection;
};

export const FOOTER_SECTIONS_DATA: FooterSectionsData = {
    brand: {
        description: "Crafting digital experiences with modern web technologies"
    },

    contact: {
        title: "Contact",
        description: "Available for collaborations, freelance projects, and new opportunities.",
    },

    cta: {
        title: "Connect",
        description: "Let’s build something meaningful together."
    },
};


export type SignatureData = {
    credit: string;
    madeWith: string;
    year: string;
    copyright: string;
};

export const SIGNATURE_DATA: SignatureData = {
    credit: "Designed & built with care in React, TypeScript & Tailwind",
    madeWith: "Made with",
    year: "2026",
    copyright: "© Marta Lewandowska."
};