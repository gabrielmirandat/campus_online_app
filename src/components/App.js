import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("openSideNav").style.visibility = "hidden";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("openSideNav").style.visibility = "visible";
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
            <a href="http://campus.fac.unb.br/">Site</a>
            <a href="https://twitter.com/fac_unb">Twitter</a>
            <a href="https://www.facebook.com/faculdadedecomunicacao/">Facebook</a>
            <a href="https://www.youtube.com/channel/UChJBFMMGoVw2yXeFIllVnZw">Youtube</a>
            <a href="https://issuu.com/campusunb">Issu</a>
          </nav>
            
          <span id="openSideNav" className="burger" onClick={this.openNav}>&#9776;</span>
        </header>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Campus Online</h2>
        </div>
        <p className="App-intro">
          This is the Campus Online page.
        </p>
        
        <footer>
          <p>Copyright 2009 Your name</p>
        </footer>
      </div>
    );
  }
}

export default App;