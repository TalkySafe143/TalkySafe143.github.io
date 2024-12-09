import type {ReactNode} from "react";
import {AnimatedTooltip, type ToolTipArg} from "@/components/ui/animated-tooltip.tsx";

export const MediaBar = (props: { items: ToolTipArg[] }) : ReactNode => {
    return (
        <div className="mt-32 flex flex-row justify-center items-center flex-wrap w-full">
            <AnimatedTooltip items={props.items} />
        </div>
    );
}