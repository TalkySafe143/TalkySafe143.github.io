import { HeroParallax } from "../ui/hero-parallax";
import {WelcomeCard} from "@/components/WelcomePage/WelcomeCard.tsx";
import {TypewriterEffect} from "@/components/ui/typewriter-effect.tsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {Children, type ReactElement, type ReactNode, useEffect} from "react";
const typeWriterClassName : string = "font-poppins md:text-4xl text-xl font-semibold"
import Logo from '@/assets/astro.svg'
import MyPic1 from '@/assets/me1.jpeg'
import Contact3D from '@/assets/social-media.svg'
import Tech from '@/assets/Tech.svg'
import Projects from '@/assets/projects.svg'

export type WelcomeCardInfo = {
    imageUrl: string,
    href: string,
    cardTitle: string,
    cardDescription: string,
    imageClassName?: string
}

const info : WelcomeCardInfo[] = [
    {
        imageUrl: MyPic1.src,
        href: '/about',
        cardTitle: "About me",
        cardDescription: "Some information about me and my activities.",
    },
    {
        imageUrl: Projects.src,
        href: '/projects',
        cardTitle: "Projects",
        cardDescription: "Some of my programming projects.",
        imageClassName: "scale-[0.6]"
    },
    {
        imageUrl: Tech.src,
        href: '/skills',
        cardTitle: "Tech stack",
        cardDescription: "A timeline with some of my tech skills.",
        imageClassName: "scale-[0.7]"
    },
    {
        imageUrl: Contact3D.src,
        href: '/contact',
        cardTitle: "Contact me",
        cardDescription: "Find out how to contact me.",
        imageClassName: "scale-[0.6]"
    },
];
export function HeroWelcome() {
    useEffect(() => {
        toast.warning("You have a floating dock in the left-bottom side.", {
            bodyClassName: "font-poppins"
        })
    }, []);

    return (
        <div>
            <HeroParallax cards={
                info.map((inf, i) => {
                    return (
                        <WelcomeCard key={i} imageUrl={inf.imageUrl} href={inf.href} imageClassName={inf.imageClassName}>
                        <div key={i}>
                            <p className="font-bold text-xl">{inf.cardTitle}</p>
                            <p className="font-normal text-sm">{inf.cardDescription}</p>
                        </div>
                    </WelcomeCard>);
                })
            } header={
                <div className="max-w-7xl  relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
                    <h1 className="text-2xl md:text-7xl font-bold dark:text-white font-poppins text-center">
                        Sebastian Galindo
                    </h1>
                    <TypewriterEffect words={
                        "Systems engineering student.".split(" ").map(w => {
                            return {
                                text: w,
                                className: typeWriterClassName + (w == "student." ? " text-blue-700" : "")
                            }
                        })
                    } />
                </div>
            }/>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}