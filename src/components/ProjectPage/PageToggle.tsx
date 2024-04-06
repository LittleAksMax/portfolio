import { Dispatch, FC, SetStateAction } from "react";
import "./PageToggle.css";

interface PageToggleProps {
    isOverview: boolean;
    setIsOverview: Dispatch<SetStateAction<boolean>>;
}

const PageToggle: FC<PageToggleProps> = ({ isOverview, setIsOverview }: PageToggleProps) => (
    <div className="toggle-container" onClick={() => setIsOverview(!isOverview)}>
        <div className={`slider ${isOverview ? '' : 'details'}`}>
            {isOverview ? 'Overview' : 'Details'}
        </div>
    </div>
);

export default PageToggle;