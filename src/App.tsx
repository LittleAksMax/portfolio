import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Experiences from "./routes/Experiences";
import Projects from "./routes/Projects";
import Courseworks from "./routes/Courseworks";
import ProjectPage from "./routes/ProjectPage";
import { ProjectType } from "./types";
import Dev from "./routes/Dev";

const App: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={`/${ProjectType.Experiences}`} element={<Experiences />} />
                <Route path={`/${ProjectType.Projects}`} element={<Projects />} />
                <Route path={`/${ProjectType.Courseworks}`} element={<Courseworks />} />
                <Route path="/dev" element={<Dev />} />
                <Route path="/dev/:type/:project" element={<ProjectPage />} />
            </Routes>
        </Router>
    );
};

export default App;
