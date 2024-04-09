import { FC } from "react";
import { OverviewTemplate } from "../Templates";

const JwtByHandOverview: FC = () => {
    return (
        <OverviewTemplate showDetailsPrompt="Take a look at the details">
            <h2>Why did I build this?</h2>

            <p>
                In the current landscape of web development, JSON Web Token (JWT)
                authentication stands as a fundamental concept for securing Web APIs.
                Despite its widespread adoption, most learning resources and projects
                gravitate towards leveraging pre-built libraries or modules. These tools,
                while accelerating development, obscure the underlying mechanics of JWT
                handling with layers of abstraction, like Python's function decorators
                in <a href="https://flask.palletsprojects.com/en/3.0.x/">Flask</a> or method
                attributes in <a href="https://dotnet.microsoft.com/en-us/apps/aspnet">ASP.NET Core</a>.
                This approach, although efficient, offers limited educational value for those new to
                the concept of JWT.
            </p>

            <p>
                I firmly believe implementing concepts from the ground up makes for a great learning
                experience, and really allows the concept to stick in my brain. Delving deep into
                JWT's intricacies allowed me to confront and navigate the challenges inherent in
                its implementation, turning each obstacle into a learning opportunity.
            </p>

            <h2>Reflections and Next Steps</h2>

            <p>
                The focus of the project was on developing a scalable, yet comprehensible,
                JWT authentication system. While the initial implementation centers around
                the <i>HS256 hashing algorithm</i>, the architecture of the module invites
                further exploration and integration of other algorithms, demonstrating
                the system's extensibility.
            </p>

            <p>
                One deliberate omission was the implementation of refresh tokens.
                Given their validation principles closely mirror those of access tokens,
                which were already covered, I chose to concentrate on the core aspects
                of JWT management.
            </p>

            <p>
                Another consideration was the development of a user interface.
                Although creating such an interface would make the project more rounded,
                it risked veering off into replicating existing solutions
                like <a href="https://jwt.io">jwt.io</a>, diverting focus from the
                project's primary objectives.
            </p>

            <p>
                Looking ahead, there are avenues for expansion, such as exploring additional
                hashing algorithms and considering the integration of refresh tokens.
                However, the project's essence lies not in its feature set but in the depth of
                understanding it fosters about JWT authentication.
            </p>
        </OverviewTemplate>
    );
};

export default JwtByHandOverview;