import { FC } from "react";
import ProjectUrls from "./ProjectUrls";
import { ProjectUrlType } from "./types";
import Banner from "../Banner";
import Tags from "../../tags/Tags";
import "./SpecialisedBanner.css";

interface ProjectBannerProps {
    projectName: string;
    projectSubtitle: string;
    sourceUrl: string | null; // used for something like a GitHub link or a zip file
    accessUrl: string | null; // used for either deployment link or software download link
    tags: string[];
}

const ProjectBanner: FC<ProjectBannerProps> = (
    { projectName, projectSubtitle, sourceUrl, accessUrl, tags }: ProjectBannerProps
) => {
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
        <Banner title={ projectName } subtitle={projectSubtitle}>
            <div className="project-data">
                <Tags tags={ tags } />
                <ProjectUrls urls={ urls } />
            </div>
        </Banner>
    );
};

export default ProjectBanner;
