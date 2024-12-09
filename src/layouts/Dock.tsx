import HomeIcon from '@/assets/homeIcon.svg'
import ProfileIcon from '@/assets/profileIcon.svg'
import ProjectsIcon from '@/assets/projectsIcon.svg'
import TechsIcon from '@/assets/linux.svg'
import ContactIcon from '@/assets/contact.svg'
import { FloatingDock } from "@/components/ui/floating-dock";
import {Image} from "astro:assets";

export function Dock() {
    const sz = 1000;
    const links = [
        {
            title: "Home",
            icon: (
                <img
                    src={HomeIcon.src}
                    width={sz}
                    height={sz}
                    alt="Home Logo"
                />
            ),
            href: "/",
        },{
            title: "About me",
            icon: (
                <img
                    src={ProfileIcon.src}
                    width={sz}
                    height={sz}
                    alt="Profile Logo"
                />
            ),
            href: "/about",
        },
        {
            title: "Projects",
            icon: (
                <img
                    src={ProjectsIcon.src}
                    width={sz}
                    height={sz}
                    alt="Projects Logo"
                />
            ),
            href: "/projects",
        },
        {
            title: "Technologies",
            icon: (
                <img
                    src={TechsIcon.src}
                    width={sz}
                    height={sz}
                    alt="Linux Logo"
                />
            ),
            href: "/skills",
        },
        {
            title: "Contact",
            icon: (
                <img
                    src={ContactIcon.src}
                    width={sz}
                    height={sz}
                    alt="Contact Logo"
                />
            ),
            href: "/contact",
        }
    ];
    return (
        <div className="fixed bottom-0 md:m-10 mb-5 z-20">
            <FloatingDock
                items={links}
            />
        </div>
    );
}
