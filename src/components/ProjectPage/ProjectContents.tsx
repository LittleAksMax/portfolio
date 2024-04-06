import { FC, ReactNode } from "react";
import "./ProjectContents.css";

interface ProjectContentsProps {
    isOverview: boolean;
    overview: ReactNode;
    detailed: ReactNode;
}

const ProjectContents: FC<ProjectContentsProps> = ({ isOverview, overview, detailed }: ProjectContentsProps) => {
    return (
        <div className="project-contents">
            { isOverview ? overview : detailed }
        </div>
    );
};

export default ProjectContents;