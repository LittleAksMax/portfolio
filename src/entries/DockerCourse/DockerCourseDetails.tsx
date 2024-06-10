import { FC } from "react";
import { DetailsTemplate } from "../Templates";

const DockerCourseDetails: FC = () => {
    return (
        <DetailsTemplate showOverviewPrompt={"Overview of this course"}>
            <h2>What was covered?</h2>

            <h3>Basic Container Manipulation</h3>

            <ul>
                <li>The fundamentals of creating containers from images.</li>
                <li>Customising the container settings (port mapping, names, environment variables).</li>
                <li>Understanding container settings and inspecting containers.</li>
                <li>Getting comfortable with the <strong>Docker CLI</strong>.</li>
                <li>Getting comfortable with <strong>Docker Desktop</strong>.</li>
                <li>Differences between <code>CMD</code> and <code>ENTRYPOINT</code> commands and how they can be used to implement default parameters.</li>
            </ul>

            <h3>Dockerfiles</h3>

            <ul>
                <li>Building more complex images using <code>Dockerfile</code>s.</li>
                <li>The basic <code>Dockerfile</code> commands.</li>
                <li>The concept of a <strong>build context</strong>.</li>
                <li>How to structure and understand <code>Dockerfile</code>s.</li>
                <li>The concept of <strong>layers</strong> in Docker images and how <strong>caching</strong> works in Docker.</li>
                <li>How the concept of layers works with <strong>nested images</strong>.</li>
            </ul>

            <h3>Docker Compose</h3>

            <ul>
                <li>Orchestrating multiple containers with <code>docker compose</code>.</li>
                <li>All the relevant customisation already visited translated to <code>docker compose</code>.</li>
                <li>Getting comfortable with the <strong>Docker Compose CLI</strong>.</li>
                <li>How we can use <code>docker compose</code> for seeding a database using a <strong>dependent service</strong>.</li>
            </ul>

            <h3>Data Persistence</h3>

            <ul>
                <li>The distinction between <strong>volumes</strong>, <strong>binds</strong> and <strong>tmpfs</strong>.</li>
                <li><strong>Backing up and restoring volumes</strong> effectively (using a lightweight OS image).</li>
            </ul>

            <h3>Docker Networks</h3>

            <ul>
                <li>Understanding how <strong>Docker networks</strong> work.</li>
                <li>The differences between <strong>bridge</strong>, <strong>host</strong> and <strong>none</strong> networks.</li>
                <li>How Docker networks relate to <code>docker compose</code>.</li>
                <li>How we can do <strong>DNS mapping</strong> using networks like in <code>docker compose</code>.</li>
                <li>Creating custom <strong>bridge networks</strong>.</li>
            </ul>

            <h3>Practical applications of Docker containers</h3>

            <ul>
                <li>Basic <strong>CI integration</strong> and <strong>integration testing</strong>.</li>
                <li><strong>Publishing Docker containers</strong> to external repositories (and pulling them back down).</li>
            </ul>

            <h3>Container Security</h3>

            <ul>
                <li>Basic security concerns in containerisation.</li>
                <li>Mitigating <strong>container escape</strong> vulnerabilities by equipping another user in the <code>Dockerfile</code> -- running containers as non-root.</li>
                <li><strong>Image scanning</strong> with <code>docker scout</code> and how this can be integrated into a <strong>CI pipeline</strong>.</li>
            </ul>

            <h3>Container Hosting Solutions</h3>

            <ul>
                <li>Mention of popular cloud platforms (AWS, Azure, GCP) and how their services leverage Docker containers.</li>
                <li>A brief walk-through of deploying a containerised application to the cloud.</li>
            </ul>

        </DetailsTemplate>
    );
};

export default DockerCourseDetails;