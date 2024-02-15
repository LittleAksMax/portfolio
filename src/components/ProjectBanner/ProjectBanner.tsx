import { FC } from "react";
import { ProjectType } from "../../types";

interface ProjectBannerProps {
    projectType: ProjectType;
    sourceUrl: string | null; // used for something like a GitHub link or a zip file
    accessUrl: string | null; // used for either deployment link or software download link
}

const ProjectBanner: FC<ProjectBannerProps> = ({ projectType, sourceUrl, accessUrl }: ProjectBannerProps) => {
    // TODO:
    return (
        <div className="project-banner">

        </div>
    );
};

export default ProjectBanner;
