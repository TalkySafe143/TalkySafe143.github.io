import { StickyScroll } from "../ui/sticky-scroll-reveal";
import {AnimatePresence, motion} from 'framer-motion'
import Me2 from '@/assets/me2.jpeg'
import Javeriana from '@/assets/Javeriana.svg'
import ICPC from '@/assets/ICPC.jpg'
import ACM from '@/assets/ACM.svg'

const content = [
    {
        title: "General info",
        description:
            "Hi! I'm Sebastian Galindo, a systems engineering student passionate about learning and exploring the" +
            " world" +
            " of technology. Outside of academics, I enjoy gaming, hang out with my friends and exploring new tech" +
            " tools.",
        content: (
                <motion.div
                    initial={{opacity: 0, x: "-1vw"}}
                    animate={{opacity: 1, x: 0 }}
                    transition={{duration: 0.5}}
                    className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white"

                >
                    <img
                        src={Me2.src}
                        alt="My pic"
                        className="h-full w-full object-cover"
                    />
                </motion.div>
        ),
    },
    {
        title: "Academic history",
        description:
            (<p>
                I'm currently attending at Pontificia Universidad Javeriana with expected graduation year in 2026.
                I like taking online courses too, some of them are:
                <a target="_blank" className="text-blue-600" href='https://cp.certmetrics.com/amazon/en/public/verify/credential/RKR3F7BLYME1Q75K'> AWS Solutions Architect</a> at AWS
                , <a target="_blank" className="text-blue-600" href='https://coursera.org/share/680c8d015686521fffdf6a976f5e9ab6'>Data Structures and Algorithms Specialization</a> at Coursera,
                <a target="_blank" className="text-blue-600" href='https://platzi.com/p/talkysafe143/ruta/55-backend-javascript/diploma/detalle/'> JavaScript Backend Development Route</a> at Platzi, among others.
            </p>),
        content: (
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{opacity: 0, x: "-1vw"}}
                        animate={{opacity: 1, x: 0 }}
                        transition={{duration: 0.5}}
                        className="h-full w-full flex items-center justify-center text-white"

                    >
                        <img
                            src={Javeriana.src}
                            alt="My pic"
                            height="2"
                            className="h-full w-full "
                        />
                    </motion.div>
                </AnimatePresence>
                ),
    },
    {
        title: "ICPC and competitions related",
        description:
            (
                <p>
                    I’m passionate about competitive programming and proud to have ranked in the Top 100 LATAM and Top 10 in the North region during the last
                    <a target="_blank" href='https://icpc.global/ICPCID/OZBCLYZ0S97M' className="text-blue-600"> ICPC</a> regionals. I actively participate in
                    <a target="_blank" href='https://livejaverianaedu-my.sharepoint.com/:i:/g/personal/sfelipe_galindor_javeriana_edu_co/ETlMHhXkBPdDqqdyBzKOf9kBAdw24DyvT44gTKhiqkDZYA?e=cHWsLJ' className="text-blue-600"> local </a>
                     contests and regularly compete in the RPC monthly competitions, constantly challenging myself to solve complex problems and improve my skills.
                </p>
            ),
        content: (
            <motion.div
                initial={{opacity: 0, x: "-1vw"}}
                animate={{opacity: 1, x: 0 }}
                transition={{duration: 0.5}}
                className="h-full w-full flex items-center justify-center text-white"
            >
                <img
                    src={ICPC.src}
                    alt="My pic"
                    height="2"
                    className="h-full w-full object-cover"
                />
            </motion.div>
        ),
    },
    {
        title: "ACM Chapter activities",
        description:
            (
                <p>
                    As the Chair of my university’s ACM Chapter this year, I’ve had the privilege of leading initiatives like the
                    <a target="_blank" href='https://drive.google.com/drive/folders/1SvncPDKakCKyowtw8g5RHJkW8DTNHGgn?usp=drive_link' className="text-blue-600"> Competitive Programming team </a>
                    and JavaScript courses. I also organized the <a target="_blank" href='https://codeforces.com/group/Trc5VP0HgJ' className="text-blue-600"> ACM National Competition </a> (<a  target="_blank" href="https://maratonacm.top/" className="text-blue-600">website</a>),
                    bringing together 40 talented students from across the country. Beyond that, I enjoy teaching school-level courses, sharing my knowledge, and inspiring others in the tech community.
                </p>
            ),
        content: (
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{opacity: 0, x: "-1vw"}}
                    animate={{opacity: 1, x: 0 }}
                    transition={{duration: 0.5}}
                    className="h-full w-full flex items-center justify-center text-white"

                >
                    <img
                        src={ACM.src}
                        alt="My pic"
                        className="h-full w-full object-contain"
                    />
                </motion.div>
            </AnimatePresence>
        ),
    },
];

export function StickyScrollAbout() {
    return (
        <div className="p-10">
            <StickyScroll content={content}/>
        </div>
    );
}
