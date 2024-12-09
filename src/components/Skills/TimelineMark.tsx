import type {ReactNode} from "react";
import {IconContext, type IconType} from "react-icons";
export const TimelineMark = (props : { title: string, description: ReactNode, icons: ReactNode[] }) : ReactNode => {
    return (
        <div className="md:max-w-[20vw] flex flex-col items-start gap-5 font-poppins text-justify">
            <h1 className="text-3xl font-semibold text-left">
                {props.title}
            </h1>
            <div className="flex flex-row flex-wrap gap-2">
                <IconContext.Provider value={{ size: "40" }}>
                    {props.icons}
                </IconContext.Provider>
            </div>
            {props.description}
        </div>
    );
}