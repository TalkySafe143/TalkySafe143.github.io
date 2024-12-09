import { cn } from "@/lib/utils";
import React, {type ReactNode, useEffect, useState} from "react";
import {PinContainer} from "@/components/ui/3d-pin.tsx";
import {IconContext} from "react-icons";

export type MovingCardEntry = {
  icons: ReactNode[];
  description: string;
  title: string;
  ghUrl: string;
  href: string;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: MovingCardEntry[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      /*scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          // scrollerRef.current.innerHTML += duplicatedItem.textContent;
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });*/

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  const onMouseEnter = (cb : Function) => {
    return () => {
      cb("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    }
  };
  const onMouseLeave = (cb : Function) => {
    return () => cb("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex justify-center items-center min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={idx}>
            <PinContainer
                key={idx}
                title={item.ghUrl}
                href={item.href}
                containerClassName="w-full"
                onMouseLeave={onMouseLeave}
                onMouseEnter={onMouseEnter}
            >
              <div className="text-center flex gap-5 flex-col justify-center items-center font-poppins text-white p-5">
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <p className="text-justify">{item.description}</p>
                <div className="flex flex-row flex-wrap gap-2">
                  <IconContext.Provider value={{size: "40"}}>
                    {item.icons}
                  </IconContext.Provider>
                </div>
              </div>
            </PinContainer>
          </li>
        ))}
        {items.map((item, idx) => (
            <li key={idx}>
              <PinContainer
                  key={idx}
                  title={item.ghUrl}
                  href="https://google.com"
                  containerClassName="w-full"
                  onMouseLeave={onMouseLeave}
                  onMouseEnter={onMouseEnter}
              >
                <div className="text-center flex gap-5 flex-col justify-center items-center font-poppins text-white p-5">
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="text-justify">{item.description}</p>
                  <div className="flex flex-row flex-wrap gap-2">
                    <IconContext.Provider value={{size: "40"}}>
                      {item.icons}
                    </IconContext.Provider>
                  </div>
                </div>
              </PinContainer>
            </li>
        ))}
      </ul>
    </div>
  );
};
