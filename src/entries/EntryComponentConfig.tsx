import AwsFundamentalsCSharpOverview from "./AwsFundamentalsCSharp/AwsFundamentalsCSharpOverview";
import AwsFundamentalsCSharpDetails from "./AwsFundamentalsCSharp/AwsFundamentalsCSharpDetails";
import GreenPyrusLtdOverview from "./GreenPyrusLtd/GreenPyrusLtdOverview";
import GreenPyrusLtdDetails from "./GreenPyrusLtd/GreenPyrusLtdDetails";
import JwtByHandDetails from "./JwtByHand/JwtByHandDetails";
import JwtByHandOverview from "./JwtByHand/JwtByHandOverview";
import RestApiCourseOverview from "./RestApiCourse/RestApiCourseOverview";
import RestApiCourseDetails from "./RestApiCourse/RestApiCourseDetails";
import PortfolioOverview from "./Portfolio/PortfolioOverview";
import PortfolioDetails from "./Portfolio/PortfolioDetails";

const EntriesMap = {
    "aws-fundamentals-course": {
        overview: <AwsFundamentalsCSharpOverview />,
        details: <AwsFundamentalsCSharpDetails />
    },
    "greenpyrus-ltd": {
        overview: <GreenPyrusLtdOverview />,
        details: <GreenPyrusLtdDetails />
    },
    "jwt-by-hand": {
        overview: <JwtByHandOverview />,
        details: <JwtByHandDetails />
    },
    "rest-api-course": {
        overview: <RestApiCourseOverview />,
        details: <RestApiCourseDetails />
    },
    "portfolio": {
        overview: <PortfolioOverview />,
        details: <PortfolioDetails />
    }
};

export default EntriesMap;