import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ResumeNew from "./components/pages/Resume";
import ContactMe from "./components/pages/contact";
import Skills from "./components/pages/skills";
import Home from "./components/pages/home";
import "./styles.css";
import StarrySky from "./stars";
import Projects from "./components/pages/projects";

function App() {
  return (
    <div>
      <StarrySky />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeNew />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
