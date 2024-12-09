import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import React, {type ReactElement, type ReactNode} from "react";

export const HeroParallax = ({
  cards, header
}: {
  cards: ReactNode[];
  header: ReactNode
}) => {
  const firstRow = cards.slice(0, cards.length/2);
  const secondRow = cards.slice(cards.length/2, cards.length);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
      useTransform(scrollYProgress, [0, 1], [0, 1000]),
      springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      {header}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row md:space-x justify-center items-center lg:space-x-20 lg:mb-20 flex-wrap">
          {firstRow.map((card, i) => (
            <HeroWelcomeCard
                index={i}
              translate={translateX}
              card={card}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row justify-center items-center  lg:mb-20 lg:space-x-20 flex-wrap">
          {secondRow.map((card, i) => (
            <HeroWelcomeCard
              translate={translateXReverse}
              card={card}
              index={i+firstRow.length}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};


export const HeroWelcomeCard = ({
  card,
  translate,
    index
}: {
  card : ReactNode;
  translate: MotionValue<number>;
  index: number;
}) => {
  return (
    <div
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
      key={index}
    >
      {card}
    </div>
  );
};
