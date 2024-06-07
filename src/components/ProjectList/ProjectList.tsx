import { FC, useState } from "react";
import { ExperienceState, ProjectState, ProjectType, TagSelection } from "../../types";
import ProjectRepo from "../../db/ProjectRepo";
import ProjectCard from "../ProjectCard/ProjectCard";
import ExperienceCard from "../ProjectCard/ExperienceCard";
import "./ProjectList.css";

interface ProjectListProps {
    type: ProjectType;

    // for filters
    tagFilter?: TagSelection[];
}

const ProjectList: FC<ProjectListProps> = ({ type, tagFilter }: ProjectListProps) => {
    const [projects] = useState<(ProjectState | ExperienceState)[]>(
        ProjectRepo.getInstance().getOfType(type)
    );
    
    return (
        <div className="project-list">
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
                )
            )}
        </div>
    );
};

export default ProjectList;