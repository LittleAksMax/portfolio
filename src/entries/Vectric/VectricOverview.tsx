import { FC } from "react";
import { OverviewTemplate } from "../Templates";
import StackedImages from "../Util/StackedImages";
import "./VideoEmbed.css";

const VectricOverview: FC = () => {
  return (
    <OverviewTemplate showDetailsPrompt="More detail about these projects">
      <p>
        My work at Vectric involved two smaller projects I completed in the first week
        of the 11-week internship, followed by a larger project that spanned the rest of
        my time there.
      </p>

      <h2>Web Serial API GCode Controller</h2>

      <p>
        A simple web-based interface that allows users to upload GRBL files and send instructions directly to 
        a connected simple GenMitsu CNC Router machine. This project was an introduction to GRBL
        and GCode, the slightly different flavours of which are interpreted by practically all CNC machines.
        The project also acquained me with how to export GCode files from designs made in Vectric's Aspire.
        The interface is very bare-bones and mocks a pre-existing in-house tool.
      </p>

      <StackedImages
          subject={"Web Serial API GCode Controller"}
          srcs={["/grbl-interface.png"]}
      />

      <p>
        <a href="https://github.com/LittleAksMax/grbl-web-gcode-controller.git">Link to public GitHub repository.</a>
      </p>

      <h2>Toolpath Visualiser</h2>

      <p>
        In order to get some practise with graphics and the linear algebra involved in it,
        I was told to implement simple version of <a href="https://gcode.vectric.com">this website</a> which
        could handle linear moves (<code>G0</code>, <code>G1</code>) and single-plane versions of helical moves
        (<code>G2</code>, <code>G3</code>).
      </p>

      <p>
        The purpose of this project was to get me familiar with 3D graphics and the linear
        algebra which comes up very often in CAM software development, as well as generally using
        GL-based graphics libraries.
      </p>

      <p>
        <a href="https://github.com/LittleAksMax/toolpath-visualiser">Link to public GitHub repository.</a>
      </p>

      <div className="video-group">
        <video className="video-embed" controls muted>
          <source src="/text-toolpath.MOV" type="video/mp4"></source>
        </video>

        <video className="video-embed" controls muted>
          <source src="/warwick-toolpath.MOV" type="video/mp4"></source>
        </video>
      </div>

      <h2>Spiral Toolpath</h2>

      <p>
        The main project I worked on was a spiral pocketing algorithm. I was given a <a href="https://arxiv.org/abs/1412.5034">this paper</a>,
        which detailed an algorithm which I implemented.
      </p>

      <p>
        The smoothing aspect of the case of pockets with no island was not completely fine-tuned,
        so you can see that some of the gaps between adjacent revolutions in the toolpaths below might
        be a bit larger than the desired stepover. However, the toolpaths do generally look reasonable.
      </p>

      <StackedImages
          subject={"Spiral Toolpath"}
          srcs={["/smooth.png", "/smoothed-candidate.png"]}
      />

      <p>
        Unfortunately, I cannot share the code for this project as it is proprietary.
        Furthermore, the smoothing of the toolpath was not completely finished and so
        the stepover sizes did not always match the desired values. However, some toolpaths
        do look reasonable (as shown above).
      </p>
    </OverviewTemplate>
  );
};

export default VectricOverview;
