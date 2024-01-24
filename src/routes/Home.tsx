import { FC } from "react";
import Navbar from "../components/Navbar/Navbar";
import Dev from "../components/Home/Dev";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";

const Home: FC = () => {
    return (
        <div>
            <Navbar />
            <h1>Home</h1>
            <Dev />
            <About />
            <Contact />
        </div>
    );
};

export default Home;