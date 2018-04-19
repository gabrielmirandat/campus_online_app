import React, { Component } from 'react';
import NewsList from './NewsList'
import logo from '../fac.png';
import '../style/App.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import request from 'request';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {date: moment(), calendarOpen: false, };

    this.news = [];

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);

    this.requestNews();
  }

  openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("opensidenav").style.visibility = "hidden";
  }

  closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("opensidenav").style.visibility = "visible";
  }

  updateDate(date) {
    this.setState({date});
    this.toggleCalendar();
    this.requestNews();
  }

  toggleCalendar (e) {
    e && e.preventDefault()
    this.setState({calendarOpen: !this.state.calendarOpen})
  }

  requestNews () {
    let url = 'http://localhost:5000/news/' + this.state.date.format("DD-MM-YY"); 

    console.log(url);
    request(url, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
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
          <button
            className="calendar-button"
            onClick={this.toggleCalendar}>
            <h3>
              {this.state.date.format("DD/MM/YYYY")}
            </h3>
          </button>
          
          {
            this.state.calendarOpen && (
              <DatePicker
                dateFormat="DD/MM/YYYY"
                minDate={moment("2018-04-18")}
                selected={this.state.date}
                onChange={this.updateDate}
                withPortal
                inline 
              />
            )
          }
          
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