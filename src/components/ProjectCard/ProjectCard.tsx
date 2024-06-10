import { FC, ReactNode } from "react";
import { ProjectState } from "../../types";
import "./Card.css";
import Tags from "../tags/Tags";
import { ProjectPageLinkBuilder } from "../../util";

interface ProjectLinkProps {
    project: ProjectState
}

interface ProjectCardHeaderProps {
    projectName: string;
    projectBrief: string;
    children?: ReactNode;
}

export const ProjectCardHeader: FC<ProjectCardHeaderProps> = ({ projectName, projectBrief, children }: ProjectCardHeaderProps) => {
    return (
        <div className="project-card-heading">
            <h3>{ projectName }</h3>
            { children }
            <p className="project-card-heading-brief">{ projectBrief }</p>
        </div>
    );
};

interface ProjectCardTagsProps {
    projectTags: string[];
}

export const ProjectCardTags: FC<ProjectCardTagsProps> = ({ projectTags }: ProjectCardTagsProps) =>
    <Tags tags={ projectTags } />;

interface ProjectCardTrailerProps {
    projectPageLink: string;
}

export const ProjectCardTrailer: FC<ProjectCardTrailerProps> = ({ projectPageLink }: ProjectCardTrailerProps) => {
    return (
        <div className="project-card-trailer-container">
            <a href={ projectPageLink } className="project-card-trailer-link">
                <button className="project-card-trailer-link-button">A More Detailed View</button>
            </a>
        </div>
    );
}

const ProjectCard: FC<ProjectLinkProps> = ({ project }: ProjectLinkProps) => {
    const pageLink: string = new ProjectPageLinkBuilder()
        .setType(project.type)
        .setId(project.id)
        .build();

    return (
        <div className="project-card">
            <div className="project-card-content">
                <ProjectCardHeader
                    projectName={ project.name }
                    projectBrief={ project.brief }
                />
                <ProjectCardTags projectTags={ project.tags } />
            </div>
            <ProjectCardTrailer projectPageLink={ pageLink } />
        </div>
    );
};

export default ProjectCard;