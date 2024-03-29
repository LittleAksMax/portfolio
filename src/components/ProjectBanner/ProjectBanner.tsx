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
                        <span>📁 {sourceUrl ? <a href={sourceUrl}>{sourceUrl}</a> : "N/A"}</span>
                    </div>
                </div>
                <div className="project-url">
                    {/* <img alt="project link icon" className="link-icon-img" src="/deployment.png" /> */}
                    <div className="project-url-link">
                        <span>🌐 {accessUrl ? <a href={accessUrl}>{accessUrl}</a> : "N/A"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectBanner;
