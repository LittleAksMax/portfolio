import { FC } from "react";
import "./ExperienceDates.css"

interface ExperienceDatesProps {
    started: string;
    ended: string;
}

const ExperienceDates: FC<ExperienceDatesProps> = ({ started, ended }: ExperienceDatesProps) => {
    return (
        <div className="date-container">
            <span className="start-date">{ started }</span>
            <span className="date-separator"> to </span>
            <span className="end-date">{ ended }</span>
        </div>
    );
};

export default ExperienceDates;
