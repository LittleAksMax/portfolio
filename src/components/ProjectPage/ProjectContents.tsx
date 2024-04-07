import { FC, ReactNode } from "react";
import "./ProjectContents.css";

interface ProjectContentsProps {
    children?: ReactNode;
}

const ProjectContents: FC<ProjectContentsProps> = ({ children }: ProjectContentsProps) => {
    return (
        <div className="project-contents">
            { children }
        </div>
    );
};

export default ProjectContents;