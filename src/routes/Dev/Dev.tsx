import { FC } from "react";
import ProjectList from "../../components/ProjectList/ProjectList";
import { ProjectType } from "../../types";

// TODO: this would be like a full project repository, rather than sectioned
// TODO: search by name, filter by tags
const Dev: FC = () => {
    return (
        <div>
            <h1>Full Project List</h1>
            <div id="filter">
                
            </div>
            <div id="all-projects">
                <ProjectList type={ProjectType.Projects} />
                <ProjectList type={ProjectType.Courseworks} />
                <ProjectList type={ProjectType.Experiences} />
            </div>
        </div>
    );
};

export default Dev;