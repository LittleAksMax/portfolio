import { FC, useState } from "react";
import { ProjectState, ProjectType } from "../../types";
import ProjectRepo from "../../db/ProjectRepo";
import ProjectListing from "../ProjectListing/ProjectListing";
import "./ProjectList.css";

interface ProjectListProps {
    type: ProjectType
}

const ProjectList: FC<ProjectListProps> = ({ type }: ProjectListProps) => {
    const [projects] = useState<ProjectState[]>(ProjectRepo.getInstance().getOfType(type));
    return (
        <table className="project-table">
            <tbody>
                {projects.map(proj =>
                    <ProjectListing
                        key={`${proj.id}-projlisting`}
                        project={proj}
                    />
                )}
            </tbody>
        </table>
    );
};

export default ProjectList;