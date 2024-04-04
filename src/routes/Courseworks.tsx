import { FC } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import { ProjectType } from "../types";
import Page from "../components/Page/Page";
import Banner from "../components/Banner/Banner";

const Courseworks: FC = () => {
    return (
        <Page banner={<Banner title="Notable University Courseworks" />}>
            <ProjectList type={ProjectType.Courseworks} />
        </Page>
    );
};

export default Courseworks;