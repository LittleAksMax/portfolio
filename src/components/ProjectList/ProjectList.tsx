import { FC, useState } from "react";
import { ProjectState, ProjectType } from "../../types";
import ProjectRepo from "../../db/ProjectRepo";
import ProjectLink from "../ProjectLink/ProjectLink";

interface ProjectListProps {
    type: ProjectType
}

const ProjectList: FC<ProjectListProps> = ({ type }: ProjectListProps) => {
    const [projects] = useState<ProjectState[]>(ProjectRepo.getInstance().getOfType(type));
    return (
        <div>
            { projects.map(proj =>
                <ProjectLink
                    key={`${proj.id}-projlisting`}
                    project={ proj }
                />) }
        </div>
    );
};

export default ProjectList;