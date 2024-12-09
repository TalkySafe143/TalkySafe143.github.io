import { DirectionAwareHover } from "../ui/direction-aware-hover";
import type {ReactNode} from "react";

type WelcomeCardProps = {
    imageUrl: string,
    children: ReactNode,
    href: string,
    imageClassName?: string
}

export function WelcomeCard(props: WelcomeCardProps) {
    return (
        <a href={props.href}>
            <div className="h-[40rem] relative  flex items-center justify-center">
                <DirectionAwareHover imageUrl={props.imageUrl} imageClassName={props.imageClassName}>
                    {props.children}
                </DirectionAwareHover>
            </div>
        </a>
    );
}
