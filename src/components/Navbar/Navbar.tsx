import { FC } from "react";
import "./navbar.css"

const homeNavBtnId = "home-nav-btn";

export const onHomeNavBtnHover = (_) => {
    console.log(document.getElementById(homeNavBtnId));
}

const Navbar: FC = () => {
    return (
        <ul id="navbar">
            <li><span>$ cd</span></li>
            <li><a id="home" href="/">~</a></li>
            <li><a href="/#dev">~/dev</a></li>
            <li><a href="/#about">~/about-me</a></li>
            <li><a href="/#contact">~/contact</a></li>
        </ul>
    );
};

export default Navbar;