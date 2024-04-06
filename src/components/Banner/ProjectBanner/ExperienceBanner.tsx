import { FC, ReactNode } from "react";
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
    pageToggle: ReactNode;
}

const ExperienceBanner: FC<ExperienceBannerProps> = ({ projectName, projectSubtitle, started, ended, tags, pageToggle }: ExperienceBannerProps) => {
    return (
        <Banner title={ projectName } subtitle={projectSubtitle}>
            <div className="project-data">
                <Tags tags={ tags } />
                <ExperienceDates started={ started } ended={ ended } />
            </div>
            <br />
            <div className="page-toggle-container">
                { pageToggle }
            </div>
        </Banner>
    );
};

export default ExperienceBanner;
