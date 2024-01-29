import { FC} from "react";
import { ProjectType } from "../../types";

const Sections: FC = () => {
    return (
        <div id="sections">
            <h1>Sections</h1>
            <ul>
                <li><a href={`/${ProjectType.Experiences}`}>Work Experiences</a></li>
                <li><a href={`/${ProjectType.Projects}`}>Personal Projects and Certifications</a></li>
                <li><a href={`/${ProjectType.Courseworks}`}>Notable University Courseworks</a></li>
            </ul>
        </div>
    );
};

export default Sections;