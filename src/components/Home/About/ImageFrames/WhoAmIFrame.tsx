import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./WhoAmIFrame.css";

const WhoAmIFrame: FC = () => (
    <div className="profile-card">
        <div className="profile-card-image">
            <img
                className="profile-card-image"
                src="/me.jpeg"
                alt="Me"
            />
        </div>
        <div className="profile-card-content">
            <div className="profile-card-email-container">
                <i className="profile-card-email">david2005.rosental.work@gmail.com</i>
            </div>
            <div className="link-icon-container">
                <a className="social-link" href="https://www.linkedin.com/in/david-rosental/"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#0A66C2" /></a>
                <a className="social-link" href="https://github.com/LittleAksMax"><FontAwesomeIcon icon={faGithub} size="2x" color="black" /></a>
            </div>
        </div>
    </div>
);

export default WhoAmIFrame;