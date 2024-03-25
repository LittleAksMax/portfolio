import { FC } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import { ProjectType } from "../types";

const Projects: FC = () => {
    return (
        <div>
            <h1>Projects</h1>
            <ProjectList type={ProjectType.Projects} />
        </div>
    );
};

export default Projects;