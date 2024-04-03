import { FC } from "react";
import "./Navbar.css"

const Navbar: FC = () => {
    return (
        <ul id="navbar">
            <div id="left-navbar">
                <li><a id="home" href="/">&lt;David /&gt;</a></li>
            </div>
            <div id="right-navbar">
                <li><a href="/dev">Dev</a></li>
                <li><a href="https://blog.davidrosental.co.uk">Blog</a></li>
            </div>
        </ul>
    );
};

export default Navbar;