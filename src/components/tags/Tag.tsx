import { FC } from "react";
import { TagState } from "../../types";
import "./Tag.css";

interface TagProps {
    tagData: TagState;
}

const Tag: FC<TagProps> = ({ tagData }: TagProps) => {
    return (
        <div className="tag-pill" style={{backgroundColor: tagData.colour}}>
            {tagData.name}
        </div>
    )
}

export default Tag;