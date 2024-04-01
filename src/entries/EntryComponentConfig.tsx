import AwsFundamentalsCsharp from "./AwsFundamentalsCsharp/AwsFundamentalsCsharp";
import GreenPyrusLtd from "./GreenPyrusLtd/GreenPyrusLtd";
import JwtByHand from "./JwtByHand/JwtByHand";
import Portfolio from "./Portfolio/Portfolio";
import RestApiCourse from "./RestApiCourse/RestApiCourse";

const EntriesMap = {
    "aws-fundamentals-course": <AwsFundamentalsCsharp />,
    "greenpyrus-ltd": <GreenPyrusLtd />,
    "jwt-by-hand": <JwtByHand />,
    "rest-api-course": <RestApiCourse />,
    "portfolio": <Portfolio />
};

export default EntriesMap;