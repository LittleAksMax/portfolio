import { FC} from "react";
import "../sectioning.css";

const About: FC = () => {
    return (
        <div id="about">
            <h1 id="title">Hi there, 👋 I'm David.</h1>
            <div className="sections">
                <div id="me" className="section">
                    <h3>Me</h3>
                    asdasd
                </div>
                <div id="skills" className="section">
                    <h3>Skills</h3>
                    asdasdsad
                </div>
                <div id="interests" className="section">
                    <h3>Interests</h3>
                    asdasdasd
                </div>
            </div>
        </div>
    );
};

export default About;