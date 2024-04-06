import { FC } from "react";
import { ExperienceState } from "../../types";
import ExperienceDates from "../Banner/ProjectBanner/ExperienceDates";
import Tag from "../tags/Tag";
import "./Listing.css";

interface ExperienceListingProps {
    project: ExperienceState;
}

const ExperienceListing: FC<ExperienceListingProps> = ({ project }: ExperienceListingProps) => {
    return (
        <tr className="project-row">
            <td>
                <div className="experience-description">
                    <a href={`/dev/${project.type}/${project.id}`}>{project.name}</a>
                    <div className="experience-dates-container">
                        <ExperienceDates started={project.started} ended={project.ended} />
                    </div>
                </div>
            </td>
            <td>
                <div className="project-list-tags">
                    { project.tags.map(tagName =>
                        <Tag name={ tagName } />
                    )}
                </div>
            </td>
        </tr>
    );
};

export default ExperienceListing;