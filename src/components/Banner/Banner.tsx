import { FC, ReactNode } from "react";
import "./Banner.css";

interface BannerProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
}

const Banner: FC<BannerProps> = ({ title, subtitle, children }: BannerProps) => {
    return (
        <div className="banner">
            <h1>{ title }</h1>
            <h2>{ subtitle }</h2>
            { children }
        </div>
    );
};

export default Banner;