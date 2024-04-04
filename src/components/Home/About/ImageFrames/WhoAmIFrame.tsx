import { FC } from "react";
import AboutImageFrame from "./AboutImageFrame";

const WhoAmIFrame: FC = () => (
    // TODO: circular icons and shit yk
    <AboutImageFrame src="" alt="">
        <div id="contact-container">
            <i id="email">david2005.rosental.work@gmail.com</i>
        </div>
        <div id="link-icon-container">
            <a href="">LinkedIn</a>
            <a href="">GitHub</a>
        </div>
    </AboutImageFrame>
);

export default WhoAmIFrame;