import { FC, ReactNode } from "react";
import "./Banner.css";

interface BannerProps {
    type: string;
    title: string;
    subtitle: string;
    children: ReactNode;
}

const Banner: FC<BannerProps> = ({ type, title, subtitle, children }: BannerProps) => {
    return (
        <div className={`banner banner-${type}`}>
            <h1>{ title }</h1>
            <h2>{ subtitle }</h2>
            { children }
        </div>
    );
};

export default Banner;