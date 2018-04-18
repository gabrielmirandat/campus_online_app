import React, { Component } from 'react';
import logo from './fac.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};
    this.news = [];

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.fetchNews = this.fetchNews.bind(this);
    // this.showNews = this.showNews.bind(this);
  }

  openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("opensidenav").style.visibility = "hidden";
  }

  closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("opensidenav").style.visibility = "visible";
  }

  fetchNews() {
    this.news.push({titulo: 'New1', resumo: 'Esta é a new 1', texto: 'Bla, bla', data: '18/05/2018'});
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
          <h2>Campus Online</h2>
        </div>

        <div className="app-content">
          <div className="button" onClick={this.fetchNews()}>
            Add Fake News
          </div>

          <div id="newsContainer">
            {this.news.map(function(item, i) {
              return (
                <div key={`new_${i}`} className="new">
                  <div className='titulo'> {item.titulo} </div>
                  <div className='resumo'> {item.resumo} </div>
                  <div className='texto'> {item.texto} </div>
                  <div className='data'> {item.data} </div>
                </div>
              )
            })}
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