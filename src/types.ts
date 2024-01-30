
export enum ProjectType {
    Projects = "projects",
    Courseworks = "courseworks",
    Experiences = "experiences"
}

export interface InitialState {
    projectTypes: string[];
    entries: ProjectState[];
}

export interface TagsAvailable {
    types: string[];
    tags: TagState[];
}

export interface ProjectState {
    id: string;
    name: string;
    tags: TagState[];
    type: string;
}

export interface TagState {
    name: string;
    type: string;
    colour: string;
}