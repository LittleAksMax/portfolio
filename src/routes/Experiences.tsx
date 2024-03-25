import { FC } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import { ProjectType } from "../types";

const Experiences: FC = () => {
    return (
        <div>
            <h1>Experiences</h1>
            <ProjectList type={ProjectType.Experiences} />
        </div>
    );
};

export default Experiences;