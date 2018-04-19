import React, { Component } from 'react';
import logo from '../fac.png';
import '../style/App.css';
import NewsList from './NewsList'

class App extends Component {

  constructor(props) {
    super(props);

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
            <a href="" className="closebtn" onClick={e => {e.preventDefault();this.closeNav()}}>&times;</a>
            <p> Links do Campus Online<br />
            <a href="https://twitter.com/campusitounb" className="twitter">Twitter</a>
            <a href="https://www.instagram.com/campusonline/" className="instagram">Instagram</a>
            <a href="https://www.facebook.com/onlinecampus/" className="facebook">Facebook</a>
            </p>
            <p> Links da FAC<br />
            <a href="http://campus.fac.unb.br/">Site</a>
            <a href="https://twitter.com/fac_unb">Twitter</a>
            <a href="https://www.facebook.com/faculdadedecomunicacao/">Facebook</a>
            <a href="https://www.youtube.com/channel/UChJBFMMGoVw2yXeFIllVnZw">Youtube</a>
            <a href="https://issuu.com/campusunb">Issu</a>
            </p>
          </nav>
            
          <span id="opensidenav" className="burger" onClick={this.openNav}>&#9776;</span>
        </header>

        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>CAMPUS ONLINE</h2>
        </div>

        <div className="app-content">
          <NewsList/>
        </div>

        <footer>
          <h4>2018 FAC/CIC</h4>
        </footer>
      </div>
    );
  }
}


export default App;