export interface Author {
    firstname: string;
    bio: string;
    os?: string;
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
        os: "macOS",
        bio: "Hello there! I can develop software. I also enjoy learning new technologies. Thats what I like.",
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
