import { FC } from "react";
import "./StackedImages.css";

interface StackedImagesProps {
    subject: string;
    srcs: string[];
}

const StackedImages: FC<StackedImagesProps> = ({ subject, srcs }: StackedImagesProps) => {
    return (
        <div className="demo-image-container">
            {srcs.map(src => (
                <img
                    className="demo-image"
                    src={src}
                    alt={`Demo of ${subject}`}
                />
            ))}
        </div>
    );
};

export default StackedImages;