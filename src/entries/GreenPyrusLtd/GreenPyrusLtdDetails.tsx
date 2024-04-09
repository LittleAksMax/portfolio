import { FC } from "react";
import { DetailsTemplate } from "../Templates";

const GreenPyrusLtdDetails: FC = () => {
    return (
        <DetailsTemplate showOverviewPrompt="Look at an overview of what I did at GreenPyrus">        
            <h2>Inventory Manager</h2>

            <ul>
                <li>Frontend using <b>ReactJS</b> with <b>Typescript</b>.</li>
                <li>Created <b>SDK</b> from scratch by handling using async and promises.</li>
                <li>Visualised data taken from the backend into tables created using the <code>react-table</code> module.</li>

                <li>Backend was a REST API using <b>ASP.NET Core</b>.</li>
                <li>Tested controllers with a <b>TDD</b> approach using <b>xUnit</b> and mocking with <b>Moq</b></li>
                <li>Created using <b>API key authentication</b> for simplicity (given bespoke nature of software).</li>
                <li>REST API implemented certain advanced features: <b>filtering</b>, <b>pagination</b>, <b>caching</b> (with <b>Redis</b>)</li>
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
                up: <b>time management</b>, <b>organisation</b>, and thorough <b>testing</b> (using
                TDD and <b>Postman</b>). It was also the first time I had to
                explicitly distinguish between development and production environments, and also had to
                use <b>Docker</b> to compose a development environment with a database.
            </p>

            <p>
                Overall, the large focus on both client and server side meant that I had to employ best practices
                and leverage the technologies at my disposal effectively.
            </p>

            <h2>Desktop Application</h2>

            <ul>
                <li>Used <b>PyQt5</b> to create an extensible user interface.</li>
                <li>Connected the STDOUT to a text box in the GUI using <b>threads</b>.</li>
                <li>Had to adapt pre-existing <b>Python</b> scripts into libraries. These libraries could be invoked from the central application that connected this 'business logic' with the interface.</li>
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
                task called for the usage of threading and using the <b>signals</b> and <b>slots</b> feature
                of the <b>Qt</b> framework. I implemented it by having a listener thread listened to
                the logger used and captured the text in it to display in the text box as well.
            </p>
     
            <h2>Excel Converter</h2>

            <ul>
                <li>Developed a simple Python Lambda that activated on file change in an S3 bucket.</li>
                <li>Created fine-grained <b>IAM</b> <b>roles</b> and <b>policies</b> using the <i>Principle of Least Privilege</i></li>
                <li>Integrated a simple <b>CI/CD</b> pipeline using <b>GitHub Actions</b>.</li>
                <li>Managed versioning of <b>Docker</b> images in <b>ECR</b> (via CI/CD).</li>
            </ul>

            <h3>Challenges and Learnings</h3>

            <p>
                One of the main challenges was efficiently handling and parsing large Excel
                files without exceeding Lambda's execution time and memory limits.
                Through this project, I honed my skills in <b>cloud-based architecture</b> and
                got experience with techniques for data processing in a serverless environment.
                I also got some hands-on experience with using <b>triggers</b> in <b>S3</b> to activate the
                Lambda.
            </p>
        </DetailsTemplate>
    );
};

export default GreenPyrusLtdDetails;