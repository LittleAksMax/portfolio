import { FC } from "react";
import { DetailsTemplate } from "../Templates";
import StackedImages from "../Util/StackedImages";

const CS261Details: FC = () => {
  return (
    <DetailsTemplate showOverviewPrompt="Take a look at the overview of this project">
      <p>
        Unfortunately, since this is a university coursework project, I am not
        free to share the source code, which is kept in a private Github
        repository.
      </p>
      <p>
        Also, just for context: the term the project was developed in is 10
        weeks long. The first 4 weeks of the term were dedicated to creating the{" "}
        <strong>Requirements Analysis</strong> and{" "}
        <strong>Planning and Design documents</strong>. The following 5 weeks
        were for the actual implementation of the project.
      </p>
      <h2>The tech stack, system design and architecture</h2>
      <h3>The tech</h3>
      <p>
        <strong>Maven</strong> – Choosing the correct build system for the
        project is important as it determines how we create the released
        executable for distribution and how the team members will interact with
        the software they develop in their text editors. Maven was the most
        appropriate choice as team members have had experience with it from
        previous coursework, and it integrates well with Visual Studio Code and
        IntelliJ IDEA (the two editors used by team members). It also allows
        sensible dependency management while also having sensible defaults, like
        JUnit for unit testing.
      </p>
      <p>
        <strong>Java Swing</strong> – The main form UI was created using Java
        Swing since it is similar to alternatives in Python (namely, PyQt5) that
        some team members had experience with. It is also simple enough to allow
        any team member to make changes to it as new features need to integrate
        with the UI.
      </p>
      <p>
        <strong>Java FX</strong> – The visualisation of the running models was
        ultimately realised using Java FX. FX gave us low-level access to some
        graphics where needed (e.g., rotating panes to construct equivalent
        visualisations in the different cardinal directions) while also allowing
        higher-level organisational objects (e.g., popups and panes with
        different settings for how UI elements should flow within them).
      </p>
      <p>
        <strong>JUnit</strong> – For unit testing critical sections of code,
        chiefly validation and building a junction configuration out of form
        inputs.
      </p>
      <p>
        <strong>Mockito</strong> – Dependency injection was used relatively
        heavily throughout the project. Mocking was necessary to ensure that
        objects that rely on the implementations of other interfaces can still
        be fairly tested according to their specifications. This became
        especially useful when testing the validation objects.
      </p>
      <p>
        <strong>Jekyll</strong> – Jekyll is a static site generator which is
        supported and recommended by GitHub for use with GitHub Pages, providing
        detailed documentation and an active community for when we ran into
        problems.
      </p>
      <h3>System architecture</h3>
      <p>
        The system was based on an <strong>MVC</strong> architecture, but it was
        heavily modified to incorporate the heavy use of threading. Both the{" "}
        <em>User Input</em> and <em>Visualisation</em> modules had separate
        program windows and thus had their own threads. In order to make the
        application more responsive, we also had each submitted traffic junction
        configuration be placed in a runnable
        <em>Model</em> object so each ran in its own thread.
      </p>
      <p>
        The adoption of using JavaFX and Java Swing separately also caused some
        increased complexity as both libraries are generally used as the 'main
        application thread'.
      </p>
      <StackedImages subject="System Design" srcs={["/CS261-SysDesign.png"]} />
      <h2>Implementation details</h2>
      <h3>Evaluating a junction</h3>
      <p>
        Many of the other groups opted for a simulation approach in their
        project. We opted for a deterministic, mathematical evaluation instead.
        This reduced the need for complex visualisation code, while also making
        the evaluation incredibly responsive for the user.
      </p>
      <h3>Optimising signal timings</h3>
      <p>
        A key selling point of our application was how it was capable of
        optimising for optimal cycle timings in the junction. As a result, I
        believe it's beneficial to highlight this feature.
      </p>
      <p>
        Even though the original <strong>Planning and Design document</strong>{" "}
        called for a <strong>Local Search</strong> algorithm to be used, there
        was discussion of using <strong>(Stochastic) Gradient Descent</strong>{" "}
        instead. The deterministic evaluation made use of continuous,
        differentiable functions which enables this approach. However, we
        concluded after a week and a half of trying to implement a{" "}
        <u>generic</u> Gradient Descent algorithm (since the number of variables
        changes based on the junction configuration entered by a user) that it
        was far too complex for the short-term nature of the project.
      </p>
      <p>
        This prompted us moving back to a Local Search approach. Due to time
        constraints a lot of quality of life changes could not be implemented --
        just a classical Hill Climbing approach. The extra features were Beam
        Search and a Tabu List to increase efficiency, but even without these
        optimisations the algorithm found an optimum incredibly quickly, and was
        not necessary.
      </p>
      <h2>What went well, Even better if</h2>
      <p>
        Evaluating successes and failures is an essential learning point for any
        project. Given the size and scope of the project, there were plenty of
        successes to celebrate, but also an abundance of failures we adapted to
        and learned from.
      </p>
      <h3>The good</h3>
      <p>
        <strong>The product:</strong> I can confidently say that I am proud of
        the application my team and I put together during the term. We salvaged
        functionality where needed and admitted which features we couldn't add
        (such as evaluations with pedestrian crossings and bus/cycle lanes due
        to a lack of academic literature to base our evaluation for them off).
        Given the setbacks, and the time we were given, we produced a prototype
        (or alpha version) for a real software product. I am also particularly
        proud of how I filled my role and how I organised the team, as
        management definitively moved me out of my comfort zone. This is further
        exacerbated by the fact that we were missing a team member, which meant
        that our group only had 5 out of the 6 members most groups have.
      </p>
      <p>
        <strong>Project scope:</strong> Despite some requirements outlined in
        the initial <strong>Requirements Analysis document</strong> being
        omitted, an overwhelming majority of requirements were achieved. The
        team also produced quality requirements, which were easy to understand
        and specific enough to enable their easy implementation.
      </p>
      <p>
        <strong>Range of incorporated technologies:</strong> Although we chose
        some technologies because most of the team has had experience with it
        (namely Java as the programming language), I can confidently say that
        everyone on the team learned something new. A new framework, build
        system, methodology, design pattern, whatever. Furthermore, the team
        worked to adapt quickly to new technologies as they came in, as system
        requirements changed throughout the project's development.
      </p>
      <h3>The bad</h3>
      <p>
        <strong>Constant pivoting:</strong> We had to make two large shifts in
        development that forced us to replan certain components of the system.
        First, we chose the wrong library for the visualisation. Originally,
        both the form UI and the visualisation UI were to be made with Java
        Swing, but later we realised it would be wiser to use JavaFX for the
        visualisation. This, in turn, caused some propagating issues with
        threading that I discussed earlier. Second, we went back and forth
        between Local Search and (Stochastic) Gradient Descent for the
        optimisation of the traffic light signal timings (discussed previously).
        Luckily, our methodology (a hybrid of incremental planning and Scrum)
        was chosen specifically to be able to accommodate possibly abrupt
        changes to requirements and kept the team flexible.
      </p>
      <p>
        <strong>The Crunch:</strong> We had a Gantt chart before we started
        programming on roughly the schedule we wanted to follow for the project.
        Initially, this was a great guideline, but we couldn't keep up with the
        timeline as the project progressed. We made sure to keep a buffer of
        time for 'cleaning up' in the final week straight off the bat in case
        some tasks overran. This turned out to be useful, but the lack of
        consistency of progress throughout the project still necessitated a
        crunch in the final week of the project. You could argue that this is
        the well-documented 'deadline encouragement' among university students.
      </p>
      <p>
        <strong>Lack of unit testing:</strong> We dedicated a team member to
        test each originally outlined requirement in the final week of the
        project. This team member managed to find accessibility and
        functionality errors which could then be promptly fixed. Naturally,
        since this is a coursework, we did not have access to the 'customer' (so
        to speak) so this was effectively alpha testing. However, this testing
        discovered a lot of errors which could have been weeded out during
        development much earlier with simple unit tests. This resulted in some
        backtracking to components we assumed to have worked previously and
        merged into the codebase already -- some of which with existing
        functionality already layered on top of them.
      </p>
      <h3>The ugly?</h3>
      <p>
        <strong>Lack of experience:</strong> As students, we were obviously not
        expected to have a perfectly coherent, streamlined project. We all have
        other deadlines and modules to work on during this project.
        Nevertheless, the glaring lack of experience resulted in the final
        product being very different to the initial mockups of the user
        interface, and also how the system components interacted, as well as the
        structure of certain code components we used. This caused a lot of
        pivoting and large changes happening relatively abruptly. Although this
        was a challenge, it did force us to remain adaptable and we purposefully
        wrote modular code for critical components in case they would need to be
        modified/replaced. All software plans/requirements change, and this was
        a fun (albeit stressful) introduction to how volatile software
        development can be.
      </p>
      <p>
        <strong>ChatGPT Plague:</strong> Of course, AI tools like ChatGPT have
        become strong allies of students worldwide, but in software engineering,
        these tools can quickly turn on you. Lots of code in the project
        committed by team members had clear traces of code created by generative
        AI. This code is often clunky and rarely captures the actual problem
        it's trying to solve. As a result, necessary code reviews in{" "}
        <strong>Pull Requests</strong> were put in place to ensure that this
        code gets refactored.
      </p>
      <p>
        <strong>Consistency:</strong> In spite of all the stress and deadlines
        the second term of the second year of the Warwick computer science
        course is known to have, it is important for the team's output to remain
        consistent. It was my role as the project manager to assert this
        consistency. Therefore, I decided that workshops should be put in place
        in the final sprint (which still left a half week or so until deadline
        to write the Final Report and clean up) where teammates are encouraged
        to attend in person. These workshops boosted productivity substantially,
        and bettered code quality as members working on the same module could do
        pair programming on critical sections of code. It also made it much
        easier for team members to ask for help. Communication is key to
        efficiency, and these workshops got us to communicate as much as
        possible.
      </p>
      <p>
        <strong>External factors:</strong> Regardless of our risk assessment in
        the <strong>Planning and Design document</strong>, some risks are
        basically unavoidable. For example, illness resulted in a team member
        losing a weekend. A coursework deadline meant that a team member had to
        focus on that other responsibility during the penultimate sprint. One
        risk we couldn't account for (or I suppose took for granted by that
        point) was that in the group of 6 was missing.
      </p>
    </DetailsTemplate>
  );
};

export default CS261Details;
