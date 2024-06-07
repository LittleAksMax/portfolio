import { FC } from "react";
import { DetailsTemplate } from "../Templates";

const GreenPyrusLtdDetails: FC = () => {
    return (
        <DetailsTemplate showOverviewPrompt="Look at an overview of what I did at GreenPyrus">        
            <h2>Inventory Manager</h2>

            <ul>
                <li>Frontend using <strong>ReactJS</strong> with <strong>Typescript</strong>.</li>
                <li>Created <strong>SDK</strong> from scratch by handling using async and promises.</li>
                <li>Visualised data taken from the backend into tables created using the <code>react-table</code> module.</li>

                <li>Backend was a REST API using <strong>ASP.NET Core</strong>.</li>
                <li>Tested controllers with a <strong>TDD</strong> approach using <strong>xUnit</strong> and mocking with <strong>Moq</strong></li>
                <li>Created using <strong>API key authentication</strong> for simplicity (given bespoke nature of software).</li>
                <li>REST API implemented certain advanced features: <strong>filtering</strong>, <strong>pagination</strong>, <strong>caching</strong> (with <strong>Redis</strong>)</li>
            </ul>

            <h3>Challenges and Learnings</h3>

            <p>
                Integrating the frontend with the backend posed a significant challenge due to the complex
                data interactions required. I learned to design RESTful APIs that effectively communicate
                with client-side applications and gained invaluable experience in developing and consuming
                APIs, enhancing my understanding of full-stack development processes.
            </p>

            <p>
                This was also the largest application I have had to develop up to this point, which meant
                that a lot of aspects of software development I hadn't considered came
                up: <strong>time management</strong>, <strong>organisation</strong>, and thorough <strong>testing</strong> (using
                TDD and <strong>Postman</strong>). It was also the first time I had to
                explicitly distinguish between development and production environments, and also had to
                use <strong>Docker</strong> to compose a development environment with a database.
            </p>

            <p>
                Overall, the large focus on both client and server side meant that I had to employ best practices
                and leverage the technologies at my disposal effectively.
            </p>

            <h2>Desktop Application</h2>

            <ul>
                <li>Used <strong>PyQt5</strong> to create an extensible user interface.</li>
                <li>Connected the STDOUT to a text box in the GUI using <strong>threads</strong>.</li>
                <li>Had to adapt pre-existing <strong>Python</strong> scripts into libraries. These libraries could be invoked from the central application that connected this 'business logic' with the interface.</li>
                <li>Optimised the usage of a 3rd party currency exchange rates API by caching records to avoid the request limit.</li>
            </ul>

            <h3>Challenges and Learnings</h3>

            <p>
                Designing an intuitive, user-friendly interface that catered to non-technical
                and technical users alike was a challenging aspect of this project. It taught me the
                importance of UI design in software development and deepened my understanding
                of Python and Qt framework, improving my ability to develop desktop applications.
            </p>

            <p>
                Another challenge of the project was connecting figuring out how to visualise the
                console output from the pre-existing scripts into the text box on the GUI. The 
                task called for the usage of threading and using the <strong>signals</strong> and <strong>slots</strong> feature
                of the <strong>Qt</strong> framework. I implemented it by having a listener thread listened to
                the logger used and captured the text in it to display in the text box as well.
            </p>
     
            <h2>Excel Converter</h2>

            <ul>
                <li>Developed a simple Python Lambda that activated on file change in an S3 bucket.</li>
                <li>Created fine-grained <strong>IAM</strong> <strong>roles</strong> and <strong>policies</strong> using the <i>Principle of Least Privilege</i></li>
                <li>Integrated a simple <strong>CI/CD</strong> pipeline using <strong>GitHub Actions</strong>.</li>
                <li>Managed versioning of <strong>Docker</strong> images in <strong>ECR</strong> (via CI/CD).</li>
            </ul>

            <h3>Challenges and Learnings</h3>

            <p>
                One of the main challenges was efficiently handling and parsing large Excel
                files without exceeding Lambda's execution time and memory limits.
                Through this project, I honed my skills in <strong>cloud-based architecture</strong> and
                got experience with techniques for data processing in a serverless environment.
                I also got some hands-on experience with using <strong>triggers</strong> in <strong>S3</strong> to activate the
                Lambda.
            </p>
        </DetailsTemplate>
    );
};

export default GreenPyrusLtdDetails;