import { FC } from "react";
import Sections from "../../components/Home/Sections/Sections";
import About from "../../components/Home/About/About";
import Contact from "../../components/Home/Contact/Contact";

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