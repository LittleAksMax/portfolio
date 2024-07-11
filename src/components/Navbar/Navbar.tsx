import { FC } from "react";
import "./navbar.css";

const Navbar: FC = () => {
  return (
    <nav>
      <ul id="navbar">
        <div id="left-navbar">
          <li>
            <a id="home" href="/">
              David R
            </a>
          </li>
          <li>
            <a id="cv" href="/David Rosental.pdf">
              CV
            </a>
          </li>
        </div>
        <div id="right-navbar">
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/certifications">Courses</a>
          </li>
          {/* <li>
            <a href="https://blog.davidrosental.co.uk">Blog-(Soon)</a>
          </li> */}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
