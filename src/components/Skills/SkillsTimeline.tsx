import { useEffect, useState, type ReactNode } from "react";
import { Timeline } from "@/components/ui/timeline.tsx";
import { TimelineMark } from "@/components/Skills/TimelineMark.tsx";
import {
    FaAndroid,
    FaAngular,
    FaAws,
    FaBootstrap,
    FaCss3,
    FaDocker,
    FaFlutter,
    FaGitAlt,
    FaGithub,
    FaGolang,
    FaHtml5,
    FaJava,
    FaJs,
    FaLinux,
    FaNodeJs,
    FaPhp,
    FaPython,
    FaReact,
    FaRust,
    FaSass,
    FaVuejs,
} from "react-icons/fa6";
import { DiDjango, DiMongodb, DiRedis } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { IoTerminal } from "react-icons/io5";
import { TbSql } from "react-icons/tb";
import {
    SiAcm,
    SiApachekafka,
    SiArduino,
    SiAstro,
    SiClojure,
    SiCoursera,
    SiCplusplus,
    SiCypress,
    SiDatadog,
    SiDeno,
    SiDotnet,
    SiExpress,
    SiJest,
    SiJsonwebtokens,
    SiJupyter,
    SiKubernetes,
    SiMqtt,
    SiNestjs,
    SiPassport,
    SiPug,
    SiRabbitmq,
    SiSailsdotjs,
    SiSocketdotio,
    SiSpring,
    SiSwagger,
    SiTypescript,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

type TimelineEntry = {
    title: string;
    content: React.ReactNode;
};

const timelineEntries: TimelineEntry[] = [
    {
        title: "July 2019",
        content: (
            <TimelineMark
                title="Journey started"
                description={
                    <p>
                        Starting in high-school, I take a free{" "}
                        <a
                            href="https://pll.harvard.edu/course/cs50-introduction-computer-science"
                            className="text-blue-600"
                            target="_blank"
                        >
                            CS50 bootcamp
                        </a>{" "}
                        and learn some web fundamentals with Python/Django included.
                    </p>
                }
                icons={[
                    <FaHtml5 />,
                    <FaCss3 />,
                    <FaPython />,
                    <FaJs />,
                    <DiDjango />,
                    <FaBootstrap />,
                ]}
            />
        ),
    },
    {
        title: "2020",
        content: (
            <TimelineMark
                title="A year of practice"
                description={
                    <p>
                        That year was more to practice what I learned in the Bootcamp and do
                        some new things in PHP and MySQL for a small personal project.
                    </p>
                }
                icons={[<FaPhp />, <GrMysql />, <TbSql />]}
            />
        ),
    },
    {
        title: "April 2021",
        content: (
            <TimelineMark
                title="C++ discover"
                description={
                    <p>
                        I took a course at{" "}
                        <a
                            href="https://www.sena.edu.co/es-co/Paginas/default.aspx"
                            target="_blank"
                            className="text-blue-600"
                        >
                            SENA
                        </a>{" "}
                        where I learned C++.
                    </p>
                }
                icons={[<SiCplusplus />]}
            />
        ),
    },
    {
        title: "May 2021",
        content: (
            <TimelineMark
                title="Start a course route at Platzi"
                description={
                    <p>
                        I started a learning path at{" "}
                        <a
                            href="https://platzi.com"
                            target="_blank"
                            className="text-blue-600"
                        >
                            Platzi
                        </a>{" "}
                        on backend development with JavaScript, learned GIT, went a little
                        deeper into the JavaScript base and started to get familiar with
                        terminal.
                    </p>
                }
                icons={[<FaGitAlt />, <FaGithub />, <IoTerminal />]}
            />
        ),
    },
    {
        title: "June 2021",
        content: (
            <TimelineMark
                title="Learn backend technologies"
                description={
                    <p>
                        I learned what NodeJS was and started experimenting with Express. I
                        learned caching with Redis, Authorization with Passport, I went
                        deeper into role-based permissions with JWT, NoSQL databases like
                        Mongo, communication protocols like HTTP/REST and WebSockets, used
                        TypeScript for the first time and did some first readings of
                        microservices as architecture.
                    </p>
                }
                icons={[
                    <FaNodeJs />,
                    <SiExpress />,
                    <SiJsonwebtokens />,
                    <DiRedis />,
                    <DiMongodb />,
                    <SiSocketdotio />,
                    <SiTypescript />,
                    <SiPassport />,
                ]}
            />
        ),
    },
    {
        title: "July 2021",
        content: (
            <TimelineMark
                title="Last high school vacations"
                description={
                    <p>
                        In July I learned the concept of Server Side Rendering with Pug
                        templates and took my first look at React and some tools for CSS
                        such as Sass or Tailwind.
                    </p>
                }
                icons={[<SiPug />, <FaReact />, <FaSass />, <RiTailwindCssFill />]}
            />
        ),
    },
    {
        title: "August 2021",
        content: (
            <TimelineMark
                title="IoT project"
                description={
                    <p>
                        In August I made an IoT platform as part of a course. In that
                        project did some basic views for metrics in Vue, learned the MQTT
                        protocol. Apart from the project I learned SailsJS as a framework.
                    </p>
                }
                icons={[<FaVuejs />, <SiMqtt />, <SiSailsdotjs />, <SiArduino />]}
            />
        ),
    },
    {
        title: "October 2021",
        content: (
            <TimelineMark
                title="Finishing my learn route at Platzi"
                description={
                    <p>
                        Until October that year was dedicated to finish in a good way my
                        learning path. As a final stretch in the path I learned to test my
                        projects starting with Jest and then with Cypress, I learned HapiJS
                        as an alternative, along with NestJS, I learned to document my APIs
                        with Swagger and to deploy my projects with deployment services.
                    </p>
                }
                icons={[<SiJest />, <SiCypress />, <SiNestjs />, <SiSwagger />]}
            />
        ),
    },
    {
        title: "2022",
        content: (
            <TimelineMark
                title="Start college"
                description={
                    <p>
                        The first semester of college I was admitted to a scholarship at
                        Oracle Next Education (
                        <a
                            href="https://www.oracle.com/co/education/oracle-next-education/"
                            target="_blank"
                            className="text-blue-600"
                        >
                            ONE
                        </a>
                        ) where I learned Java, deepened my knowledge in web development and
                        discovered Jupyter Notebooks and their use for data analytics with
                        Python and also got accepted in ACM chapter for competitive
                        programming group.
                    </p>
                }
                icons={[<FaJava />, <SiJupyter />, <SiAcm />]}
            />
        ),
    },
    {
        title: "2023",
        content: (
            <TimelineMark
                title="Cloud discover"
                description={
                    <p>
                        This year I was mainly focused on doing the AWS certification as a
                        Solutions Architect - Associate, thanks to the opportunity provided
                        by one of my professors at the university. During the year I learned
                        Go on my own, Spring boot as a framework, experimented with new
                        databases like PostgreSQL and discovered that there are other
                        runtimes for JavaScript, like Deno or Bun. Also I move to Linux OS
                        and learn Docker.
                    </p>
                }
                icons={[
                    <FaAws />,
                    <FaGolang />,
                    <SiSpring />,
                    <BiLogoPostgresql />,
                    <SiDeno />,
                    <FaLinux />,
                    <FaDocker />,
                ]}
            />
        ),
    },
    {
        title: "2024",
        content: (
            <TimelineMark
                title="Enterprise IT and Mobile"
                description={
                    <p>
                        This year I learned Angular, experimented with other libraries like
                        Astro and Elysia. I learned architectures and patterns formally
                        leading to learning .NET framework and Jakarta EE as frameworks for
                        enterprise development. I learned to develop native and hybrid
                        mobile applications using Android and Dart/Flutter and finally I
                        learn the concepts for distributed systems and use some
                        communication mechanisms such as gRPC or technologies such as
                        RabbitMQ and Kafka.
                    </p>
                }
                icons={[
                    <FaAngular />,
                    <SiAstro />,
                    <SiDotnet />,
                    <FaAndroid />,
                    <FaFlutter />,
                    <SiRabbitmq />,
                    <SiApachekafka />,
                ]}
            />
        ),
    },
    {
        title: "2025",
        content: (
            <TimelineMark
                title="Finishing my bachelor's degree"
                description={
                    <p>
                        This year was full of valuable experiences. I had the opportunity to
                        be part of the research group <strong>VCloud</strong>,
                        where I worked on a project that concluded with an open-source
                        contribution written in{" "}
                        <a href="https://go.dev/" target="_blank" className="text-blue-600">
                            Go
                        </a>
                        . Most importantly, I gained hands-on experience managing{" "}
                        <a
                            href="https://kubernetes.io/"
                            target="_blank"
                            className="text-blue-600"
                        >
                            Kubernetes
                        </a>{" "}
                        and a multi-node cluster. I also started using{" "}
                        <a
                            href="https://www.rust-lang.org/"
                            target="_blank"
                            className="text-blue-600"
                        >
                            Rust
                        </a>{" "}
                        for my personal projects and completed a specialization in{" "}
                        <a
                            href="https://www.coursera.org/"
                            target="_blank"
                            className="text-blue-600"
                        >
                            Algorithms and Data Structures on Coursera
                        </a>
                        , consisting of a collection of six courses. Additionally, I was
                        accepted into the{" "}
                        <a
                            href="https://epic.institute/"
                            target="_blank"
                            className="text-blue-600"
                        >
                            EPIC Institute of Technology
                        </a>
                        , where I am continuing to deepen my knowledge in algorithms,
                        mathematics, compilers, data science, and AI. 
                    </p>
                }
                icons={[
                    <FaRust />,
                    <SiKubernetes />,
                    <SiClojure />,
                    <SiDatadog />,
                    <SiCoursera />,
                ]}
            />
        ),
    },
    {
        title: "Now",
        content: (
            <TimelineMark
                title=""
                description={<p>Looking for new things and technologies!</p>}
                icons={[]}
            />
        ),
    },
];

export const SkillsTimeline = (): ReactNode => {
    return (
        <div>
            <Timeline data={timelineEntries}>
                <div>
                    <h2 className="font-poppins text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                        Timeline of my journey
                    </h2>
                    <p className="font-poppins text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                        Here are some dates where I discover or used some technology in some
                        projects.
                    </p>
                </div>
            </Timeline>
            <div className="mt-[50vh]"></div>
        </div>
    );
};
