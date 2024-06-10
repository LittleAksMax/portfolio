import { FC } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import { ProjectType } from "../types";
import Banner from "../components/Banner/Banner";
import Page from "../components/Page/Page";

export const ExperiencesList: FC = () =>
    <ProjectList type={ProjectType.Experiences} />;

const Experiences: FC = () => {
    return (
        <Page banner={<Banner title="Work Experiences" />}>
            <div className="project-list-container">
                <ExperiencesList />
            </div>
        </Page>
    );
};

export default Experiences;