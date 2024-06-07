import { FC } from "react";
import "./Footer.css";

const Footer: FC = () => {
    return (
        <div id="footer">
            <div className="footer-container">
                <div className="footer-link-column">
                    <div className="footer-link-column-heading">
                        <span className="footer-link-column-title">Contacts</span>
                    </div>
                    <span className="footer-link">
                        <a href="mailto:david2005.rosental.work@gmail.com">Email me</a>
                    </span>
                    <span className="footer-link">
                        <a href="https://www.linkedin.com/in/david-rosental/">LinkedIn</a>
                    </span>
                    <span className="footer-link">
                        <a href="https://www.github.com/LittleAksMax/">GitHub</a>
                    </span>
                    <span className="footer-link">
                        <a href="https://blog.davidrosental.co.uk/">Blog</a>
                    </span>
                </div>
                <div className="footer-link-column">
                    <div className="footer-link-column-heading">
                        <span className="footer-link-column-title">General Navigation</span>
                    </div>
                    <span className="footer-link">
                        <a href="/">Home</a>
                    </span>
                    <span className="footer-link">
                        <a href="/projects">Projects</a>
                    </span>
                    <span className="footer-link">
                        <a href="/experiences">Experiences</a>
                    </span>
                </div>
                <div className="footer-link-column">
                    <div className="footer-link-column-heading">
                        <span className="footer-link-column-title">Notable Projects</span>
                    </div>
                    <span className="footer-link">
                        <a href="/dev/projects/portfolio">Personal Portfolio</a>
                    </span>
                    <span className="footer-link">
                        <a href="https://blog.davidrosental.co.uk/">Blog</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;