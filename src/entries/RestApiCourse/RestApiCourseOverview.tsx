import { FC } from "react";
import { OverviewTemplate } from "../Templates";
import Certification from "../Util/CertificationsUtil";

const RestApiCourseOverview: FC = () => {
    return (
        <OverviewTemplate showDetailsPrompt="Take a look at what was covered on this course">
            <h2>Why did I do a course on this topic?</h2>

            <p>
                REST APIs have become the de facto standard. When someone says
                'API' they almost always mean a REST API. I already touched on
                REST and have created a few small REST APIs, but I felt like the next
                step for me was to transform my understanding into something a lot
                more sophisticated that I can utilise in all aspects of software
                engineering.
            </p>

            <p>
                This course aims to provide an in-depth understanding of <strong>RESTful API</strong> development,
                moving beyond basic CRUD operations to explore advanced features,
                security measures, and modern architectural patterns along with the best practices
                associated with all aspects that were touched on.
            </p>

            <h2>Why did I choose this course?</h2>

            <p>
                <strong>Practical Application:</strong> Through the hands-on nature of the course and
                I could apply what I learned in a practical context, reinforcing their
                understanding of the material. I used it to create a template for a REST API
                that I put in the linked public GitHub repository.
            </p>

            <p>
                <strong>Comprehensive Content:</strong> The course covers a wide range of topics from
                basic principles to advanced features and best practices, making it a
                comprehensive guide for REST API development.
            </p>
            <p>
                <strong>Modern Practices:</strong> Focus on the latest trends and practices in API
                development, including security, documentation, and minimal APIs, assured
                to be up-to-date with current industry standards.
            </p>

            <p>
                <strong>Enhanced Learning Experience:</strong> Beyond basic REST API tutorials you can
                find on YouTube, this course offers a deep dive into complex
                topics like <strong>JWT authentication</strong> with claim-based
                authorisation, and advanced API features, enriching my learning.
            </p>

            <p>
                This advanced REST API course with a focus on ASP.NET Core offers a robust curriculum
                that enhanced my skills in designing and implementing sophisticated web services. The course
                went beyond just REST and went into effective documentation with <strong>Swagger</strong> and
                the creation of appropriate <strong>SDKs</strong>.
            </p>

            <p>
                By covering a breadth of topics from RESTful principles and security to advanced features
                and modern architectural patterns, the course provided a solid foundation and deep insights
                into effective API development -- knowledge that can be transferred to any framework, in any
                project.
            </p>

            <p>
                The inclusion of practical exercises, comprehensive documentation, and a shift towards
                minimal APIs ensured that I not only grasped theoretical concepts but also applied them
                in realistic scenarios, making it an invaluable resource for my development as a software
                engineer looking to advance my expertise in REST API development.
            </p>

            <Certification src={ "/REST-Cert.png" } />
        </OverviewTemplate>
    );
};

export default RestApiCourseOverview;