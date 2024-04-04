import { FC } from "react";
import "./About.css";

const About: FC = () => {
    // TODO: actual images
    return (
        <div id="about">
            <div id="me" className="about-section odd-section">
                <div className="about-section-content">
                    <div className="about-image-frame-container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta scelerisque eros, ac pharetra tellus ultricies tincidunt. Phasellus ornare iaculis quam, consequat malesuada felis lacinia sit amet. Pellentesque a fermentum arcu, sit amet efficitur augue. Aliquam rutrum dolor nec augue faucibus condimentum. Integer sed turpis malesuada, iaculis lectus in, porttitor eros. In vel dictum nisi. Duis vestibulum dictum congue. Nulla at velit et lectus vulputate consectetur. Etiam volutpat molestie mi, nec tempus erat facilisis ut. Nulla facilisi. Suspendisse eu elementum nulla, vel consequat ex.</p>
                    </div>
                    <div className="about-text">
                        <h2 className="about-section-heading">Who am I</h2>
                        <p>Stuff</p>
                    </div>
                </div>
            </div>
            <div id="interests" className="about-section even-section">
                <div className="about-section-content">
                    <div className="about-text">
                        <h2 className="about-section-heading">Always a student 📚</h2>
                        <p>I always seek to learn about new technologies.</p>
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
                        <p>Stuff</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;