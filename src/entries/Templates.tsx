import { FC, ReactNode } from "react";
import "./Templates.css";
// import logging from "../logging";

interface TemplateProps {
    children?: ReactNode;
}

interface DetailsProps extends TemplateProps {
    showOverviewPrompt: string;
}

export const DetailsTemplate: FC<DetailsProps> = ({ children, showOverviewPrompt }: DetailsProps) => {
    // URL manipulation to dynamically figure out the href to the overview page
    const href = window.location.href;
    const hrefToOverview = href.substring(0, href.length - "/details".length);
    
    return (
        <div className="template-container">
            <div className="details-container">
                <article className="details-content">
                    { children }
                </article>
            </div>
            <div className="toggle-page-container">
                <CrossLink togglePrompt={showOverviewPrompt} href={hrefToOverview} />
            </div>
        </div>
    );
};

interface OverviewProps extends TemplateProps {
    showDetailsPrompt: string;
}

export const OverviewTemplate: FC<OverviewProps> = ({ children, showDetailsPrompt }: OverviewProps) => {
    // URL manipulation to dynamically figure out the href to the details page
    const hrefToDetails = window.location.href + "/details";

    return (
        <div className="template-container">
            <div className="overview-container">
                <article className="overview-content">
                    { children }
                </article>
            </div>
            <div className="toggle-page-container">
                <CrossLink togglePrompt={showDetailsPrompt} href={hrefToDetails} />
            </div>
        </div>
    );
};

interface CrossLinkProps {
    togglePrompt: string;
    href: string;
}

const CrossLink: FC<CrossLinkProps> = ({ togglePrompt, href }: CrossLinkProps) => (
    <div>
        <a className="toggle-page-button" href={href}>
            {togglePrompt}
        </a>
    </div>
);