import { FC } from "react";
import { OverviewTemplate } from "../Templates";
import { SubprojectDefinition } from "../Util/Subproject";
import StackedImages from "../Util/StackedImages";

const GreenPyrusLtdOverview: FC = () => {
    return (
        <OverviewTemplate showDetailsPrompt="More detail about these projects">
            <p>
                I was employed to create <b>bespoke software</b> that would help in the automation of daily tasks
                for the benefit of the efficiency of the employees of this small online retail business.
            </p>

            <p>
                As the applications I made were bespoke to the company, I quickly picked up that
                a simple solution was often more effective than a solution that is necessarily 
                made to be really general and extensible.
            </p>

            <p>
                I learned to work with more <b>diverse tech stacks</b>, understanding and adapting others' code.
                Working with others highlighted the importance of <b>extensive</b> and <b>unambiguous documentation</b> and
                changed how I write code in my personal projects.
            </p>

            <p>
                Since the company was small, I got good opportunities to talk to the people I
                was making the software for. This <b>consistent communication</b> with the end-users
                allowed me to understand what makes <b>user interfaces</b> intuitive and
                comfortable to use day-to-day -- transferrable skills to any project.
            </p>

            <p>
                Consistent communication with the end-users underscored
                the importance of making many <b>prototypes</b> and <b>prioritising important tasks</b> to
                establish consistent strides in the progress of my projects (showcased below).
            </p>

            <SubprojectDefinition title="Inventory Manager">
                <p>
                    A full-stack application to manage and visualise inventory data.
                    Aimed to provide a responsive user experience, displaying data in an easily
                    navigable tabular format, powered by a full-featured backend.
                </p>
            </SubprojectDefinition>

            <StackedImages
                subject={"Inventory Manager"}
                srcs={["/InvMgr1.png", "/InvMgr2.png"]}
            />

            <SubprojectDefinition title="Desktop Application Integration">
                <p>
                    A suite of desktop utilities with an intuitive user interface,
                    aimed to automate routine tasks to boost productivity, demonstrating
                    the practical application of software in improving day-to-day operations.
                </p>
            </SubprojectDefinition>

            <StackedImages
                subject="ProgRunner"
                srcs={["/ProgRunner1.png", "/ProgRunner2.png"]}
            />

            <SubprojectDefinition title="Excel Converter">
                <p>
                    A service to process Excel files and update inventory data in a company database,
                    by monitoring file uploads in the cloud. 
                    The service had to handle and process Excel files holding inventory data.
                </p>
            </SubprojectDefinition>
        </OverviewTemplate>
    );
};

export default GreenPyrusLtdOverview;