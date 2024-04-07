import { FC } from "react";
import { DetailsTemplate } from "../Templates";
import UmlDoc from "./UmlDoc";

const JwtByHandDetails: FC = () => {
    const jwtModuleHref = "https://raw.githubusercontent.com/LittleAksMax/jwt-by-hand/main/doc/diagrams/jwt.drawio.png";
    const authModuleHref = "https://github.com/LittleAksMax/jwt-by-hand/raw/main/doc/diagrams/auth.drawio.png";
    const apiModuleHref = "https://github.com/LittleAksMax/jwt-by-hand/raw/main/doc/diagrams/data.drawio.png";

    return (
        <DetailsTemplate showOverviewPrompt="Take a look at the overview">
            <h2>What was this built with?</h2>

            <p>
                I built the project in <b>Typescript</b> because I wanted to leverage how
                well Javascript based languages handle JSON natively. This avoided
                any need to convert between the implementation languages built-in data
                structures and JSON. This let me get straight into the thick of it.
            </p>

            <h2>Structure of project</h2>

            <p>
                I split the project into three main components.
            </p>

            <ul>
                <li><b>JWT module</b> -- contains the 'business logic' for generating the access tokens, encoding them and decoding them.</li>
                <li><b>API module</b> -- mocks a minimal RESTful data API with a controller that makes use of the authentication module's services to verify tokens.</li>
                <li><b>Auth module</b> -- mocks a minimal RESTful authentication API with a controller that can register and login users. It also defines a service that is used to verify and generate tokens.</li>
            </ul>

            <h4>The JWT Module</h4>

            <UmlDoc href={jwtModuleHref}>
                <p>
                    The <code>TokenVerifier</code> and <code>TokenFactory</code> classes
                    are used to carry out the JWT's required functionality: <b>creation</b> and <b>verification</b>.
                    This objects both have a <code>HashMediator</code> injected into them, to choose
                    the used hashing algorithm.
                </p>
            </UmlDoc>

            <h4>The Authentication Module</h4>

            <UmlDoc href={authModuleHref}>
                <p>
                    The authentication module makes use of the JWT module to mock how an API would verify
                    JWT access keys. The <code>IdentityController</code> is in charge of authentication and
                    authorisation (although this would often be separated out in a real API).
                </p>
                <p>
                    The controller has the <code>UserService</code> injected for managing users in
                    the in-memory database (since I didn't need a robust data storage solution for
                    this project). It also has the <code>IdentityService</code> for signing tokens.
                </p>
            </UmlDoc>

            <h4>The API Module</h4>

            <UmlDoc href={apiModuleHref}>
                <p>
                    This module contains a simple <code>DataController</code> that
                    interacts with an in-memory database. The <code>IdentityService</code> from
                    the authentication module is injected into the controller, so it can
                    verify incoming tokens.
                </p>
            </UmlDoc>

            <h2>What did I learn?</h2>

            <p>
                I used this project as a change to take advantage of the <b>Design
                Patterns</b> I had recently read about in the book 'Design Patterns
                Elements of Reusable Object-Oriented Software'
                (<a href="https://www.google.co.uk/books/edition/Design_Patterns/6oHuKQe3TjQC?hl=en&gbpv=0&kptab=overview">Google books link</a>).
                This project was a good place to practice applying these design patterns on a small scale.
            </p>

            <p>
                I ended up making use of the following patterns:
            </p>

            <ul>
                <li><b>Factory</b> -- for generating tokens.</li>
                <li><b>Mediator</b> -- make it easy to choose between any possible hashing algorithms. Each hashing algorithm needs to have a corresponding <code>IHashHandler</code> implementation.</li>
            </ul>

            <p>
                This project, although not a full-stack application, definitely achieved
                its goal of being a fulfilling learning experience. I learned about how JWT
                works, since I had to do a decent amount of extra reading on the topic.
            </p>
        </DetailsTemplate>
    );
};

export default JwtByHandDetails;