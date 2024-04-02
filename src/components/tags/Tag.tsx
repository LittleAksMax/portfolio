import { FC } from "react";
import "./Tag.css";

interface TagProps {
    name: string;
}

const Tag: FC<TagProps> = ({ name }: TagProps) => 
    <span className="tag-pill">{ name.toUpperCase() }</span>

export default Tag;