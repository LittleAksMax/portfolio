import { FC, useEffect, useState } from "react";
import ProjectList from "../../components/ProjectList/ProjectList";
import { ProjectType } from "../../types";
import Banner from "../../components/Banner/Banner";
import Page from "../../components/Page/Page";
import "./Dev.css";
import ProjectFilter from "./ProjectFilter";
import ProjectRepo from "../../db/ProjectRepo";
import { TagSelection } from "../../types";

const Dev: FC = () => {
    const [tags, setTags] = useState<TagSelection[]>([]);

    // only load the tags on first mount, if there is no pre-existing state
    useEffect(() => {
        if (tags.length === 0) {
            setTags(ProjectRepo.getInstance().getTags()
                .sort()
                .map(tagName => ({ tag: tagName, selected: true })));
        }
    }, [tags.length]);

    return (
        <Page banner={
            <Banner title="Full Project List">
                <ProjectFilter tags={tags} setTags={setTags} />
            </Banner>}
        >
            <div id="all-projects">
                <div className="experience-projects">
                    <h1 className="project-section-heading">Experiences</h1>
                    <ProjectList type={ProjectType.Experiences} tagFilter={tags} />
                </div>
                <div className="projects-projects">
                    <h1 className="project-section-heading">Projects</h1>
                    <ProjectList type={ProjectType.Projects} tagFilter={tags} />
                </div>
                <div className="certifications-projects">
                    <h1 className="project-section-heading">Certifications</h1>
                    <ProjectList type={ProjectType.Certifications} tagFilter={tags} />
                </div>
            </div>
        </Page>
    );
};

export default Dev;