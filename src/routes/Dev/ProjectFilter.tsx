import { FC } from "react";
import { Dispatch, SetStateAction } from "react";
import Tag from "../../components/tags/Tag";
import "./ProjectFilter.css";
import { TagSelection } from "../../types";

interface ProjectFilterProps {
    tags: TagSelection[];
    setTags: Dispatch<SetStateAction<TagSelection[]>>;
}

const ProjectFilter: FC<ProjectFilterProps> = ({ tags, setTags }: ProjectFilterProps) => {
    return (
        <div className="project-filter">
            <div className="filter-data">
                <h2>Filter by Tags: (click to toggle selection)</h2>
                <div className="project-filter-tags-container">
                    { tags.map(({ tag, selected }) =>
                        <span
                            key={`filter-tag-span-${tag}`}
                            className={selected ? "" : "unselected"}
                            onClick={() => {
                                setTags(tags.map(tagSelect =>
                                    tagSelect.tag === tag
                                        ?
                                    { tag: tagSelect.tag, selected: !tagSelect.selected }
                                        :
                                    tagSelect))
                            }}
                        >
                            <Tag name={tag} />
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectFilter;