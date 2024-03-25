import { FC } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sections from "../../components/Home/Sections";
import About from "../../components/Home/About";
import Contact from "../../components/Home/Contact";

const Home: FC = () => {
    return (
        <div id="content">
            <Navbar />
            <About />
            <Sections />
            <Contact />
        </div>
    );
};

export default Home;