import { FC} from "react";
import { ProjectType } from "../../../types";
import './Sections.css';

const Sections: FC = () => {
    return (
        <section className="sections">
            <a href={`/${ProjectType.Experiences}`} className="sections-section sections-section-link">
                <div>
                    <h1>Work Experiences</h1>
                </div>
            </a>

            <a href={`/${ProjectType.Projects}`} className="sections-section sections-section-link">
                <div>
                    <h1>Personal Projects</h1>
                </div>
            </a>
            
            <a href={`/${ProjectType.Certifications}`} className="sections-section sections-section-link">
                <div>
                    <h1>Courses and Certifications</h1>
                </div>
            </a>
            
        </section>
    );
};

export default Sections;