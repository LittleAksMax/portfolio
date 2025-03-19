import { FC } from "react";
import { OverviewTemplate } from "../Templates";
import StackedImages from "../Util/StackedImages";

const CS261Overview: FC = () => {
  return (
    <OverviewTemplate showDetailsPrompt="Take a more detailed look at the design, implementation and organisation of this project.">
      <h2>What is this project?</h2>

      <p>
        At the computer science course at the{" "}
        <strong>University of Warwick</strong>, there is a compulsory module
        called <strong>CS261: Software Engineering</strong>. Every year, the
        university gets a company to 'sponsor' the coursework, which is a
        term-long group project (6 people on each team). The sponsoring company
        provides us with a <strong>specification for a product</strong> they
        wish for each group to develop, which is then our responsibility to
        interpret, and then plan our solution accordingly. This involves:
      </p>
      <ol>
        <li>
          Organising the team into relevant roles and picking a methodology,
        </li>
        <li>
          Producing a set of requirements from our understanding of the
          specification,
        </li>
        <li>Researching appropriate technologies to meet our requirements,</li>
        <li>Conduct an appropriate risk assessment,</li>
        <li>Planning our system and presenting it formally (UML),</li>
        <li>
          Creating <strong>Requirements Analysis</strong> and{" "}
          <strong>Planning and Design</strong> documents from the above
        </li>
        <li>
          Developing the software over 5 weeks while sticking to our methodology
          and adapting our original plan as needed,
        </li>
        <li>
          Presenting our final product with a demo video and submitting a{" "}
          <strong>Final Report</strong> as an evaluation of the project as a
          whole.
        </li>
      </ol>

      <p>
        Although the module is widely disliked by the cohort, the project gives
        a nice introduction into the world of software engineering -- though, I
        reckon students' grudge is against the common issues surrounding group
        projects more so than the content of the module. For me, the most
        important aspect of this coursework is that students get to experience
        teamwork and contributing to a shared codebase which is naturally
        missing from most other courseworks. Courseworks tend to be either solo
        or lab courseworks where the group project consists of what is basically
        just pair programming. We learn about standard software engineering
        practices during the lectures and adapt what we learn to effectively
        'mock' the <strong>software development cycle</strong> in our teams.
      </p>

      <h2>The Application Itself</h2>

      <p>
        Our sponsor was{" "}
        <a href="https://www.dorsetsoftware.com/Home">Dorset Software</a>, and
        the task we were provided was to design software that can evaluate
        traffic junctions which can be configured by the user by changing
        certain settings about the junction, such as:
      </p>

      <ul>
        <li>Number of incoming/outgoing lanes</li>
        <li>Incoming flow and outgoing in each exit direction</li>
        <li>The exit directions each lane permits</li>
        <li>The type of traffic light in the junction and corresponding cycle timings</li>
        <li>etc.</li>
      </ul>

      <p>
        Our software was then tasked with evaluating the submitted junction configuration
        based on 3 metrics:
      </p>

      <ol>
        <li>Average wait time</li>
        <li>Maximum wait time</li>
        <li>Maximum queue length</li>
      </ol>

      <StackedImages
        subject="Form for user input"
        srcs={['/CS261-Application.png', '/CS261-Form.png']}
      />

      <p>
        The application also visualised the configured junction and reacted to
        changes from the optimiser, which employed <strong>local search</strong>{" "}
        to solve a <strong>constraint satisfaction problem</strong> (CSP) on the most
        optimal values of the traffic light cycle timings of the junction to get the
        best evaluation from our selected metrics.
      </p>

      <StackedImages
        subject="Junction visualiser"
        srcs={['/CS261-Visualisation.png']}
      />

      <p>
        Part of the requirements of any good application is availability. That's
        why my group decided to make a <a href="https://cs261-group.github.io/junction-modeller/">small website</a> to provide a basic user
        guide and serve as a central repository for releases on different
        platforms (and different versions if development were to continue).
      </p>

      <StackedImages subject="Website" srcs={['/CS261-Website1.png', '/CS261-Website2.png']} />

      <h2>My role in the project</h2>

      <p>
        I wanted to use this project to advance my leadership and communication skills, as I felt like
        I hadn't put myself in positions to enable this up until this point. I took on the role of project
        manager. I was responsible for organising the standups and doing sprint reviews and sprint initiation
        (as we were using a variant of <strong>Scrum</strong>) as well as performing general code reviews.
        Moreover, as we approached the deadline I arranged daily 'workshops' where the team could come in
        and work together face-to-face in one of the labs in the computer science building at the university
        to maximise team cohesion close to the submission date.
      </p>

      <p>
        Beside organisational roles, I was also performing as one of the programmers in the project. I was
        tasked with developing the user interface, the visualisation, and the validation of the form inputs.
        Naturally, as the project was coming to a close, I got more involved with all aspects of the software
        as pair programming came up often in the aforementioned workshops.
      </p>
    </OverviewTemplate>
  );
};

export default CS261Overview;
