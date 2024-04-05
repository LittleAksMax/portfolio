
export enum ProjectType {
    Projects = "projects",
    Certifications = "certifications",
    Experiences = "experiences"
}

export interface InitialState {
    projectTypes: string[];
    entries: ProjectState[];
}

export interface ProjectState {
    id: string;
    name: string;
    brief: string;
    tags: string[];
    type: string;
    access: string | null;
    source: string | null;
}
