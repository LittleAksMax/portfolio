import { FC } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProjectList from "../components/ProjectList/ProjectList";
import { ProjectType } from "../types";

const Experiences: FC = () => {
    return (
        <div>
            <Navbar />
            <h1>Experiences</h1>
            <ProjectList type={ProjectType.Experiences} />
        </div>
    );
};

export default Experiences;