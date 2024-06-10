import { FC } from "react";
import { ExperienceState } from "../../types";
import { ExperienceDatesInline } from "../ExperienceDates/ExperienceDates";
import "./Card.css";
import "./ExperienceCard.css";
import { ProjectCardHeader, ProjectCardTags, ProjectCardTrailer } from "./ProjectCard";
import { ProjectPageLinkBuilder } from "../../util";

interface ExperienceCardProps {
    project: ExperienceState;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ project }: ExperienceCardProps) => {
    const pageLink: string = new ProjectPageLinkBuilder()
        .setType(project.type)
        .setId(project.id)
        .build();

    return (
        <div className="project-card experience-card">
            <div className="project-card-content">
                <ProjectCardHeader
                    projectName={ project.name }
                    projectBrief={ project.brief }
                >
                    <h4 className="experience-card-position">
                        { project.position }
                        &nbsp;
                        <ExperienceDatesInline started={ project.started } ended={ project.ended } />
                    </h4>
                </ProjectCardHeader>

                <ProjectCardTags projectTags={ project.tags } />

                {/* Create list from summary */}
                <div className="experience-card-summary-container">
                    <ul className="experience-card-summary-list">
                        { project.summary.map(bullet =>
                            <li
                                key={`${project.id}__${bullet}`}
                                className="experience-card-summary-listing"
                            >
                                { bullet }
                            </li>
                        )}
                    </ul>
                </div>

            </div>

            <ProjectCardTrailer projectPageLink={ pageLink } />
        </div>
    );
};

export default ExperienceCard;