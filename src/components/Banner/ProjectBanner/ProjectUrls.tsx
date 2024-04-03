import { FC } from "react";
import "./ProjectUrls.css";
import ProjectUrl from "./ProjectUrl";
import { ProjectUrlType } from "./types";

interface ProjectUrlsProps {
    urls: ProjectUrlType[];
}

const ProjectUrls: FC<ProjectUrlsProps> = ({ urls }: ProjectUrlsProps) => {
    return (
        <div className="url-container">
            { urls.map(url => 
                <ProjectUrl key={ url.name } url={ url.url } name={ url.name } />
            )}
        </div>
    );
}

export default ProjectUrls;