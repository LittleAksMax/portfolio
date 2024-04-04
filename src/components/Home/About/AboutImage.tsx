import { FC, ReactNode } from "react";
import "./AboutImageFrame.css";

interface AboutImageFrameProps {
    src: string;
    alt: string;
    children?: ReactNode;
}

const AboutImageFrame: FC<AboutImageFrameProps> = ({ src, alt, children }: AboutImageFrameProps) => {
    // TODO: replace placeholder image with { src }
    return (
        <div className="about-image-frame">
            <img className="framed-image" src="aubergine_master_logo_for_digital_png.png" alt={ alt } />
            { children }
        </div>
    )
};

export default AboutImageFrame;