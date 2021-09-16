import React from 'react';

import FrontendIcon from '../icons/frontend.svg';
import HtmlIcon from '../icons/frontend/html.svg';
import CssIcon from '../icons/frontend/css.svg';
import JsIcon from '../icons/frontend/js.svg';
import PhpIcon from '../icons/frontend/php.svg';
import BootIcon from '../icons/frontend/bootstrap.svg';
import NodeIcon from '../icons/frontend/nodejs.svg';
import SassIcon from '../icons/frontend/sass.svg';
import ReactIcon from '../icons/frontend/react.svg';
import BackendIcon from '../icons/backend.svg';
import SqliteIcon from '../icons/backend/sqlite.svg';

import '../css/Technologies.css';

const frontendTech = [HtmlIcon, CssIcon, JsIcon, PhpIcon, BootIcon, NodeIcon, SassIcon, ReactIcon];
const frontendItems = frontendTech.map((tech) => <img key={tech} className="technologies-icons" src={tech} alt=""/>);

const Technologies = () => (
  <div>
    <h1 id='technologies-title'>Technologies</h1>
    <div id='technologies-main'>

      <div id='frontend'>
        <h2 className="technologies-sub-title">Front-End</h2>
        <img id="frontend-icon" className="technologies-category-icons" src={FrontendIcon} alt="Laptop and Phone Display Icon" />
        <div className="technologies-container">
          <div className="technologies-grid">
            {frontendItems}
          </div>
        </div>
      </div>
      <div id='backend'>
        <h2 className="technologies-sub-title">Back-End</h2>
        <img id="backend-icon" className="technologies-category-icons" src={BackendIcon} alt="DNS Icon" />
        <div className="technologies-container">
          <div id="backend-technologies-grid" className="technologies-grid">
            <img className="technologies-icons" src={SqliteIcon} alt="Sqlite" />
          </div>
        </div>
      </div>

    </div>
  </div>
)

export default Technologies;
