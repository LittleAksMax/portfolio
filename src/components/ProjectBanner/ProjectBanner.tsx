import { FC } from "react";
import { ProjectType, TagState } from "../../types";
import "./ProjectBanner.css";

interface ProjectBannerProps {
    projectType: ProjectType;
    sourceUrl: string | null; // used for something like a GitHub link or a zip file
    accessUrl: string | null; // used for either deployment link or software download link
    tags: TagState[]
}

const ProjectBanner: FC<ProjectBannerProps> = ({ projectType, sourceUrl, accessUrl, tags }: ProjectBannerProps) => {
    // TODO: make tags display as pills using the type and colour values
    return (
        <div className={`project-banner project-banner-${projectType}`}>
            { tags.map(tag =>
                <span className="tag-pill">
                    {tag.name}
                </span>
            ) }
            
            <div className="project-url">
                <img alt="source code icon" className="link-icon-img" src="/sourcecode.png" />
                <span className="project-url-link">
                    {sourceUrl ? <a href={sourceUrl}>{sourceUrl}</a> : <span>N/A</span>}
                </span>
            </div>
            <div className="project-url">
                <img alt="project link icon" className="link-icon-img" src="/deployment.png" />
                <span className="project-url-link">
                    {accessUrl ? <a href={accessUrl}>{accessUrl}</a> : <span>N/A</span>}
                </span>
            </div>
        </div>
    );
};

export default ProjectBanner;
