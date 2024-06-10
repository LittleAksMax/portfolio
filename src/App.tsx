import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Experiences from "./routes/Experiences";
import Projects from "./routes/Projects";
import Certifications from "./routes/Certifications";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import { ProjectType } from "./types";
import NotFound from "./components/Status/NotFound";
import Navbar from "./components/Navbar/Navbar";
import { ProjectPageLinkBuilder } from "./util";

const App: FC = () => {
    const linkBuilder: ProjectPageLinkBuilder = new ProjectPageLinkBuilder()
        .setType(":type").setId(":projectId");

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={`/${ProjectType.Experiences}`} element={<Experiences />} />
                <Route path={`/${ProjectType.Projects}`} element={<Projects />} />
                <Route path={`/${ProjectType.Certifications}`} element={<Certifications />} />
                <Route path={linkBuilder.build()} element={<ProjectPage pageType="overview" />} />
                <Route path={linkBuilder.addDetails().build()} element={<ProjectPage pageType="details" />} />

                <Route path="*" element={<><Navbar /><NotFound /></>} />
            </Routes>
        </Router>
    );
};

export default App;
