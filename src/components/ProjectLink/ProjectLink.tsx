import { FC } from "react";
import { ProjectState } from "../../types";

interface ProjectLinkProps {
    project: ProjectState
}

const ProjectLink: FC<ProjectLinkProps> = ({ project }: ProjectLinkProps) => {
    return (
        <li key={`${project.id}-projlink`}>
            <a key={`${project.id}-projlink-a`} href={`/dev/${project.type}/${project.id}`}>{project.name}</a>
            <span key={`${project.id}-projlink-span`}> --- </span>
            <div
                key={`${project.id}-projlink-tags`}
                className="project-list-tags"
                style={{ display: "inline-block" }}
            >
                { project.tags.map(tag => <span key={`${project.id}-projlink-tagslisting-${tag.name}`} className="tag-pill" style={ { color: tag.colour } }>{tag.name}</span>) }
            </div>
        </li>
    );
};

export default ProjectLink;