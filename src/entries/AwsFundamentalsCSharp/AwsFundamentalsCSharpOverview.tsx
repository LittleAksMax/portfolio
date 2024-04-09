import { FC } from "react";
import { OverviewTemplate } from "../Templates";
import Certification from "../Util/CertificationsUtil";

const AwsFundamentalsCSharpOverview: FC = () => {
    return (
        <OverviewTemplate showDetailsPrompt="Take a look at what was covered on this course">
            <h2>Why did I do a course on this topic?</h2>

            <p>
                My aim with the course was to equip myself with a foundational understanding of
                cloud services, focusing on their integration and application (using C#). I did
                this course because I was interested in incorporating cloud solutions
                into my projects, ensuring they grasp the basic functionalities, best
                practices, and efficient configurations of AWS services.
            </p>

            <p>
                With <b>cloud computing</b> being on a rapid rise in the last few years, I
                thought it was a great time to get introduced to the concept and get some
                meaningful familiarity with cloud platforms. <b>AWS</b> was the natural
                choice because of how large a fraction of the market they take up.
            </p>
            
            <p>
                The AWS Fundamentals Course with C# by Nick Chapsas offers a comprehensive
                introduction to integrating AWS services into general applications using C#.
                By covering essential services
                like <b>S3</b>, <b>SQS</b>, <b>SNS</b>, <b>Secrets Manager</b>, <b>DynamoDB</b>, and <b>Lambda</b>, the
                course lays a solid foundation for cloud solutions. With a focus on best practices,
                practical applications, and hands-on learning, I felt well-equipped to take my first
                steps in leveraging cloud technologies in future projects.
            </p>

            <h2>Why did I choose this course?</h2>

            <p>
                <b>Best Practices and Practical Applications:</b> The course emphasises 
                real-world applications and best configurations of AWS services within
                the context of C# development, guiding through best practices to ensure
                clean code architecture and secure management of the services.
            </p>

            <p>
                <b>Hands-On Approach:</b> Through practical demonstrations and hands-on
                exercises, I gained firsthand experience in configuring and
                deploying basic AWS services using C#.
            </p>

            <p>
                <b>Focus on Free Tier Services:</b> All services introduced in the course
                fall within AWS's free tier (with the exception of Secrets Manager),
                making it accessible to experiment and learn without the worry
                of incurring additional costs. Furthermore, the course itself was free to
                enroll in, so I had no reason to not enroll.
            </p>

            <p>
                <b>Foundation for Cloud Solutions:</b> This course serves as a stepping
                stone for looking to dive deeper into cloud computing, providing the
                essential knowledge needed to explore more complex AWS services and
                architectures. It also set me up for exploring other cloud platforms
                like <b>Microsoft Azure</b> and <b>GCP</b> because the course covered
                concepts that are present in every major cloud platform.
            </p>

            <Certification src={ "/AWS-Cert.png" } />
        </OverviewTemplate>
    );
};

export default AwsFundamentalsCSharpOverview;
