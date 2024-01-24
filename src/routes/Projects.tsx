import { FC } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProjectList from "../components/ProjectList/ProjectList";
import { ProjectType } from "../types";

const Projects: FC = () => {
    return (
        <div>
            <Navbar />
            <h1>Projects</h1>
            <ProjectList type={ProjectType.Projects} />
        </div>
    );
};

export default Projects;