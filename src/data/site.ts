export interface Author {
    firstname: string;
    bio: string;
    lastname: string;
    socials: Socials[];
}

export interface Socials {
    name: string;
    link: string;
}
export interface Site {
    author: Author;
}

export const site: Site = {
    author: {
        bio: "Hello there! I can develop software and I also enjoy learning new technologies. That's what I like.",
        firstname: "Jakob",
        lastname: "Bauer",
        socials: [
            {
                name: "GitHub",
                link: "https://github.com/bauerjakob",
            },
        ],
    },
};
