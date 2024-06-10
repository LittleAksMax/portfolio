import { FC } from "react";
import "./ExperienceDates.css"

interface ExperienceDatesProps {
    started: string;
    ended: string;
}

export const ExperienceDatesInline: FC<ExperienceDatesProps> = ({ started, ended }: ExperienceDatesProps) =>
    <em className="experience-card-dates">
        (
            <span className="experience-card-dates-start">{ started }</span>
            <span>-</span>
            <span className="experience-card-dates-end">{ ended }</span>
        )
    </em>;

export const ExperienceDates: FC<ExperienceDatesProps> = ({ started, ended }: ExperienceDatesProps) => {
    return (
        <div className="date-container">
            <ExperienceDatesInline started={ started } ended={ ended } />
        </div>
    );
};
