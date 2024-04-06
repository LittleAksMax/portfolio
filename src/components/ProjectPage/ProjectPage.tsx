import { FC, ReactNode, useState } from "react";
import { useParams } from "react-router-dom";
import { ExperienceState, ProjectState, ProjectType } from "../../types";
import NotFound from "../Status/NotFound";
import ProjectBanner from "../Banner/ProjectBanner/ProjectBanner";
import EntriesMap from "../../entries/EntryComponentConfig";
import ProjectRepo from "../../db/ProjectRepo";
import Page from "../Page/Page";
import ExperienceBanner from "../Banner/ProjectBanner/ExperienceBanner";
import ProjectContents from "./ProjectContents";
import PageToggle from "./PageToggle";

const createBanner = (
    projectType: ProjectType,
    project: ProjectState | ExperienceState,
    pageToggle: ReactNode
) => {
    if (projectType === ProjectType.Experiences) {
        return (
            <ExperienceBanner
                projectName={project.name}
                projectSubtitle={project.brief}
                started={(project as ExperienceState).started}
                ended={(project as ExperienceState).ended}
                tags={project.tags}
                pageToggle={pageToggle}
            />
        );
    } else {
        return (
            <ProjectBanner
                projectName={project.name}
                projectSubtitle={project.brief}
                sourceUrl={(project as ProjectState).source}
                accessUrl={(project as ProjectState).access}
                tags={project.tags}
                pageToggle={pageToggle}
            />
        );
    }
}

export const ProjectPage: FC = () => {
    const [isOverview, setIsOverview] = useState<boolean>(true);

    const { type, projectId } = useParams();

    // ensure type route parameter is valid
    if ((ProjectType.Certifications !== type &&
        ProjectType.Experiences !== type &&
        ProjectType.Projects !== type) ||
        projectId === undefined ||
        projectId === null) {
        return <NotFound />;
    }

    const project = ProjectRepo.getInstance().getProjectById(projectId);

    // project must exist
    if (project === null) {
        return <NotFound />;
    }

    const pageToggle = <PageToggle isOverview={isOverview} setIsOverview={setIsOverview} />;

    return (
        <Page banner={createBanner(type, project, pageToggle)}>
            <ProjectContents
                isOverview={isOverview}
                overview={EntriesMap[projectId].overview}
                detailed={EntriesMap[projectId].details}
            />
        </Page>
    );
};

export default ProjectPage;