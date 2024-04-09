import { FC, useState } from "react";
import { ExperienceState, ProjectState, ProjectType, TagSelection } from "../../types";
import ProjectRepo from "../../db/ProjectRepo";
import ProjectListing from "../ProjectListing/ProjectListing";
import ExperienceListing from "../ProjectListing/ExperienceListing";
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