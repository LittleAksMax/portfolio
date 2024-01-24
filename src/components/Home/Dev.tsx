import { FC} from "react";
import { ProjectType } from "../../types";

const Dev: FC = () => {
    return (
        <div id="dev">
            <h1>Dev</h1>
            <ul>
                <li><a href={`/${ProjectType.Experiences}`}>Work Experiences</a></li>
                <li><a href={`/${ProjectType.Projects}`}>Personal Projects and Certifications</a></li>
                <li><a href={`/${ProjectType.Courseworks}`}>Notable University Courseworks</a></li>
            </ul>
        </div>
    );
};

export default Dev;