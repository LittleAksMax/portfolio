import { InitialState, ProjectState, ProjectType } from "../types";

class ProjectRepo {
    private static _instance: ProjectRepo | null = null;

    public static getInstance = (): ProjectRepo => {
        if (!ProjectRepo._instance) {
            ProjectRepo._instance = new ProjectRepo();
        }
        return ProjectRepo._instance;
    }

    private state: InitialState = {
        tagTypes: [
            "Programming Language",
            "Cloud",
            "Web",
            "AWS",
            "Fundamentals",
            "Framework"
        ],
        projectTypes: [
            "courseworks",
            "projects",
            "experiences"
        ],
        projects: [
            {
                id: "example-coursework",
                name: "Example Coursework",
                tags: [
                    {
                        name: "Java",
                        type: "Programming Language",
                        colour: "#FF9900"
                    }
                ],
                type: "courseworks"
            },
            {
                id: "example-work-experience",
                name: "Example Work Experience",
                tags: [
                    {
                        name: "Python",
                        type: "Programming Language",
                        colour: "#FF9900"
                    },
                    {
                        name: "MariaDb",
                        type: "Database",
                        colour: "#FF9900",
                    },
                    {
                        name: "AWS Lambda",
                        type: "AWS",
                        colour: "#FF9900",
                    }
                ],
                type: "experiences"
            },
            {
                id: "example-personal-project",
                name: "Example Personal Project",
                tags: [
                    {
                        name: "C#",
                        type: "Programming Language",
                        colour: "#FF9900"
                    },
                    {
                        name: "ASP.NET Core",
                        type: "Framework",
                        colour: "0022FF"
                    }
                ],
                type: "projects"
            },
        ]
    };

    public getOfType = (type: ProjectType): ProjectState[] => {
        return this.state.projects.filter(proj => proj.type === type);
    }
}

export default ProjectRepo;