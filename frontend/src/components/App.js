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
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("opensidenav").style.visibility = "hidden";
  }

  closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("opensidenav").style.visibility = "visible";
  }

  render() {
    return (
      <div className="app">
        <header>
          <nav id="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
            <a href="http://campus.fac.unb.br/">Site</a>
            <a href="https://twitter.com/fac_unb">Twitter</a>
            <a href="https://www.facebook.com/faculdadedecomunicacao/">Facebook</a>
            <a href="https://www.youtube.com/channel/UChJBFMMGoVw2yXeFIllVnZw">Youtube</a>
            <a href="https://issuu.com/campusunb">Issu</a>
          </nav>
            
          <span id="opensidenav" className="burger" onClick={this.openNav}>&#9776;</span>
        </header>

        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Campus Online</h2>
        </div>

        <div className="app-content">
          <div className="button">
            <a href="https://twitter.com/campusitounb" className="twitter"> TWITTER </a>
          </div>

          <div className="button">
            <a href="https://www.instagram.com/campusonline/" className="instagram"> INSTAGRAM </a>
          </div>

          <div className="button">
            <a href="https://www.facebook.com/onlinecampus/" className="facebook"> FACEBOOK </a>
          </div>
        </div>

        <footer>
          <h4>2018 FAC/CIC</h4>
        </footer>
      </div>
    );
  }
}

export default App;