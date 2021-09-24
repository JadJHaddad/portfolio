import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Logo from '../icons/logo.svg';
import Dropdown from '../icons/dropdown.svg';

import '../css/Header.css';

const Header = () => (
  <header id = "nav-header">

    <div className = "logo">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
    </div>


    <div id="normal-nav" >
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

      <Link to="/technologies">
        <div className="nav">
          <h3>
            Technologies
          </h3>
        </div>
      </Link>

      <Link to="/contacts">
        <div className="nav">
          <h3>
            Contacts
          </h3>
        </div>
      </Link>
    </div>

    <Card />
  </header>
)

class Card extends Component {
  constructor(){
    super();

    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    }

  showMenu(e) {
    e.preventDefault();

    this.setState({
      showMenu: true,
    });
  }

  hideMenu(e) {
    this.setState({
      showMenu: false,
    });
  }


  render() {
    return (
      <div>
        <button id="drop" className="nav" onClick={this.showMenu}>
          <img id="drop-icon" src={Dropdown} alt="Drop Down"/>
        </button>

        { this.state.showMenu ? (
            <div id="hiddable-nav">

              <button id="undrop" className="nav" onClick={this.hideMenu}>
                <img id="drop-icon" src={Dropdown} alt="Drop Down"/>
              </button>

              <Link to="/" onClick={this.hideMenu}>
                <div className="nav">
                  <h3>
                    Home
                  </h3>
                </div>
              </Link>


              <Link to="/about" onClick={this.hideMenu}>
                <div className="nav">
                  <h3>
                    About
                  </h3>
                </div>
              </Link>

              <Link to="/projects" onClick={this.hideMenu}>
                <div className="nav">
                  <h3>
                    Projects
                  </h3>
                </div>
              </Link>

              <Link to="/technologies" onClick={this.hideMenu}>
                <div className="nav">
                  <h3>
                    Technologies
                  </h3>
                </div>
              </Link>

              <Link to="/contacts" onClick={this.hideMenu}>
                <div className="nav">
                  <h3>
                    Contacts
                  </h3>
                </div>
              </Link>
            </div>

      ) :(null) }
      </div>
    )
  }
}



export default Header;
