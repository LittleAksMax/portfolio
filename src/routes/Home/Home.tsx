import { FC } from "react";
import Sections from "../../components/Home/Sections";
import About from "../../components/Home/About";
import Contact from "../../components/Home/Contact";

const Home: FC = () => {
    return (
        <div id="content">
            <About />
            <Sections />
            <Contact />
        </div>
    );
};

export default Home;