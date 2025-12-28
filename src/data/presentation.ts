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

export interface ClientExperience {
    logo: string;
    company: string;
    role: string;
    tech: string;
    highlights: string[];
}

export interface WorkExperience {
    parent: {
        logo: string;
        company: string;
        role: string;
        duration: string;
    };
    clients: ClientExperience[];
}

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


export const workExperience: WorkExperience[] = [
    {
        parent: {
            logo: "https://cdn.brandfetch.io/id8i2DmKRE/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
            company: "HCLTech",
            role: "Software Engineer",
            duration: "Dec 2022 - Present",
        },
        clients: [
            {
                logo: "https://cdn.brandfetch.io/idjS8d0kEI/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
                company: "Team Global Express",
                role: "Support Analyst / Developer",
                tech: "Java, JSP, SSRS, SQL Server",
                highlights: [
                    "Handled and resolved production incidents for a client-facing application, ensuring minimal downtime and quick issue resolution.",
						"Contributed to a JSP-based project by addressing and remediating critical security vulnerabilities.",
						"Implemented new features in a JSP application based on evolving client requirements.",
						"Developed and optimized stored procedures for SSRS (SQL Server Reporting Services) reports, and contributed to the design and development of several reports.",
						"Wrote efficient archival queries to maintain database performance and ensure there was no degradation in response times for critical tables.",
                ],
            },
        ],
    },
    
];

export default presentation;