import { FC } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import { ProjectType } from "../types";

const Courseworks: FC = () => {
    return (
        <div>
            <h1>Courseworks</h1>
            <ProjectList type={ProjectType.Courseworks} />
        </div>
    );
};

export default Courseworks;