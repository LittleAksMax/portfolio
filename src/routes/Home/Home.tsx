import { FC } from "react";
import Sections from "../../components/Home/Sections/Sections";
import About from "../../components/Home/About/About";
import Contact from "../../components/Home/Contact/Contact";
import Page from "../../components/Page/Page";
import Banner from "../../components/Banner/Banner";

const Home: FC = () => {
    return (
        <Page banner={<Banner title="Hi there, 👋 I'm David." />}>
            <About />
            <Sections />
            <Contact />
        </Page>
    );
};

export default Home;