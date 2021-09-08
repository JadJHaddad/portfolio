import React from 'react';
import ReactDOM from 'react-dom';

import DesignIcon from './icons/design.svg';
import MaintainIcon from './icons/maintain.svg';
import BuildIcon from './icons/build.svg';
import './index.css';

function Header() {
  return (
    <header className = "nav-header">
      <div className = "logo">logo</div>
      <div>About</div>
      <div>Projects</div>
      <div>Technologies</div>
      <div>Contacts</div>
    </header>
  );
}

function Body() {
  return (
    <div className = "box">
      <div className = "inner-box-one">
        <h1 className = "title" >Developing a Website</h1>
        <h1 className = "title">That Tells Your Story</h1>
      </div>
      <div className = "inner-box-two" >

        <div className = "small-box design-box">
          <img className = "icon design-icon" src={DesignIcon} alt="Design Icon"/>
          <h2 className = "box-title design-title">Design</h2>
        </div>

        <div className = "small-box build-box">
          <img className = "icon build-icon" src={BuildIcon} alt="Build Icon"/>
          <h2 className = "box-title build-title">Build</h2>
        </div>

        <div className = "small-box maintain-box">
          <img className = "icon maintain-icon" src={MaintainIcon} alt="Maintain Icon"/>
          <h2 className = "box-title maintain-title">Maintain</h2>
        </div>

      </div>
    </div>
  );
}

ReactDOM.render(
  <>
  <Header />
  <Body />
  </>,
  document.getElementById('root')
);
