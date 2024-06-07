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
                The decision to build the JWT implementation from scratch in <strong>Typescript</strong> was
                driven by the language's native handling of JSON, streamlining the integration of
                JWT's JSON-based tokens without the need for converting data structures.
                This approach allowed for a direct dive into the nuances of JWT, bypassing the
                overhead typically associated with language-specific data handling quirks.
            </p>

            <h2>Structure of project</h2>

            <p>
                I split the project into three main components.
            </p>

            <h4>The JWT Module</h4>

            <UmlDoc href={jwtModuleHref}>
                <p>
                    This cornerstone of the project encapsulates
                    the essential logic for JWT manipulation, including token generation,
                    encoding, and decoding. It leverages two primary classes: <code>TokenVerifier</code>
                    and <code>TokenFactory</code>, both of which interact with a <code>HashMediator</code>.
                    This mediator facilitates the flexible selection of hashing algorithms,
                    accommodating various security requirements.
                    I also created <code>Encoder</code> and <code>Decoder</code> classes to
                    encapsulate the functionality for creating and verifying the access tokens from
                    those classes.
                </p>
            </UmlDoc>

            <h4>The Authentication Module</h4>

            <UmlDoc href={authModuleHref}>
                <p>
                    Designed to simulate a authentication flow, this module uses the JWT
                    module to validate JWT access tokens. The <code>IdentityController</code> serves
                    as the central entity for authentication and authorisation processes,
                    interfaced with a <code>UserService</code> for user management and an
                    <code>IdentityService</code> for token operations.
                </p>
            </UmlDoc>

            <h4>The API Module</h4>

            <UmlDoc href={apiModuleHref}>
                <p>
                    This module simulates a minimalistic RESTful API, incorporating
                    a <code>DataController</code> that interacts with an in-memory database
                    for data operations. The integration with the <code>IdentityService</code> ensures
                    that incoming tokens are appropriately verified.
                </p>
            </UmlDoc>

            <h2>Challenges and Insights</h2>

            <p>
                Embarking on this project from scratch introduced a range of challenges,
                notably the intricate details of JWT and the nuances of secure token
                handling. This journey not only reinforced the importance of robust
                security practices but also offered a hands-on opportunity to explore
                the depths of stateless authentication mechanisms.
            </p>

            <p>
                A significant aspect of this project was the application of design patterns,
                inspired by the seminal work "Design Patterns: Elements of Reusable Object-Oriented
                Software". (<a href="https://www.google.co.uk/books/edition/Design_Patterns/6oHuKQe3TjQC?hl=en&gbpv=0&kptab=overview">Google books link</a>)
                The patterns adopted in this project include:
            </p>

            <ul>
                <li><strong>Factory</strong> -- Utilised for the dynamic generation of tokens, facilitating a clean and modular approach to token creation.</li>
                <li><strong>Mediator</strong> -- Implemented to streamline the selection process among various hashing algorithms, ensuring that each algorithm's implementation could be easily swapped or extended without widespread modifications.</li>
            </ul>
        </DetailsTemplate>
    );
};

export default JwtByHandDetails;