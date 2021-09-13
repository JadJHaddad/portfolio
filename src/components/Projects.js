import React from 'react';

import '../css/Projects.css';

const Projects = () => (
  <div>
    <h1 id="projects-title">Past Projects</h1>
    <div id="all-projects-box">
      <div id="project-1" className="projects">
        <h2 className="project-title">
          Project One
        </h2>
        <div className="project-preview" />
      </div>
      <div id="project-2" className="projects">
        <h2 className="project-title">
          Project Two
        </h2>
        <div className="project-preview" />
      </div>
      <div id="project-3" className="projects">
        <h2 className="project-title">
          Project Three
        </h2>
        <div className="project-preview" />
      </div>
    </div>
  </div>
)

export default Projects;
