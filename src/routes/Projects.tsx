import { FC } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import { ProjectType } from "../types";
import Banner from "../components/Banner/Banner";
import Page from "../components/Page/Page";

const Projects: FC = () => {
    return (
        <Page banner={<Banner title="Personal Projects and Certifications" />}>
            <ProjectList type={ProjectType.Projects} />
        </Page>
    );
};

export default Projects;