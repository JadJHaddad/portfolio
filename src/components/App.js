import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// Importing Website components
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Technologies from './Technologies';
import Contacts from './Contacts';


const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/technologies" component={Technologies} />
      <Route path="/contacts" component={Contacts}/>
    </div>
  </BrowserRouter>
);

export default App;
