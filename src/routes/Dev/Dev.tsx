import { FC } from "react";
import ProjectList from "../../components/ProjectList/ProjectList";
import { ProjectType } from "../../types";
import Banner from "../../components/Banner/Banner";

// TODO: this would be like a full project repository, rather than sectioned
// TODO: search by name, filter by tags
const Dev: FC = () => {
    return (
        <div>
            <Banner title="Full Project List" />
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