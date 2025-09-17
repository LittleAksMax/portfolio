import { FC } from "react";
import { DetailsTemplate } from "../Templates";

const VectricDetails: FC = () => {
  return (
    <DetailsTemplate showOverviewPrompt="Look at an overview of what I did at Vectric">
      <h2>Web Serial API GCode Controller</h2>

      <p>
        Vanilla HTML/CSS/JS because bare functionality was the goal of the exercise.
        Minimal validation and error handling was implemented.
        The <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API">Web Serial API</a> was
        used to send signals to the CNC machine over a serial connection.
      </p>

      <h2>Toolpath Visualiser</h2>

      <p>
        The application used React (with Typescript) with <a href="https://threejs.org/">Three.js</a> for
        the 3D rendering within the browser.
      </p>

      <h2>Spiral Toolpath</h2>

      <p>
        Since I had very little prior experience with C++, and none with using C++
        in larger projects, I learnt a lot about the language (making heavy use of
        modern C++ features, since the project used C++17) and structuring large C++
        codebases. Additionally, I gained experience with CMake and familiarity with
        the build process and linking in C++ projects.
      </p>

      <p>
        The paper largely involves the modification analysis of a Voronoi diagram of
        the polygon outlining the pocket. The paper detailing the algorithm to implement
        seemingly obfuscated many caveats and edge cases that needed to be handled.
        As a result, my solution required the implementation of custom tree/graph-based
        data structures and numerous graph algorithms to parse large sections of the tree/graph
        used to represent the Voronoi Diagram.
      </p>

      <p>
        We used <a href="https://www.raylib.com/">Raylib</a> to visualise the toolpaths
        in a simple interface. I also extended the interface with a development tools that
        allowed the dynamic visualisation of any intermediate structures required for the
        toolpath generation to make debugging easier.
      </p>

      <p>
        A header-only version of <a href="https://github.com/catchorg/Catch2">Catch2</a> was
        used for testing.
      </p>
    </DetailsTemplate>
  );
};

export default VectricDetails;
