import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-container">

      <h1 className="projects-title">Projects</h1>
      <p className="projects-subtitle">
        🚧 This section is under development. New projects will be added soon.
      </p>

      <div className="projects-spinner">
        <svg
          className="spinner"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="spinner-circle"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="spinner-path"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      </div>
      <button className="home-button" onClick={() => navigate("/")}>
        ⬅️ Go Home
      </button>
    </div>
  );
};

export default Projects;
