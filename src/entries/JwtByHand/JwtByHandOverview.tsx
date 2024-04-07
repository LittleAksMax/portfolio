import { FC } from "react";
import { OverviewTemplate } from "../Templates";

const JwtByHandOverview: FC = () => {
    return (
        <OverviewTemplate showDetailsPrompt="Take a look at the details">
            <h2>Why did I build this?</h2>

            <p>Some content</p>
        </OverviewTemplate>
    );
};

export default JwtByHandOverview;