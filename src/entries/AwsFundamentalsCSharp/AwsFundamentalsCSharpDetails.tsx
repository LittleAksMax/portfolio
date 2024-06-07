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
                <li>S3 <strong>bucket versioning</strong> and its importance in providing reliable data storage.</li>
                <li>Reacting to changes automatically.</li>
            </ul>
            
            <h3>SQS</h3>

            <ul>
                <li>Basics of message queuing services and their applications.</li>
                <li>Publishing to queues and consuming messages from queues through use of the <strong>AWS SDK</strong>.</li>
                <li>Integrating SQS with the service layer of a Web API and attaching it to other services.</li>
                <li>The concept of a <strong>dead letter queue</strong> and <strong>redriving policies</strong>.</li>
            </ul>

            <h3>SNS</h3>

            <ul>
                <li>Overview of the SNS for <strong>pub/sub messaging</strong> and <strong>notifications</strong>.</li>
                <li>Configuring SNS with SQS and how we can produce <strong>scalable messaging systems</strong>.</li>
                <li>Integrating SNS with <strong>multiple consumer services</strong>.</li>
                <li>Implementing <strong>body based filtering</strong> and <strong>message attribute based filtering</strong>.</li>
            </ul>

            <h3>Secrets Manager</h3>

            <ul>
                <li>Introduction to the secrets and the importance of keeping them secured in the cloud.</li>
                <li>Creating a secret and then loading secrets through the AWS SDK.</li>
                <li>Integrating Secrets Manager into a Web API.</li>
                <li><strong>Secret versioning</strong> in Secrets Manager.</li>
                <li>Dealing with <strong>secret key rotation</strong>.</li>
            </ul>
       
            <h3>DynamoDB</h3>

            <p>
                I had very little prior experience with NoSQL databases so this served as a great introduction
                and a nice change from classical RDBMS's.
            </p>

            <ul>
                <li>Introduction to DynamoDB as a <strong>NoSQL</strong> database service.</li>
                <li>Introduction to <strong>partition keys</strong> and <strong>sort keys</strong>.</li>
                <li>Basic table management and CRUD using DynamoDB.</li>
                <li>Integrating DynamoDB with an existing Web API.</li>
                <li><strong>Scanning</strong> (and why it is inefficient).</li>
                <li><strong>Conditional operations</strong>.</li>
                <li>Transactions in DynamoDB.</li>
                <li>Introduction to <strong>secondary indices</strong> and creating and using a <strong>global/local secondary index</strong>.</li>
                <li>DynamoDB <strong>Streams</strong></li>
                <li>Introduction to <strong>autoscaling</strong>.</li>
            </ul>

            <h3>Lambda</h3>

            <ul>
                <li>Introduction to <strong>serverless</strong> and Lambda.</li>
                <li>Introduction to the concept of <strong>triggers</strong> and <strong>destinations</strong>.</li>
                <li>Creating simple HTTP Lambdas.</li>
                <li>Consuming an SQS queue using a Lambda.</li>
                <li>Triggering a Lambda with DynamoDB and S3.</li>
                <li>Creating <strong>serverless Web APIs</strong> using Lambdas.</li>
                <li>Building <strong>Custom Runtime Lambdas</strong> for frameworks that are not officially supported by AWS Lambda.</li>
            </ul>
        </DetailsTemplate>
    );
};

export default AwsFundamentalsCSharpDetails;
