import React, { Component } from 'react';
import logo from './images/logo/logo.svg';
import './App.css';
import NavComponent from './components/Navigation/Nav';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio'
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
import SignUp from './components/users/SignUp'
import Login from './components/users/Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div className="App container">
            <header className="App-header">
              <div className="logo">
              <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className="navigation">
                <NavComponent/>
              </div>
              
            </header> 
            <Route exact title="Repositories" path="/" component={Login}/>
            <Route exact title="Repositories" path="/home" component={About}/>
            <Route exact title="Repositories" path="/about" component={About}/>
            <Route exact title="Repositories" path="/services" component={Services}/>
            <Route exact title="Repositories" path="/portfolio" component={Portfolio}/>
            <Route exact title="" path="/experience" component={Experience} />
            <Route exact title="" path="/signup" component={SignUp} />
            <Route exact title="" path="/login" component={Login} />
        </div>
        </Router>       
      </div>
    );
  }
}

export default App;