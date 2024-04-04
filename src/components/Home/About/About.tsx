import { FC } from "react";
import "./About.css";
import WhoAmIFrame from "./ImageFrames/WhoAmIFrame";

const About: FC = () => {
    // TODO: actual images
    // TODO: add course link.
    // TODO: change website icon to <DR /> (blue/white)
    return (
        <div id="about">
            <div id="me" className="about-section odd-section">
                <div className="about-section-content">
                    <div className="about-image-frame-container">
                        <WhoAmIFrame />
                    </div>
                    <div className="about-text">
                        <h2 className="about-section-heading">Who am I</h2>
                        <p>Hello, I'm <b>David Rosental</b>, a British-Hungarian computer science student at the <b>University of Warwick</b>. I am in my <b>first year</b> of my 4 year <a href=""><b>MEng</b></a> course.</p>

                    </div>
                </div>
            </div>
            <div id="interests" className="about-section even-section">
                <div className="about-section-content">
                    <div className="about-text">
                        <h2 className="about-section-heading">Always a student 📚</h2>
                        <p>I always seek to learn about new technologies and improve my breadth and quality of my software engineering skills.</p>
                        <p>Outside of my regular university studies, I am looking into <b>microservices</b>, <b>cloud computing</b> and <b>container orchestration</b>.</p>
                    </div>
                    <div className="about-image-frame-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta scelerisque eros, ac pharetra tellus ultricies tincidunt. Phasellus ornare iaculis quam, consequat malesuada felis lacinia sit amet. Pellentesque a fermentum arcu, sit amet efficitur augue. Aliquam rutrum dolor nec augue faucibus condimentum. Integer sed turpis malesuada, iaculis lectus in, porttitor eros. In vel dictum nisi. Duis vestibulum dictum congue. Nulla at velit et lectus vulputate consectetur. Etiam volutpat molestie mi, nec tempus erat facilisis ut. Nulla facilisi. Suspendisse eu elementum nulla, vel consequat ex.</p>
                    </div>
                </div>
            </div>
            <div id="skills" className="about-section odd-section">
                <div className="about-section-content">
                    <div className="about-image-frame-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta scelerisque eros, ac pharetra tellus ultricies tincidunt. Phasellus ornare iaculis quam, consequat malesuada felis lacinia sit amet. Pellentesque a fermentum arcu, sit amet efficitur augue. Aliquam rutrum dolor nec augue faucibus condimentum. Integer sed turpis malesuada, iaculis lectus in, porttitor eros. In vel dictum nisi. Duis vestibulum dictum congue. Nulla at velit et lectus vulputate consectetur. Etiam volutpat molestie mi, nec tempus erat facilisis ut. Nulla facilisi. Suspendisse eu elementum nulla, vel consequat ex.</p>    
                    </div>
                    <div className="about-text">
                        <h2 className="about-section-heading">In my toolbox 🔧</h2>
                        <p><u>Languages I speak:</u> <b>Python</b> (<i>advanced</i>), <b>Java</b> (<i>intermediate</i>), <b>C#</b> (<i>intermediate</i>), <b>Javascript/Typescript</b> (<i>intermediate</i>), <b>C</b>/<b>C++</b> (<i>beginner</i>), <b>HTML</b>/<b>CSS</b>/<b>JS</b> (<i>beginner</i>)</p>
                        <p><u>Frameworks I'm familiar with:</u> <b>ASP.NET Core</b> (<i>intermediate</i>), <b>ReactJS</b> (<i>beginner</i>), <b>Flask</b> (<i>beginner</i>), <b>jQuery</b> (<i>beginner</i>)</p>
                        <p><u>Databases I can use:</u> <b>MariaDB</b>/<b>MySQL</b> (<i>intermediate</i>), <b>MongoDB</b> (<i>beginner</i>), <b>PostgreSQL</b> (<i>beginner</i>)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;