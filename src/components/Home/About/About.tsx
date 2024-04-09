import { FC } from "react";
import "./About.css";
import WhoAmIFrame from "./ImageFrames/WhoAmIFrame";

const About: FC = () => {
    // TODO: actual images
    return (
        <div id="about">
            <div id="me" className="about-section odd-section">
                <div className="about-section-content">
                    <div className="about-frame-container">
                        <WhoAmIFrame />
                    </div>
                    <div className="about-text">
                        <h2 className="about-section-heading">Who I am</h2>
                        <p>Hello, I'm <b>David Rosental</b>, a computer science student at the <b>University of Warwick</b>. I am in my 1st year of my <a href="https://warwick.ac.uk/fac/sci/dcs/teaching/courses/"><b>4 year MEng course</b></a>.</p>
                    </div>
                </div>
            </div>
            <div id="interests" className="about-section even-section">
                <div className="about-section-content">
                    <div className="about-text">
                        <p>I always seek to learn about new technologies and improve my breadth and quality of my software engineering skills.</p>
                        <p>Outside of my regular university studies, I am looking into <b>microservices</b> and <b>cloud computing</b> (AWS), <b>containerisation</b> (Docker) and <b>CI/CD</b> (GitHub actions).</p>
                    </div>
                    <div className="about-frame-container">
                        <h2 className="about-section-heading">Passions and Interests</h2>
                    </div>
                </div>
            </div>
            <div id="skills" className="about-section odd-section">
                <div className="about-section-content">
                    <div className="about-frame-container">
                        <h2 className="about-section-heading">In my Toolbox</h2>                        
                    </div>
                    <div className="about-text">
                        <p><u>Languages:</u> <b>Python</b> (<i>intermediate</i>), <b>Java</b> (<i>intermediate</i>), <b>C#</b> (<i>intermediate</i>), <b>Javascript/Typescript</b> (<i>intermediate</i>), <b>C</b>/<b>C++</b> (<i>beginner</i>), <b>HTML</b>/<b>CSS</b>/<b>JS</b> (<i>beginner</i>)</p>
                        <p><u>Frameworks:</u> <b>ASP.NET Core</b> (<i>intermediate</i>), <b>ReactJS</b> (<i>beginner</i>), <b>Flask</b> (<i>beginner</i>), <b>jQuery</b> (<i>beginner</i>)</p>
                        <p><u>Databases:</u> <b>MariaDB</b>/<b>MySQL</b> (<i>intermediate</i>), <b>MongoDB</b> (<i>beginner</i>), <b>PostgreSQL</b> (<i>beginner</i>)</p>
                        <p><u>Platforms:</u> <b>AWS</b> (IAM, Lambda, EC2, ECR, Secrets Manager) (<i>beginner</i>), <b>Firebase</b> (<i>minimal</i>)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;