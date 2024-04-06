import { FC } from "react";
import ProjectList from "../../components/ProjectList/ProjectList";
import { ProjectType } from "../../types";
import Banner from "../../components/Banner/Banner";
import Page from "../../components/Page/Page";
import "./Dev.css";

// TODO: search by name, filter by tags
const Dev: FC = () => {
    return (
        <Page banner={<Banner title="Full Project List" />}>
            <div id="filter">
                
            </div>
            <div id="all-projects">
                <div className="experience-projects">
                    <h1 className="project-section-heading">Experiences</h1>
                    <ProjectList type={ProjectType.Experiences} />
                </div>
                <div className="projects-projects">
                    <h1 className="project-section-heading">Projects</h1>
                    <ProjectList type={ProjectType.Projects} />
                </div>
                <div className="certifications-projects">
                    <h1 className="project-section-heading">Certifications</h1>
                    <ProjectList type={ProjectType.Certifications} />
                </div>
            </div>
        </Page>
    );
};

export default Dev;