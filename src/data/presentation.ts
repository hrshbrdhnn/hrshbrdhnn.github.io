type Social = {
    label: string;
    link: string;
};

type Education = {
    institutionLogo: string;
    institutionLogoAltText: string;
    institution: string;
    course: string,
    duration: string
};

type Presentation = {
    mail: string;
    title: string;
    description: string;
    socials: Social[];
    education: Education[];
    profile?: string;
};

const presentation: Presentation = {
    mail: "hrshbrdhnn@gmail.com",
    title: "Hi, I'm Harsh ",
    profile: "https://avatars.githubusercontent.com/u/93096721?v=4",
    description:
        "Namaste, I'm a **Indian sofware engineer** working in a service-based MNC and simultaneously pursuing bachelor's degree from **BITS Pilani**. Besides that, I am learning **DevOps** and I'm interested in **Linux**, **CyberSecurity**, alongside other random computer things.",
    socials: [
        {
            label: 'X',
            link: 'https://twitter.com/hrshbrdhnn',
        },
        {
            label: 'GitHub',
            link: 'https://github.com/hrshbrdhnn',
        },
        {
            label: 'LinkedIn',
            link: 'https://linkedin.com/in/hrshbrdhnn',
        },
        {
            label: 'YouTube',
            link: 'https://www.youtube.com/@hrshbrdhnn',
        },
        {
            label: 'Instagram',
            link: 'https://www.instagram.com/hrshbrdhnn',
        },
        {
            label: 'Discord',
            link: 'https://discordapp.com/users/804398864063791124',
        }
    ],
    education: [
        {
            institutionLogo: "https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg",
            institutionLogoAltText: "BITS Pilani Logo",
            institution: "Birla Institute of Technology and Science, Pilani",
            course: "B.Sc. (Design & Computing)",
            duration: "Feb 2023 - Feb 2027"
        },
        {
            institutionLogo: "https://upload.wikimedia.org/wikipedia/en/e/eb/DAV_CMC_Logo.svg",
            institutionLogoAltText: "DAV CMC Logo",
            institution: "DAV Public School, Sijua",
            course: "Higher Secondary, Science",
            duration: "2017 - 2021"
        },
        {
            institutionLogo: "https://upload.wikimedia.org/wikipedia/en/e/eb/DAV_CMC_Logo.svg",
            institutionLogoAltText: "DAV CMC Logo",
            institution: "DAV Public School, Jamadoba",
            course: "KG - 8th",
            duration: "2007 - 2017"
        }
    ]
};

export default presentation;