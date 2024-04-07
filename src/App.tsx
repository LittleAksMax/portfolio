import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Experiences from "./routes/Experiences";
import Projects from "./routes/Projects";
import Certifications from "./routes/Certifications";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import { ProjectType } from "./types";
import Dev from "./routes/Dev/Dev";
import NotFound from "./components/Status/NotFound";

const App: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={`/${ProjectType.Experiences}`} element={<Experiences />} />
                <Route path={`/${ProjectType.Projects}`} element={<Projects />} />
                <Route path={`/${ProjectType.Certifications}`} element={<Certifications />} />
                <Route path="/dev" element={<Dev />} />
                <Route path="/dev/:type/:projectId" element={<ProjectPage pageType="overview" />} />
                <Route path="/dev/:type/:projectId/details" element={<ProjectPage pageType="details" />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
