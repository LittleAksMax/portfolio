import { FC } from "react";
import { OverviewTemplate } from "../Templates";

const JwtByHandOverview: FC = () => {
    return (
        <OverviewTemplate showDetailsPrompt="Take a look at the details">
            <h2>Why did I build this?</h2>

            <p>
                Nowadays, it seems that JSON Web Token authentication is the standard
                go-to method for implementing authentication in scalable REST APIs. Most
                tutorials and projects that use JWT end up using a module or library that
                completely abstracts away the actual handling of the web token, and hides
                it behind function decorators in Python (like in <a href="https://flask.palletsprojects.com/en/3.0.x/">Flask</a>'s
                JWT and general authentication extensions) or under method attributes in C#
                (like in <a href="https://dotnet.microsoft.com/en-us/apps/aspnet">ASP.NET Core</a>)
                with some basic boilerplate that isn't explained very well in most tutorials.
            </p>

            <p>
                In my eyes, although this abstraction of the method is incredibly useful
                for development speed, it isn't ideal for someone that is new to a concept
                and is simply trying to understand it.
                This project allowed me to aggregate a lot of my programming skills to
                create a small module that applies a new piece of technology I had
                just recently been acquainted with.
            </p>

            <p>
                For me, implementing concepts from the ground up makes for a great learning
                experience, and really allows the concept to stick in my brain. This is especially
                due to how much time I end up spending having to really look at the problem
                through a microscope. When thinking about how to implement certain feature, I
                end up spending a lot of time on it.
            </p>

            <h2>Possible next steps</h2>

            <p>
                Although the module is made to be easily extensible, I only implemented usage
                of HS256 hashing algorithm.
            </p>

            <p>
                I make a note about not implementing refresh tokens. I did not include
                refresh tokens in this project because they are validated along a similar
                principle to the access tokens I did already implement.
            </p>

            <p>
                I could have also created a user interface for the program that makes
                use of the module to make it a more complete project. However, that would
                have effectively just been a clone of <a href="https://jwt.io/">jwt.io</a>.
                I also didn't see a point in investing time in something that was not my
                intended goal with the project.
            </p>
        </OverviewTemplate>
    );
};

export default JwtByHandOverview;