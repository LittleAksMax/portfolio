import { FC } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ProjectType } from "../types";
import NotFound from "../components/Status/NotFound";
import ProjectBanner from "../components/ProjectBanner/ProjectBanner";
import EntriesMap from "../entries/EntryComponentConfig";

const ProjectPage: FC = () => {
    const { type, projectId } = useParams();

    // Figure how to import pure HTML into React with:
    // https://stackoverflow.com/questions/50792942/how-to-import-html-file-into-react-component-and-use-it-as-a-component

    // ensure type route parameter is valid
    if ((ProjectType.Courseworks !== type &&
        ProjectType.Experiences !== type &&
        ProjectType.Projects !== type) ||
        projectId === undefined ||
        projectId === null) {
        return <NotFound />
    }

    // TODO: access and GitHub URLs in entry
    return (
        <div>
            <Navbar />
            <ProjectBanner projectType={type} sourceUrl={'TODO'} accessUrl={'TODO'} />
            <div className="project-contents">
                {EntriesMap[projectId]}
            </div>
        </div>
    );
};

export default ProjectPage;