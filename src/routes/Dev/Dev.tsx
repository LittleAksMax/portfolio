import { FC } from "react";
import ProjectList from "../../components/ProjectList/ProjectList";
import { ProjectType } from "../../types";
import Banner from "../../components/Banner/Banner";
import Page from "../../components/Page/Page";

// TODO: this would be like a full project repository, rather than sectioned
// TODO: search by name, filter by tags
const Dev: FC = () => {
    return (
        <Page banner={<Banner title="Full Project List" />}>
            <div id="filter">
                
            </div>
            <div id="all-projects">
                <ProjectList type={ProjectType.Experiences} />
                <ProjectList type={ProjectType.Projects} />
                <ProjectList type={ProjectType.Certifications} />
            </div>
        </Page>
    );
};

export default Dev;