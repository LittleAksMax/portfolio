import { FC } from "react";
import "./Certifications.css";

interface CertificationProps {
    src: string;
}

const Certification: FC<CertificationProps> = ({ src }: CertificationProps) => (
    <div className="image-container">
        <div className="certification-container">
            <img
                className="certification"
                src={src}
                alt="Certification"
            />
        </div>
    </div>
);

export default Certification;