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
                <li>Implementing the <strong>Controller-Service-Repository pattern</strong> for clear separation of concerns.</li>
                <li>Encapsulating business logic, and API interfaces in separate, independent modules.</li>
                <li>Organising API contracts to promote reuse and maintainability.</li>
                <li>Ensuring single responsibility for controllers and structuring endpoints effectively.</li>
            </ul>

            <h3>Security Implementations</h3>
            <ul>
                <li>Implementation of JWT authentication and claim-based authorisation.</li>
                <li>Strategies for <strong>API Key-based authentication</strong>.</li>
                <li>Combined authentication methods for <strong>multiple auth</strong></li>
            </ul>

            <h3>Advanced API Features:</h3>
            <ul>
                <li>Implementing <strong>filtering</strong>, <strong>sorting</strong>, and <strong>pagination</strong> to enhance API usability.</li>
                <li>Applying <strong>HATEOAS</strong> (Hypertext As The Engine Of Application State) for self-discoverable APIs. I applied this for the next and previous page links for pagination.</li>
                <li>Multiple approaches to <strong>API versioning</strong> and their best practices.</li>
                <li>Integrating <strong>health checks</strong> to ensure that the API's health is discoverable.</li>
                <li>Implemented <strong>response caching</strong> (client-side) and <strong>output caching</strong> (server-side).</li>
            </ul>

            <h3>Swagger Documentation</h3>
            <ul>
                <li>Utilising <strong>Swagger</strong> (OpenAPI) for comprehensive API documentation.</li>
                <li>Integrating authentication mechanisms, query parameters, body parameters, possible responses, and the structure of response messages.</li>
            </ul>
            
            <h3>SDK Development</h3>

            <ul>
                <li>Created an <strong>SDK</strong> for the Web API using <strong>Refit</strong>.</li>
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