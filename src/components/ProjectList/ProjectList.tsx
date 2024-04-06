import { FC, useState } from "react";
import { ExperienceState, ProjectState, ProjectType } from "../../types";
import ProjectRepo from "../../db/ProjectRepo";
import ProjectListing from "../ProjectListing/ProjectListing";
import "./ProjectList.css";
import ExperienceListing from "../ProjectListing/ExperienceListing";

interface ProjectListProps {
    type: ProjectType
}

const ProjectList: FC<ProjectListProps> = ({ type }: ProjectListProps) => {
    const [projects] = useState<(ProjectState | ExperienceState)[]>(ProjectRepo.getInstance().getOfType(type));
    return (
        <table className="project-table">
            <tbody>
                {projects.map(proj => (
                        proj.type === ProjectType.Experiences ?
                            <ExperienceListing
                                key={`${proj.id}-projlisting`}
                                project={proj as ExperienceState}
                            />
                        :
                            <ProjectListing
                                key={`${proj.id}-projlisting`}
                                project={proj as ProjectState}
                            />
                    )
                )}
            </tbody>
        </table>
    );
};

export default ProjectList;