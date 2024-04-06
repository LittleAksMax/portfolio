import { FC } from "react";
import { useParams } from "react-router-dom";
import { ExperienceState, ProjectState, ProjectType } from "../types";
import NotFound from "../components/Status/NotFound";
import ProjectBanner from "../components/Banner/ProjectBanner/ProjectBanner";
import EntriesMap from "../entries/EntryComponentConfig";
import ProjectRepo from "../db/ProjectRepo";
import Page from "../components/Page/Page";
import ExperienceBanner from "../components/Banner/ProjectBanner/ExperienceBanner";

export const ProjectPage: FC = () => {
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

    return (
        <Page banner={
            type === ProjectType.Experiences ?
                <ExperienceBanner
                    projectName={project.name}
                    projectSubtitle={project.brief}
                    started={(project as ExperienceState).started}
                    ended={(project as ExperienceState).ended}
                    tags={project.tags}
                />
            :
                <ProjectBanner
                    projectName={project.name}
                    projectSubtitle={project.brief}
                    sourceUrl={(project as ProjectState).source}
                    accessUrl={(project as ProjectState).access}
                    tags={project.tags} />
            }
        >
            <div className="project-contents">
                {EntriesMap[projectId]}
            </div>
        </Page>
    );
};

export default ProjectPage;