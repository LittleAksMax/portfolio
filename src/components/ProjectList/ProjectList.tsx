import { FC, useState, useEffect } from "react";
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
    const [projects, setProjects] = useState<(ProjectState | ExperienceState)[]>([]);
    
    useEffect(() => {
        const activeTags = tagFilter
            ?.filter(selection => selection.selected)
            .map(selectedTag => selectedTag.tag);

        setProjects(ProjectRepo
            .getInstance()
            .getOfType(type)
            .filter(entry => {
                // if no filter defined, just ignore the filter
                if (activeTags === undefined) {
                    return true;
                }

                // if the tag list includes a single active tag, we should include it
                for (const tag of entry.tags) {
                    if (activeTags.includes(tag.toUpperCase())) {
                        return true;
                    }
                }

                return false;
            }));
    }, [tagFilter, type]);

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