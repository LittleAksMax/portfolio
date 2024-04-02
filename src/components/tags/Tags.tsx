import { FC } from "react";
import Tag from "./Tag";
import "./Tags.css";

interface TagsProps {
    tags: string[];
}

const Tags: FC<TagsProps> = ({ tags }: TagsProps) => {
    return (
        <div className="tags-container">
            { tags.map(tagName =>
                <Tag key={tagName} name={tagName} />
            )}
        </div>
    );
};

export default Tags;
