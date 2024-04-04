import { FC } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import { ProjectType } from "../types";
import Banner from "../components/Banner/Banner";
import Page from "../components/Page/Page";

const Experiences: FC = () => {
    return (
        <Page banner={<Banner title="Work Experiences" />}>
            <ProjectList type={ProjectType.Experiences} />
        </Page>
    );
};

export default Experiences;