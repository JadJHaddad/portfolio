import React from 'react';

import FrontendIcon from '../icons/frontend.svg';
import BackendIcon from '../icons/backend.svg';

import '../css/Technologies.css';

const Technologies = () => (
  <div>
    <h1 id='technologies-title'>Technologies</h1>
    <div id='technologies-main'>

      <div id='frontend'>
        <h2 className="technologies-sub-title">Front-End</h2>
        <img id="frontend-icon" className="technologies-icons" src={FrontendIcon} alt="Laptop and Phone Display Icon" />
        <div className="technologies-container">

        </div>
      </div>

      <div id='backend'>
        <h2 className="technologies-sub-title">Back-End</h2>
        <img id="backend-icon" className="technologies-icons" src={BackendIcon} alt="DNS Icon" />
        <div className="technologies-container">

        </div>
      </div>

    </div>
  </div>
)

export default Technologies;
