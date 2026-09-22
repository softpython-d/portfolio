"use client";

import { createContext, useContext } from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin, IoLogoVercel } from "react-icons/io5";
import { SiNextdotjs, SiSass, SiExpress } from "react-icons/si";
import { BsTypescript } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IconType } from "react-icons"


interface GinfoProp {
    name: string,
    email: string,
    availability: string,
    para1: string,
    para2: string,
    contact: string
}

interface SocialLinkProp {
    link: string;
    icon: IconType;
    color: string;
}

interface SocialLinkParentProp {
    github: SocialLinkProp,
    linkedin: SocialLinkProp
}

interface Tech {
    icon: IconType;
    name: string;
    color: string;
}

interface TechStackProp {
    frontend: Tech[];
    backend: Tech[];
    tools: Tech[];
}

interface UserContextProp {
    Ginfo: GinfoProp;
    SocialLinks: SocialLinkParentProp;
    techStack: TechStackProp;
    Projects: ProjectProp
}


interface UserProjects {
    img: number,
    title: string,
    type: string,
    GitHub: string,
    web: string,
}

interface ProjectProp {
    Project: UserProjects[]
}

const UserContext = createContext<UserContextProp | null>(null);


const UserContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const Ginfo = {
        name: "Nikhil Jadoun",
        email: "aimarketer777@gmail.com",
        availability: "Freelance / full week",
        para1: "A Full-Stack Web Developer who turns ideas into modern, functional, and engaging digital experiences.",
        para2: "I’m a B.tech AI ML student, currently exploring the world of web development, building real projects, and constantly learning new technologies. I enjoy solving problems, writing clean code and creating experience that make a difference",
        contact: "7037573827"
    };

    const SocialLinks = {
        

        github: {
            link: "https://github.com/softpython-d",
            icon: FaSquareGithub,
            color: "black",
        },

        linkedin: {
            link: "https://www.linkedin.com/in/nikhil-jadaun-bb9633399?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            icon: IoLogoLinkedin,
            color: "#0A66C2",
        },
    };

    const techStack: TechStackProp = {
        frontend: [
            {
                icon: SiNextdotjs,
                name: "Next.js",
                color: "#000000",
            },
            {
                icon: BsTypescript,
                name: "TypeScript",
                color: "#3178C6",
            },
            {
                icon: SiSass,
                name: "Sass",
                color: "#CC6699",
            },
        ],

        backend: [
            {
                icon: DiMongodb,
                name: "MongoDB",
                color: "#47A248",
            },
            {
                icon: SiExpress,
                name: "Express.js",
                color: "#000000",
            },
            {
                icon: FaNodeJs,
                name: "Node.js",
                color: "#339933",
            },
        ],

        tools: [
            {
                icon: FaGitAlt,
                name: "Git",
                color: "#F05032",
            },
            {
                icon: FaSquareGithub,
                name: "GitHub",
                color: "black",
            },
            {
                icon: VscVscode,
                name: "VS Code",
                color: "#007ACC",
            },
            {
                icon: IoLogoVercel,
                name: "Vercel",
                color: "white",
            },
        ],
    };

    const Projects: ProjectProp = {
        Project: [
            {
                img: 1,
                title: "Cocktail",
                type: "Landing Page",
                GitHub: "https://github.com/softpython-d/cocktails",
                web: "https://cocktails-henna.vercel.app/"
            },
            {
                img: 2,
                title: "Fizzi",
                type: "Landing Page",
                GitHub: "https://github.com/softpython-d/fizzi",
                web: "https://fizzi-pi.vercel.app/"
            },
            {
                img: 3,
                title: "BrijKart",
                type: "E-commerce",
                GitHub: "https://github.com/softpython-d/brijkart",
                web: "https://brij-kart.vercel.app/store/shop"
            },
            {
                img: 4,
                title: "News Hub",
                type: "under development",
                GitHub: "https://github.com/softpython-d/newshub",
                web: "https://news-eosin-iota.vercel.app/"
            }
        ]
    };


    return (
        <UserContext.Provider value={{ Ginfo, SocialLinks, techStack, Projects }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser must be used inside UserContextProvider");
    }

    return context;
};

export default useUser;
export { UserContextProvider };