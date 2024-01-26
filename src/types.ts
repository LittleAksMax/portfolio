
export enum ProjectType {
    Projects = "projects",
    Courseworks = "courseworks",
    Experiences = "experiences"
}

export interface InitialState {
    tagTypes: string[];
    projectTypes: string[];
    projects: ProjectState[];
}

export interface ProjectState {
    name: string;
    tags: TagState[];
    type: string;
}

export interface TagState {
    name: string;
    type: string;
    colour: string;
}