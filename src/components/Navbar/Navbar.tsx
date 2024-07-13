import { FC } from "react";
import "./Navbar.css";

const Navbar: FC = () => {
  return (
    <nav>
      <ul id="navbar">
        <li>
          <a id="home" href="/">
            David Rosental
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
