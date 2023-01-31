import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import img1 from './assets/mdits.png'
import '../components/header.css'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false,
    };
  }

  render() {
    const { showLoginForm } = this.state;
    return (
      <div className="header">
          <div className="logo">
            <NavLink to="/">MDITS</NavLink> <br></br>
            Mission Driven It Solutions Pvt.Ltd
            
          
            
           {/* <img src={img1} alt=""/><br></br>
            Mission Driven It Solutions Pvt.Ltd 
           */}
      
    
           </div>
          <div className="navbar">
            <ul>
              <li>
                <NavLink to="/" exact activeStyle={{ color: '#2a6496' }}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" exact activeStyle={{ color: '#2a6496' }}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" exact activeStyle={{ color: '#2a6496' }}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" exact activeStyle={{ color: '#2a6496' }}>
                  Portfolio
                </NavLink>
              </li>
             
              <li>
                <NavLink to="/services" exact activeStyle={{ color: '#2a6496' }}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/teams" exact activeStyle={{ color: '#2a6496' }}>
                  Team
                </NavLink>
              </li>
            </ul>
          </div>
          
      </div>
    );
  }
}

export default Header;
