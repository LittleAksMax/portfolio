import { FC } from "react";
import ProjectUrls from "./ProjectUrls";
import { ProjectUrlType } from "./types";
import Banner from "../Banner";
import Tags from "../../tags/Tags";
import ExperienceDates from "./ExperienceDates";

interface ExperienceBannerProps {
    projectName: string;
    projectSubtitle: string;
    started: string; // when did work experience start?
    ended: string; // when did work experience end?
    tags: string[];
}

const ExperienceBanner: FC<ExperienceBannerProps> = ({ projectName, projectSubtitle, started, ended, tags }: ExperienceBannerProps) => {
    return (
        <Banner title={ projectName } subtitle={projectSubtitle}>
            <Tags tags={ tags } />
            <ExperienceDates started={ started } ended={ ended } />
        </Banner>
    );
};

export default ExperienceBanner;
