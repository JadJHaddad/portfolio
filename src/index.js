import React from 'react';
import ReactDOM from 'react-dom';
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
      <div class = "inner-box-one">
        <h1 className = "title" >Developing a Website</h1>
        <h1 className = "title">That Tells Your Story</h1>
      </div>
      <div className = "inner-box-two" >
        <div className = "small-box">Design</div>
        <div className = "small-box">Build</div>
        <div className = "small-box">Manage</div>
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
