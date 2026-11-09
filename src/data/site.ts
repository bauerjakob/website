export interface Fact {
    key: string;
    value: string;
}

export interface Social {
    name: string;
    label: string;
    link: string;
}

export interface Job {
    period: string;
    gitRef?: string;
    role: string;
    company: string;
    note?: string;
    changes: string[];
}

export interface SkillGroup {
    name: string;
    items: string[];
}

export interface Author {
    firstname: string;
    lastname: string;
    headline: string;
    bio: string;
    facts: Fact[];
    socials: Social[];
    experience: Job[];
    skills: SkillGroup[];
    awards: string[];
}

export interface Site {
    author: Author;
}

export const site: Site = {
    author: {
        firstname: "Jakob",
        lastname: "Bauer",
        headline: "Computer Science @ TUM · Developer @ neeyo",
        bio: "I'm a Computer Science student at TUM with a minor in mathematics. My main interest is the mathematics behind machine learning. That's why I've taken several ML-related courses, and I enjoy understanding why methods work, not just how to apply them. Looking ahead, I'm open to moving into research in this area.",
        facts: [
            { key: "role", value: "Software Engineer @ neeyo" },
            {
                key: "study",
                value: "Computer Science, minor in Mathematics @ TUM",
            },
            {
                key: "focus",
                value: "Machine Learning, Deep Learning, Mathematics",
            },
            {
                key: "langs",
                value: "German (native), English (full professional)",
            },
            { key: "home", value: "Bavaria, Germany" },
        ],
        socials: [
            {
                name: "mail",
                label: "mail@bauer-jakob.de",
                link: "mailto:mail@bauer-jakob.de",
            },
            {
                name: "github",
                label: "github.com/bauerjakob",
                link: "https://github.com/bauerjakob",
            },
            {
                name: "linkedin",
                label: "linkedin.com/in/jakob-bauer-83749a315",
                link: "https://www.linkedin.com/in/jakob-bauer-83749a315",
            },
        ],
        experience: [
            {
                period: "Jan 2025 - now",
                gitRef: "HEAD -> main",
                role: "Software Engineer",
                company: "neeyo",
                note: "End-to-end customer communication, formerly Formware. Part-time alongside my studies at TUM.",
                changes: [
                    "Developed microservices and web applications using C# / .NET and Angular",
                    "Designed and implemented an LLM-based solution to convert PDF invoices into the XRechnung (XML) format",
                ],
            },
            {
                period: "Jul 2022 - Dec 2024",
                role: "Software Engineer",
                company: "Formware GmbH",
                note: "Part-time alongside my studies for the Fachgebundene Hochschulreife.",
                changes: [
                    "Developed backend services and REST APIs in C# / .NET",
                    "Built and maintained frontend features in Angular and TypeScript",
                ],
            },
            {
                period: "Sep 2019 - Jul 2022",
                gitRef: "tag: first-commit",
                role: "IT Specialist, Application Development (Apprenticeship)",
                company: "Formware GmbH",
                changes: [],
            },
        ],
        skills: [
            {
                name: "research",
                items: ["Machine Learning", "Deep Learning", "Mathematics"],
            },
            {
                name: "engineering",
                items: [
                    "C# / .NET",
                    "Angular & TypeScript",
                    "REST APIs & microservices",
                    "LLM applications",
                ],
            },
        ],
        awards: [
            "Deutschlandstipendium (Germany Scholarship) Recipient",
            "State Award for Fachgebundene Hochschulreife",
            "Special Recognition for Outstanding Vocational School Graduation",
            "#HeimatErleben2024 - Regional Student Competition Award",
        ],
    },
};
