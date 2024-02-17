import { FC } from "react";
import { ProjectState } from "../../types";

interface ProjectLinkProps {
    project: ProjectState
}

const ProjectLink: FC<ProjectLinkProps> = ({ project }: ProjectLinkProps) => {
    return (
        <li>
            <a href={`/dev/${project.type}/${project.id}`}>{project.name}</a>
            <div
                className="project-list-tags"
                style={{ display: "inline-block" }}
            >
                { project.tags.map(tag => <span className="tag-pill">{tag.name}</span>) }
            </div>
        </li>
    );
};

export default ProjectLink;