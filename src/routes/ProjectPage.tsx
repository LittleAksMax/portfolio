import { FC } from "react";
import { useParams } from "react-router-dom";
import { ProjectType } from "../types";
import NotFound from "../components/Status/NotFound";
import ProjectBanner from "../components/Banner/ProjectBanner/ProjectBanner";
import EntriesMap from "../entries/EntryComponentConfig";
import ProjectRepo from "../db/ProjectRepo";

const ProjectPage: FC = () => {
    const { type, projectId } = useParams();
    
    // ensure type route parameter is valid
    if ((ProjectType.Courseworks !== type &&
        ProjectType.Experiences !== type &&
        ProjectType.Projects !== type) ||
        projectId === undefined ||
        projectId === null) {
        return <NotFound />
    }
    
    const project = ProjectRepo.getInstance().getProjectById(projectId);

    // project must exist
    if (project === null) {
        return <NotFound />
    }

    return (
        <div>
            <ProjectBanner
                projectName={project.name}
                projectSubtitle={project.brief}
                sourceUrl={project.source}
                accessUrl={project.access}
                tags={project.tags}
            />
            <div className="project-contents">
                {EntriesMap[projectId]}
            </div>
        </div>
    );
};

export default ProjectPage;