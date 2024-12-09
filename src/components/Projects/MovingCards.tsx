import type {ReactNode} from "react";
import  {InfiniteMovingCards, type MovingCardEntry} from "../ui/infinite-moving-cards";
import {FaAws, FaNodeJs, FaReact, FaVuejs} from "react-icons/fa6";
import {SiCypress, SiJsonwebtokens, SiMqtt, SiOracle, SiSqlite} from "react-icons/si";
import {DiMongodb} from "react-icons/di";
const testimonials : MovingCardEntry[] = [
    {
        title: 'JavePlatform',
        description: 'A platform for students to share their common subject materials and files.',
        ghUrl: '/StudentPlatformClient',
        icons: [
            <FaAws />,
            <FaReact />,
            <SiCypress />,
            <FaNodeJs />
        ],
        href: 'https://github.com/TalkySafe143/StudentPlatformClient'
    },
    {
        title: 'IoT platform',
        description: 'A platform for catch and plot arduino metrics.',
        ghUrl: '/iot-platzi',
        icons: [
            <FaVuejs />,
            <SiMqtt />,
            <SiSqlite />,
            <SiJsonwebtokens />,
            <FaNodeJs />
        ],
        href: 'https://github.com/TalkySafe143/iot-platzi'
    },
    {
        title: 'GBIF Proposed model',
        description: 'A platform that implements a conceptual model proposed by GBIF to camera captures.',
        ghUrl: '/GBIF-API-BDD',
        icons: [
            <SiOracle />,
            <FaReact />,
            <FaNodeJs />,
            <SiJsonwebtokens />,
            <DiMongodb />
        ],
        href: 'https://github.com/TalkySafe143/GBIF-API-BDD'
    },
];

export default function MovingCards() : ReactNode {
    return (
        <div>
            <InfiniteMovingCards
                items={testimonials}
                className="w-full max-w-5xl m-auto"
                speed="normal"
            />
        </div>
    );
}