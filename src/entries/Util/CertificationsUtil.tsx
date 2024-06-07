import { FC } from "react";
import "./Certifications.css";

interface CertificationProps {
    src: string;
}

const Certification: FC<CertificationProps> = ({ src }: CertificationProps) => (
    <div className="image-container">
        <figure className="certification-container">
            <img
                className="certification"
                src={src}
                alt="Certification"
            />
            <figcaption hidden>Certificate of Completion</figcaption>
        </figure>
    </div>
);

export default Certification;