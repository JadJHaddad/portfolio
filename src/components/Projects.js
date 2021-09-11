import React from 'react';

import '../css/Projects.css';

const Projects = () => (
  <body>
    <h1 ID="projects-title">Past Projects</h1>
    <div ID="all-projects-box">
      <div ID="project-1" className="projects">
        <h2 className="project-title">
          Project One
        </h2>
        <div className="project-preview" />
      </div>
      <div ID="project-2" className="projects">
        <h2 className="project-title">
          Project Two
        </h2>
        <div className="project-preview" />
      </div>
      <div ID="project-3" className="projects">
        <h2 className="project-title">
          Project Three
        </h2>
        <div className="project-preview" />
      </div>
    </div>
  </body>
)

export default Projects;
