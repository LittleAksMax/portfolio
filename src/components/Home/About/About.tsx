import { FC } from "react";
import "./About.css";

const About: FC = () => {
    return (
        <div id="about">
            <div className="grid">
                <div id="picture" className="tile">
                </div>
                <div id="me" className="tile">
                    <h2 id="title">Hi there, 👋 I'm David.</h2>
                    <p>I'm a British-Hungarian (🇬🇧-🇭🇺) Computer Science student at the University of Warwick.</p>
                    <p>I started university in 2023 (which makes me a first year).</p>

                    <ul id="socials">
                        <li>GitHub: <a href="https://github.com/LittleAksMax">https://github.com/LittleAksMax</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/david-rosental">https://www.linkedin.com/in/david-rosental</a></li>
                        <li>Blog: <a href="https://blog.davidrosental.co.uk">https://blog.davidrosental.co.uk</a> (Coming Soon!)</li>
                    </ul>
                </div>
                <div id="skills" className="tile">
                    <h2>Skills 🖥️</h2>
                    
                    <ul>
                        <li></li> 
                    </ul>
                </div>
                <div id="interests" className="tile">
                    <h2>Interests 🌟</h2>
                    <ul>
                        <li>💡 Problem Solving</li>
                        <li>☁️ Cloud</li>
                        <li>💻 Software Engineering</li>
                        <li>🥊 Boxing</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;