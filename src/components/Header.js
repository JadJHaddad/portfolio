import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../icons/logo.svg';

import '../css/Header.css';

const Header = () => (
  <header className = "nav-header">

    <div className = "logo">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
    </div>

    <Link to="/about">
      <div className="nav">
        <h3>
          About
        </h3>
      </div>
    </Link>

    <Link to="/projects">
      <div className="nav">
        <h3>
          Projects
        </h3>
      </div>
    </Link>

    <Link to="technologies">
      <div className="nav">
        <h3>
          Technologies
        </h3>
      </div>
    </Link>

    <Link to="contacts">
      <div className="nav">
        <h3>
          Contacts
        </h3>
      </div>
    </Link>

  </header>
)


export default Header;
