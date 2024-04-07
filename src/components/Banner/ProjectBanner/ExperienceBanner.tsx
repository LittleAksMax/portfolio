import { FC } from "react";
import Banner from "../Banner";
import Tags from "../../tags/Tags";
import ExperienceDates from "./ExperienceDates";
import "./SpecialisedBanner.css";

interface ExperienceBannerProps {
    projectName: string;
    projectSubtitle: string;
    started: string; // when did work experience start?
    ended: string; // when did work experience end?
    tags: string[];
}

const ExperienceBanner: FC<ExperienceBannerProps> = ({
    projectName, projectSubtitle, started, ended, tags
}: ExperienceBannerProps) => {
    return (
        <Banner title={ projectName } subtitle={projectSubtitle}>
            <div className="project-data">
                <Tags tags={ tags } />
                <ExperienceDates started={ started } ended={ ended } />
            </div>
        </Banner>
    );
};

export default ExperienceBanner;
