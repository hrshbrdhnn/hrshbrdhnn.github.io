type Social = {
    label: string;
    link: string;
};

type Presentation = {
    mail: string;
    title: string;
    description: string;
    socials: Social[];
    profile?: string;
};

const presentation: Presentation = {
    mail: "harsshhh.pro@gmail.com",
    title: "Hi, I'm Harsh ",
    profile: "https://avatars.githubusercontent.com/u/93096721?v=4",
    description:
        "Namaste, I'm a **Indian sofware engineer** working in a service-based MNC and simultaneously pursuing bachelor's degree from **BITS Pilani**. Besides that, I am learning **DevOps** and I'm interested in **Linux**, **CyberSecurity**, alongside other random computer things.",
    socials: [
        {
            label: 'X',
            link: 'https://twitter.com/harsshhhtwt',
        },
        {
            label: 'GitHub',
            link: 'https://github.com/harsshhhgit',
        },
        {
            label: 'LinkedIn',
            link: 'https://linkedin.com/in/harsshhh',
        },
        {
            label: 'YouTube',
            link: 'https://www.youtube.com/@harsshhhyt',
        },
        {
            label: 'Instagram',
            link: 'https://www.instagram.com/harsshhhig',
        },
        {
            label: 'Discord',
            link: 'https://discordapp.com/users/804398864063791124',
        }
    ],
};

export default presentation;