import React from 'react';

import DesignIcon from '../icons/design.svg';
import MaintainIcon from '../icons/maintain.svg';
import BuildIcon from '../icons/build.svg';

import '../css/Home.css'

const Home = () => (
  <div className = "home-box">

    <div className = "inner-box-one">
      <h1 className = "title" >Developing a Website</h1>
      <h1 className = "title">That Tells Your Story</h1>
    </div>

    <div className = "inner-box-two" >
      <div className = "small-box design-box">
        <img className = "icon design-icon" src={DesignIcon} alt="Design Icon"/>
        <h2 className = "box-title design">Design</h2>
        <p className = "box-paragraph design">Design the website that you want to show the world</p>
      </div>
      <div className = "small-box build-box">
        <img className = "icon build-icon" src={BuildIcon} alt="Build Icon"/>
        <h2 className = "box-title build">Build</h2>
        <p className = "box-paragraph build">Build it exactly the way that you imagine it</p>
      </div>
      <div className = "small-box maintain-box">
        <img className = "icon maintain-icon" src={MaintainIcon} alt="Maintain Icon"/>
        <h2 className = "box-title maintain">Maintain</h2>
        <p className = "box-paragraph maintain">Keep the website running with minimal effort on your part</p>
      </div>

    </div>
  </div>
)


export default Home;
