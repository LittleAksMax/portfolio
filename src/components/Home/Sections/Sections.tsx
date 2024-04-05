import { FC} from "react";
import { ProjectType } from "../../../types";
import './Sections.css';

const Sections: FC = () => {
    return (
        <div className="sections">
            <div className="sections-section">
                <a href={`/${ProjectType.Experiences}`}>
                    <h1>Work Experiences</h1>
                </a>
            </div>
            <div className="sections-section">
                <a href={`/${ProjectType.Projects}`}>
                    <h1>Personal Projects</h1>
                </a>
            </div>
            <div className="sections-section">
                <a href={`/${ProjectType.Certifications}`}>
                    <h1>Certifications</h1>
                </a>
            </div>
        </div>
    );
};

export default Sections;