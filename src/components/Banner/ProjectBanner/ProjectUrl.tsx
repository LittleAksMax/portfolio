import { FC } from "react";
import "./ProjectUrl.css";

interface ProjectUrlProps {
    url: string | null;
    name: string;
}

/**
 * Render URL if it exists (isn't null).
 */
const ProjectUrl: FC<ProjectUrlProps> = ({ url, name }: ProjectUrlProps) => {
    return url &&
        <div className="project-url-link">
            <a href={url}>{ name }</a>
        </div>
};

export default ProjectUrl;