import { ExperienceState, InitialState, ProjectState, ProjectType } from "../types";
import logging from "../logging";
import projectData from "../data/entries.json";

class ProjectRepo {
    private static _instance: ProjectRepo | null = null;

    public static getInstance = (): ProjectRepo => {
        if (!ProjectRepo._instance) {
            ProjectRepo._instance = new ProjectRepo();
        }
        // logging.debug("ProjectRepo", "Projects:", ProjectRepo._instance.projects);
        return ProjectRepo._instance;
    }

    private projects: InitialState = {
        projectTypes: projectData["types"],
        entries: projectData["entries"].map(entry => {
            let entryState = {
                id: entry["id"],
                name: entry["name"],
                brief: entry["brief"],
                tags: entry["tags"],
                type: entry["type"],
            }
            if (entry["type"] === ProjectType.Experiences) {
                const experienceEntry: ExperienceState = {
                    ...entryState,
                    started: entry["started"] ?? "",
                    ended: entry["ended"] ?? ""
                };

                if (entry["started"] === undefined) {
                    logging.warn("ProjectRepo", `'started' field for entry id: ${entry["id"]}is undefined`, entry);
                }
                if (entry["ended"] === undefined) {
                    logging.warn("ProjectRepo", `'ended' field for entry id: ${entry["id"]}is undefined`, entry);
                }

                return experienceEntry;
            } else {
                const projectEntry: ProjectState = {
                    ...entryState,
                    source: entry["source"] ?? null,
                    access: entry["access"] ?? null
                };
                if (entry["source"] === undefined) {
                    logging.warn("ProjectRepo", `'source' field for entry id: ${entry["id"]}is undefined`, entry);
                }

                if (entry["access"] === undefined) {
                    logging.warn("ProjectRepo", `'access' field for entry id: ${entry["id"]}is undefined`, entry);
                }

                return projectEntry;
            }
        })
    };

    private tags: string[] = projectData["entries"]
            .flatMap(entry => entry["tags"] // flatten tag entries
                .map(tagName => tagName.toUpperCase())) // ensure consistent casing
            .filter((tag, index, tags) => tags.indexOf(tag) === index); // remove duplicates

    public getTags = (): string[] => {
        // logging.debug("ProjectRepo", "Tags:", this.tags);
        return this.tags;
    }

    public getOfType = (type: ProjectType): (ProjectState | ExperienceState)[] => {
        return this.projects.entries.filter(proj => proj.type === type);
    }

    public getProjectById(projectId: string): ProjectState | ExperienceState | null {
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