import { FC } from "react";
import Sections from "../../components/Home/Sections/Sections";
import About from "../../components/Home/About/About";
import Page from "../../components/Page/Page";
import Banner from "../../components/Banner/Banner";

const Home: FC = () => {
    return (
        <Page banner={<Banner title="Hi there, 👋 I'm David." subtitle="Computer science student with a passion for technology." />}>
            <About />
            <Sections />
        </Page>
    );
};

export default Home;