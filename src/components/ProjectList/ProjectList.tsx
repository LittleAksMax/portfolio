import { FC, useState } from "react";
import { ExperienceState, ProjectState, ProjectType } from "../../types";
import ProjectRepo from "../../db/ProjectRepo";
import ProjectCard from "../ProjectCard/ProjectCard";
import ExperienceCard from "../ProjectCard/ExperienceCard";
import "./ProjectList.css";

interface ProjectListProps {
    type: ProjectType;
}

interface ProjectListInnerProps {
    projects: (ProjectState | ExperienceState)[];
}

export const ProjectListInner: FC<ProjectListInnerProps> = ({ projects }: ProjectListInnerProps) => {
    return (
        <>
            {projects.map(proj => (
                proj.type === ProjectType.Experiences ?
                    <ExperienceCard
                        key={`${proj.id}-card`}
                        project={proj as ExperienceState}
                    />
                :
                    <ProjectCard
                        key={`${proj.id}-card`}
                        project={proj as ProjectState}
                    />
            ))}
        </>
    );
};

const ProjectList: FC<ProjectListProps> = ({ type }: ProjectListProps) => {
    const [projects] = useState<(ProjectState | ExperienceState)[]>(
        ProjectRepo.getInstance().getOfType(type)
    );
    
    return (
        <div className="project-list-container">
            <div className="project-list">
                <ProjectListInner projects={ projects } />
            </div>
        </div>
    );
};

export default ProjectList;