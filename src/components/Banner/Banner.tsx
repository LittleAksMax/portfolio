import { FC, ReactNode, Children } from "react";
import "./Banner.css";
import logging from "../../logging";

interface BannerProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
}

const Banner: FC<BannerProps> = ({ title, subtitle, children }: BannerProps) => {
    // this just asserts that there are exactly two children
    const childArray = Children.toArray(children);
    logging.debug("Banner", "Children:", children);

    return (
        <div className="banner">
            <h1>{ title }</h1>
            <h2>{ subtitle }</h2>
            <div className="banner-container">
                {/* Only map the first and last URL in the array to ensure there are at most 2 */}
                { childArray.map((child, idx) =>
                    (idx === 0 || idx === childArray.length - 1) ? child : null
                )}
            </div>
        </div>
    );
};

export default Banner;