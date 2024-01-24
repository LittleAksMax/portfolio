import { FC } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ProjectType } from "../types";

const ProjectPage: FC = () => {
    const { type, project } = useParams();

    // ensure type route parameter is valid
    if (ProjectType.Courseworks !== type &&
        ProjectType.Experiences !== type &&
        ProjectType.Projects !== type) {
        // TODO: NotFound component
    }

    return (
        <div>
            <Navbar />
            <h1>{ project }</h1>
        </div>
    );
};

export default ProjectPage;