import React, { Component } from 'react';
import styles from './Nav.css';
import {NavLink} from 'react-router-dom'
class NavComponent extends Component {
  constructor () {
    super()
    this.state = {acc:'collapse navbar-collapse'};
   
    this.toggleClass = this.toggleClass.bind(this)
  }

  toggleClass(){
    if (this.state.acc == 'collapse navbar-collapse'){
      this.setState({acc:'collapse navbar-collapse in'})
    } else {
      this.setState({acc:'collapse navbar-collapse'})
    }
  }

  render() {
    return (
      
      <nav className="navbar navbar-inverse navbar-component">
        <div className="container-fluid">
        <div className="navbar-header">
          <button onClick={this.toggleClass} type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span> 
          </button>
          <NavLink className="navbar-brand" to="/">React-JS Demo</NavLink>
        </div>
        <div className={this.state.acc} id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="text-uppercase" onClick={this.toggleClass}><NavLink activeClassName="active" to="/home">Home</NavLink></li>
            <li className="text-uppercase" onClick={this.toggleClass}><NavLink activeClassName="active" to="/about">About Me</NavLink></li>
        
            <li className="text-uppercase" onClick={this.toggleClass}><NavLink activeClassName="active" to="/services">Services</NavLink></li>
            <li  className="text-uppercase" onClick={this.toggleClass}><NavLink activeClassName="active" to="/portfolio">Portfolio</NavLink></li>
            <li  className="text-uppercase" onClick={this.toggleClass}><NavLink activeClassName="active" to="/experience">Experience</NavLink></li>
            <li  className="text-uppercase" onClick={this.toggleClass}><NavLink activeClassName="active" to="/accolade">Accolade</NavLink></li>
            <li  className="text-uppercase" onClick={this.toggleClass}><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li  className="text-uppercase" onClick={this.toggleClass}><NavLink activeClassName="active" to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</NavLink></li>
            <li  className="text-uppercase" onClick={this.toggleClass}><NavLink activeClassName="active" to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></li>
          </ul>
         </div>
        </div>
      </nav>
    );
  }
}

export default NavComponent;

const  isActiveNav = (match, location) => {
  if (!match) {
    return false;
  }
  return true;

};