import { FC } from "react";
import { OverviewTemplate } from "../Templates";
import Certification from "../Util/CertificationsUtil";

const DockerCourseOverview: FC = () => {
    return (
        <OverviewTemplate showDetailsPrompt={"More on this course"}>
            <h2>Why did I do a course on this topic?</h2>

            <p>
                I had already been using Docker as a tool to simulate databases, web servers,
                etc. for some time already. However, it was clear to me that Docker had a lot
                more to offer than what I was utilising it for.
            </p>

            <p>
                With containerisation being such an important concept in modern software engineering,
                I was seeking a more refined and well-rounded understanding of the topic.
                After all, practically all CI/CD pipelines use containers all the way throughout the
                process, from pushing the Docker container to a repository, to something like Kubernetes
                for orchestration. Many AWS services can even deploy containers directly.
            </p>

            <p>
                Clearly, containerisation -- and especially Docker -- is a necessary part of every
                developer's arsenal and is practically a best practice. This course really highlights
                the relevant functionality of Docker as well as references to places where you can expand your learning.
            </p>

            <h2>Why did I choose this course?</h2>

            <p>
                I would definitely recommend this as a course for both people seeking to learn
                Docker from scratch as an introduction, and also for people with some experience
                with Docker to consolidate their understanding and have a brief look at the underlying
                theory.
            </p>

            <p>
                This course also highlights how Docker works besides how to use Docker. Dan Clarke mentions
                how layers work, how caching works, the difference between VMs and Docker containers. These
                help make understanding Docker much easier and keep the course engaging and relevant.
            </p>

            <Certification src="/Docker-Cert.png" />
        </OverviewTemplate>
    );
};

export default DockerCourseOverview;