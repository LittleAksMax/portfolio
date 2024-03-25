import { FC } from "react";
import { ProjectState } from "../../types";
import "./ProjectListing.css";

interface ProjectLinkProps {
    project: ProjectState
}

// TODO: colour tags
const ProjectListing: FC<ProjectLinkProps> = ({ project }: ProjectLinkProps) => {
    return (
        <tr className="project-row">
            <td>
                <a className="project-link" href={`/dev/${project.type}/${project.id}`}>{project.name}</a>
            </td>
            <td>
                <div className="project-list-tags">
                    { project.tags.map(tag =>
                        <span key={tag.name} className="tag-pill">{tag.name}</span>
                    )}
                </div>
            </td>
        </tr>
    );
};

export default ProjectListing;