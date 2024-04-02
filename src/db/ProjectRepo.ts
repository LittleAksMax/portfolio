import { InitialState, ProjectState, ProjectType } from "../types";
import logger from "../logging";
import projectData from "../data/entries.json";

class ProjectRepo {
    private static _instance: ProjectRepo | null = null;

    public static getInstance = (): ProjectRepo => {
        if (!ProjectRepo._instance) {
            ProjectRepo._instance = new ProjectRepo();
        }
        logger.debug("ProjectRepo", "tags:", ProjectRepo._instance.projects);
        return ProjectRepo._instance;
    }

    private projects: InitialState = {
        projectTypes: projectData["types"],
        entries: projectData["entries"].map(entry => ({
            id: entry["id"],
            name: entry["name"],
            brief: entry["brief"],
            tags: entry["tags"],
            type: entry["type"],
            source: entry["source"],
            access: entry["access"]
        }))
    };

    public getOfType = (type: ProjectType): ProjectState[] => {
        return this.projects.entries.filter(proj => proj.type === type);
    }

    public getProjectById(projectId: string): ProjectState | null {
        const projects = this.projects.entries
            .filter(proj => proj.id === projectId);
        
        // only a single project should match the project ID
        if (projects.length !== 1) {
            return null;
        } else {
            return projects[0];
        }
    }
}

export default ProjectRepo;