import { FC, ReactNode } from "react";
import "./UmlDoc.css";

interface UmlDocProps {
    href: string;
    children: ReactNode;
}

const UmlDoc: FC<UmlDocProps> = ({ href, children }: UmlDocProps) => (
    <div className="uml-doc">
    <div className="image-container">
        <img
            className="embedded-image"
            src={ href }
            alt="UML diagram"
        />
    </div>
    <div className="uml-description">
        { children }
    </div>
</div>
);

export default UmlDoc;