import React from 'react';
import {BrowserRouter, HashRouter, Route} from 'react-router-dom';

// Importing Website components
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Technologies from './Technologies';
import Contacts from './Contacts';


const App = () => (
  <HashRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/technologies" component={Technologies} />
      <Route path="/contacts" component={Contacts}/>
    </div>
  </HashRouter>
);

export default App;
