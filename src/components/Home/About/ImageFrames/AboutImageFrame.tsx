import { FC, ReactNode } from "react";
import "./AboutImageFrame.css";

interface AboutImageFrameProps {
    src: string;
    alt: string;
    children?: ReactNode;
}

const AboutImageFrame: FC<AboutImageFrameProps> = ({ src, alt, children }: AboutImageFrameProps) => {
    return (
        <div className="about-image-frame">
            <img className="framed-image" src={ src } alt={ alt } />
            { children }
        </div>
    )
};

export default AboutImageFrame;