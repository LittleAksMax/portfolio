import { FC } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import { ProjectType } from "../types";
import Page from "../components/Page/Page";
import Banner from "../components/Banner/Banner";

const Certifications: FC = () => {
    return (
        <Page banner={<Banner title="Certifications" />}>
            <ProjectList type={ProjectType.Certifications} />
        </Page>
    );
};

export default Certifications;