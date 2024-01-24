import { FC, useEffect, useState } from "react";
import { ProjectType } from "../../types";

interface ProjectListProps {
    type: ProjectType
}

const ProjectList: FC<ProjectListProps> = ({ type }: ProjectListProps) => {
    // TODO: implement project listing based on JSON data
    return (
        <div>
            <span>ProjectList</span>
        </div>
    );
};

export default ProjectList;