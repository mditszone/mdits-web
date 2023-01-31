import React, { Component } from 'react';
import { render } from 'react-dom';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

import Header from './components/header';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Portfolio from './pages/portfolio/portfolio';

import Services from './pages/services/services';
import Teams from './pages/teams/teams';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Router>
       <div>
        <Header /> 
          
          <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/services" element={<Services />} />
          
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </div>
         <Footer />
        </div> 
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
