import { FC } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sections from "../components/Home/Sections";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";

const Home: FC = () => {
    return (
        <div>
            <Navbar />
            <h1>Hi 👋 I'm David!</h1>
            <Sections />
            <About />
            <Contact />
        </div>
    );
};

export default Home;