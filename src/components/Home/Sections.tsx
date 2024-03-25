import { FC} from "react";
import { ProjectType } from "../../types";
import './Sections.css';

const Sections: FC = () => {
    return (
        <div id="sections">
            <div id="experiences" className="section">
                <a href={`/${ProjectType.Experiences}`}>
                    <h1>Work Experiences</h1>
                </a>
            </div>
            <div id="projects" className="section">
                <a href={`/${ProjectType.Projects}`}>
                    <h1>Personal Projects and Certifications</h1>
                </a>
            </div>
            <div id="courseworks" className="section">
                <a href={`/${ProjectType.Courseworks}`}>
                    <h1>Notable University Courseworks</h1>
                </a>
            </div>
        </div>
    );
};

export default Sections;