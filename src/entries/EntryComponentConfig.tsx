import AwsFundamentalsCSharpOverview from "./AwsFundamentalsCSharp/AwsFundamentalsCSharpOverview";
import AwsFundamentalsCSharpDetails from "./AwsFundamentalsCSharp/AwsFundamentalsCSharpDetails";
import GreenPyrusLtdOverview from "./GreenPyrusLtd/GreenPyrusLtdOverview";
import GreenPyrusLtdDetails from "./GreenPyrusLtd/GreenPyrusLtdDetails";
import RestApiCourseOverview from "./RestApiCourse/RestApiCourseOverview";
import RestApiCourseDetails from "./RestApiCourse/RestApiCourseDetails";
import PortfolioOverview from "./Portfolio/PortfolioOverview";
import PortfolioDetails from "./Portfolio/PortfolioDetails";
import DockerCourseOverview from "./DockerCourse/DockerCourseOverview";
import DockerCourseDetails from "./DockerCourse/DockerCourseDetails";
import CS261Overview from "./CS261SoftwareEngineeringGroupProject/CS261Overview";
import CS261Details from "./CS261SoftwareEngineeringGroupProject/CS261Details";

const EntriesMap = {
    "aws-fundamentals-course": {
        overview: <AwsFundamentalsCSharpOverview />,
        details: <AwsFundamentalsCSharpDetails />
    },
    "greenpyrus-ltd": {
        overview: <GreenPyrusLtdOverview />,
        details: <GreenPyrusLtdDetails />
    },
    "rest-api-course": {
        overview: <RestApiCourseOverview />,
        details: <RestApiCourseDetails />
    },
    "portfolio": {
        overview: <PortfolioOverview />,
        details: <PortfolioDetails />
    },
    "docker-course": {
        overview: <DockerCourseOverview />,
        details: <DockerCourseDetails />
    },
    "cs261-junction-modeller": {
        overview: <CS261Overview />,
        details: <CS261Details />
    }
};

export default EntriesMap;