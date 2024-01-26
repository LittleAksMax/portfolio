import { InitialState } from "../types";

class ProjectRepo {
    private static _instance: ProjectRepo | null = null;

    public getInstance = (): ProjectRepo => {
        if (!ProjectRepo._instance) {
            ProjectRepo._instance = new ProjectRepo();
        }
        return ProjectRepo._instance;
    }

    state: InitialState = {
        tagTypes: [
            "Programming Language",
            "Cloud",
            "Web",
            "AWS",
            "Fundamentals",
            "Framework"
        ],
        projectTypes: [
            "coursework",
            "projects",
            "experience"
        ],
        projects: [
            {
                name: "Example Coursework",
                tags: [
                    {
                        name: "Java",
                        type: "Programming Language",
                        colour: "#FF9900"
                    }
                ],
                type: "coursework"
            },
            {
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
                type: "experience"
            },
            {
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
                type: "project"
            },
        ]
    };
}

export default ProjectRepo;