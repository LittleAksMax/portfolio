import { FC } from "react";
import { DetailsTemplate } from "../Templates";

const RestApiCourseDetails: FC = () => {
    return (
        <DetailsTemplate showOverviewPrompt="Take a look at the overview">
            
            <h2>What was covered?</h2>

            <h3>Understanding RESTful Principles</h3>
            
            <ul>
                <li>Introduction to what makes an API RESTful, including statelessness, resource identification, and the use of standard HTTP methods.</li>
                <li>Choosing appropriate HTTP verbs for endpoints and status codes for responses.</li>
                <li>Endpoint structuring and naming conventions.</li>
            </ul>

            <h3>Structuring and Architecture of REST APIs</h3>

            <ul>
                <li>Implementing the <b>Controller-Service-Repository pattern</b> for clear separation of concerns.</li>
                <li>Encapsulating business logic, and API interfaces in separate, independent modules.</li>
                <li>Organising API contracts to promote reuse and maintainability.</li>
                <li>Ensuring single responsibility for controllers and structuring endpoints effectively.</li>
            </ul>

            <h3>Security Implementations</h3>
            <ul>
                <li>Implementation of JWT authentication and claim-based authorisation.</li>
                <li>Strategies for <b>API Key-based authentication</b>.</li>
                <li>Combined authentication methods for <b>multiple auth</b></li>
            </ul>

            <h3>Advanced API Features:</h3>
            <ul>
                <li>Implementing <b>filtering</b>, <b>sorting</b>, and <b>pagination</b> to enhance API usability.</li>
                <li>Applying <b>HATEOAS</b> (Hypertext As The Engine Of Application State) for self-discoverable APIs. I applied this for the next and previous page links for pagination.</li>
                <li>Multiple approaches to <b>API versioning</b> and their best practices.</li>
                <li>Integrating <b>health checks</b> to ensure that the API's health is discoverable.</li>
                <li>Implemented <b>response caching</b> (client-side) and <b>output caching</b> (server-side).</li>
            </ul>

            <h3>Swagger Documentation</h3>
            <ul>
                <li>Utilising <b>Swagger</b> (OpenAPI) for comprehensive API documentation.</li>
                <li>Integrating authentication mechanisms, query parameters, body parameters, possible responses, and the structure of response messages.</li>
            </ul>
            
            <h3>SDK Development</h3>

            <ul>
                <li>Created an <b>SDK</b> for the Web API using <b>Refit</b>.</li>
                <li>Utilising <code>HttpClient</code> for maintaining access tokens, facilitating fluid API interactions.</li>
            </ul>

            <h3>Adopting Minimal APIs</h3>
            <ul>
                <li>Transitioning from traditional Controller-Service-Repository patterns to Minimal API designs.</li>
                <li>Aligning with modern backend development trends and best practices.</li>
            </ul>
        </DetailsTemplate>
    );
};

export default RestApiCourseDetails;