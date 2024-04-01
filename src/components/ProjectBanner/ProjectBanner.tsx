import { FC } from "react";
import { ProjectType, TagState } from "../../types";
import "./ProjectBanner.css";
import Tag from "../tags/Tag";

interface ProjectBannerProps {
    projectType: ProjectType;
    sourceUrl: string | null; // used for something like a GitHub link or a zip file
    accessUrl: string | null; // used for either deployment link or software download link
    tags: TagState[]
}

const shortenFullUrl = (fullUrl: string): string | null => {
    const split = fullUrl.split("https://");

    // error
    if (split.length > 2) {
        return null;
    }
    
    if (split.length === 1) {
        return split[0];
    } else {
        return split[1];
    }
}

const ProjectBanner: FC<ProjectBannerProps> = ({ projectType, sourceUrl, accessUrl, tags }: ProjectBannerProps) => {
    return (
        <div className={`project-banner project-banner-${projectType}`}>
            <div className="tags-container">
                { tags.map(tag =>
                    <Tag key={tag.name} tagData={ tag } />
                ) }
            </div>
            
            <div className="urls-container">
                <div className="project-url">
                    {/* <img alt="source code icon" className="link-icon-img" src="/sourcecode.png" /> */}
                    <div className="project-url-link">
                        <span>📁 {sourceUrl ? <a href={sourceUrl}>{shortenFullUrl(sourceUrl)}</a> : "N/A"}</span>
                    </div>
                </div>
                <div className="project-url">
                    {/* <img alt="project link icon" className="link-icon-img" src="/deployment.png" /> */}
                    <div className="project-url-link">
                        <span>🌐 {accessUrl ? <a href={accessUrl}>{shortenFullUrl(accessUrl)}</a> : "N/A"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectBanner;
