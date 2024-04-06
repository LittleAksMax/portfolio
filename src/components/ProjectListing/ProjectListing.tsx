import { FC } from "react";
import { ProjectState } from "../../types";
import "./Listing.css";
import Tag from "../tags/Tag";

interface ProjectLinkProps {
    project: ProjectState
}

const ProjectListing: FC<ProjectLinkProps> = ({ project }: ProjectLinkProps) => {
    return (
        <tr className="project-row">
            <td>
                <a className="project-link" href={`/dev/${project.type}/${project.id}`}>{project.name}</a>
            </td>
            <td>
                <div className="project-list-tags">
                    { project.tags.map(tagName =>
                        <Tag key={`${project.id}-${tagName}`} name={ tagName } />
                    )}
                </div>
            </td>
        </tr>
    );
};

export default ProjectListing;