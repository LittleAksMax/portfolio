import { FC } from "react";
import { DetailsTemplate } from "../Templates";

const AwsFundamentalsCSharpDetails: FC = () => {
    return (
        <DetailsTemplate showOverviewPrompt="Take a look at the overview for this course">
            <h2>What was covered?</h2>

            <h3>S3</h3>

            <ul>
                <li>Introduction to S3 buckets for storage solutions.</li>
                <li>Demonstrations on how to interact with S3 using C#, including file uploads, downloads, deletes using the AWS SDK.</li>
                <li>S3 <b>bucket versioning</b> and its importance in providing reliable data storage.</li>
                <li>Reacting to changes automatically.</li>
            </ul>
            
            <h3>SQS</h3>

            <ul>
                <li>Basics of message queuing services and their applications.</li>
                <li>Publishing to queues and consuming messages from queues through use of the <b>AWS SDK</b>.</li>
                <li>Integrating SQS with the service layer of a Web API and attaching it to other services.</li>
                <li>The concept of a <b>dead letter queue</b> and <b>redriving policies</b>.</li>
            </ul>

            <h3>SNS</h3>

            <ul>
                <li>Overview of the SNS for <b>pub/sub messaging</b> and <b>notifications</b>.</li>
                <li>Configuring SNS with SQS and how we can produce <b>scalable messaging systems</b>.</li>
                <li>Integrating SNS with <b>multiple consumer services</b>.</li>
                <li>Implementing <b>body based filtering</b> and <b>message attribute based filtering</b>.</li>
            </ul>

            <h3>Secrets Manager</h3>

            <ul>
                <li>Introduction to the secrets and the importance of keeping them secured in the cloud.</li>
                <li>Creating a secret and then loading secrets through the AWS SDK.</li>
                <li>Integrating Secrets Manager into a Web API.</li>
                <li><b>Secret versioning</b> in Secrets Manager.</li>
                <li>Dealing with <b>secret key rotation</b>.</li>
            </ul>
       
            <h3>DynamoDB</h3>

            <p>
                I had very little prior experience with NoSQL databases so this served as a great introduction
                and a nice change from classical RDBMS's.
            </p>

            <ul>
                <li>Introduction to DynamoDB as a <b>NoSQL</b> database service.</li>
                <li>Introduction to <b>partition keys</b> and <b>sort keys</b>.</li>
                <li>Basic table management and CRUD using DynamoDB.</li>
                <li>Integrating DynamoDB with an existing Web API.</li>
                <li><b>Scanning</b> (and why it is inefficient).</li>
                <li><b>Conditional operations</b>.</li>
                <li>Transactions in DynamoDB.</li>
                <li>Introduction to <b>secondary indices</b> and creating and using a <b>global/local secondary index</b>.</li>
                <li>DynamoDB <b>Streams</b></li>
                <li>Introduction to <b>autoscaling</b>.</li>
            </ul>

            <h3>Lambda</h3>

            <ul>
                <li>Introduction to <b>serverless</b> and Lambda.</li>
                <li>Introduction to the concept of <b>triggers</b> and <b>destinations</b>.</li>
                <li>Creating simple HTTP Lambdas.</li>
                <li>Consuming an SQS queue using a Lambda.</li>
                <li>Triggering a Lambda with DynamoDB and S3.</li>
                <li>Creating <b>serverless Web APIs</b> using Lambdas.</li>
                <li>Building <b>Custom Runtime Lambdas</b> for frameworks that are not officially supported by AWS Lambda.</li>
            </ul>
        </DetailsTemplate>
    );
};

export default AwsFundamentalsCSharpDetails;
