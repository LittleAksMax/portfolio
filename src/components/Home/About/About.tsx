import { FC, useState } from "react";
import "./About.css";
import WhoAmIFrame from "./ImageFrames/WhoAmIFrame";
import { ProjectListInner } from "../../ProjectList/ProjectList";
import ProjectRepo from "../../../db/ProjectRepo";
import { ExperienceState, ProjectState, ProjectType } from "../../../types";

const About: FC = () => {
  const [experiences] = useState<(ProjectState | ExperienceState)[]>(
    ProjectRepo.getInstance().getOfType(ProjectType.Experiences)
  );

  return (
    <div id="about">
      <section id="me" className="about-section odd-section">
        <div className="about-section-content dynamic-content">
          <div className="about-frame-container">
            <WhoAmIFrame />
          </div>
          <div className="about-text">
            <h2 className="about-section-heading">Who I am</h2>
            <p>
              Hello, I'm <strong>David Rosental</strong>, a computer science
              student at the <strong>University of Warwick</strong>. I started
              in September 2023, so I am in my 2nd year of my{" "}
              <a href="https://warwick.ac.uk/fac/sci/dcs/teaching/courses/">
                <strong>4 year MEng course</strong>
              </a>
              .
            </p>
            <p>
              <a href="/David Rosental.pdf">Here is a link to my current CV</a>.
            </p>
          </div>
        </div>
      </section>
      <section id="interests" className="about-section even-section">
        <div className="about-section-content dynamic-content">
          <div className="about-text">
            <p>
              I always seek to learn about new technologies and improve my
              breadth and quality of my software engineering skills.
            </p>
            <p>
              Outside of my regular university studies, I am looking into{" "}
              <strong>microservices</strong> and{" "}
              <strong>cloud computing</strong> (AWS),{" "}
              <strong>containerisation</strong> (Docker) and{" "}
              <strong>CI/CD</strong> (with GitHub actions).
            </p>
          </div>
          <div className="about-frame-container">
            <h2 className="about-section-heading">Passions and Interests</h2>
          </div>
        </div>
      </section>
      <section id="skills" className="about-section odd-section">
        <div className="about-section-content dynamic-content">
          <div className="about-frame-container">
            <h2 className="about-section-heading">In my Toolbox</h2>
          </div>
          <div className="about-text">
            <p>
              <u>Languages:</u> <strong>Python</strong> (<i>intermediate</i>),{" "}
              <strong>Java</strong> (<i>intermediate</i>), <strong>C#</strong> (
              <i>intermediate</i>), <strong>Javascript/Typescript</strong> (
              <i>intermediate</i>), <strong>C</strong>/<strong>C++</strong> (
              <i>beginner</i>), <strong>HTML</strong>/<strong>CSS</strong>/
              <strong>JS</strong> (<i>beginner</i>)
            </p>
            <p>
              <u>Frameworks:</u> <strong>ASP.NET Core</strong> (
              <i>intermediate</i>), <strong>ReactJS</strong> (<i>beginner</i>),{" "}
              <strong>Flask</strong> (<i>beginner</i>), <strong>jQuery</strong>{" "}
              (<i>beginner</i>)
            </p>
            <p>
              <u>Databases:</u> <strong>MariaDB</strong>/<strong>MySQL</strong>{" "}
              (<i>intermediate</i>), <strong>MongoDB</strong> (<i>beginner</i>),{" "}
              <strong>PostgreSQL</strong> (<i>beginner</i>)
            </p>
            <p>
              <u>Platforms:</u> <strong>AWS</strong> (IAM, Lambda, EC2, ECR,
              Secrets Manager) (<i>beginner</i>), <strong>Firebase</strong> (
              <i>minimal</i>)
            </p>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-section-experiences dynamic-content">
          <h2>Experiences</h2>
          <ProjectListInner projects={experiences} />
        </div>
      </section>
    </div>
  );
};

export default About;
