import { FC } from "react";
import { ProjectType } from "../../../types";
import ProjectUrls from "./ProjectUrls";
import { ProjectUrlType } from "./types";
import Banner from "../Banner";
import Tags from "../../tags/Tags";

interface ProjectBannerProps {
    projectType: ProjectType;
    projectName: string;
    projectSubtitle: string;
    sourceUrl: string | null; // used for something like a GitHub link or a zip file
    accessUrl: string | null; // used for either deployment link or software download link
    tags: string[]
}

const ProjectBanner: FC<ProjectBannerProps> = ({ projectType, projectName, projectSubtitle, sourceUrl, accessUrl, tags }: ProjectBannerProps) => {
    const urls: ProjectUrlType[] = [
        {
            name: "VIEW APP",
            url: accessUrl
        },
        {
            name: "GITHUB",
            url: sourceUrl
        }
    ]

    return (
        <Banner type={ projectType } title={ projectName } subtitle={projectSubtitle}>
            <Tags tags={ tags } />
            <ProjectUrls urls={ urls } />
        </Banner>
    );
};

export default ProjectBanner;
