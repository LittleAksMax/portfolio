import { FC, ReactNode } from "react";
import "./Subproject.css";

interface SubprojectDefinitionProps {
    title: string;
    children: ReactNode;
}

export const SubprojectDefinition: FC<SubprojectDefinitionProps> = ({ title, children }: SubprojectDefinitionProps) => (
    <div className="subproject-container">
        <div className="subproject-title">
            <h2>{ title }</h2>
        </div>
        <div className="subproject-description">
            { children }
        </div>
    </div>
);