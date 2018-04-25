import React, { Component } from 'react';
import NewsList from './NewsList'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';

import 'react-datepicker/dist/react-datepicker.css';
import '../style/App.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {date: moment(), 
                  calendarOpen: false, 
                  newsList: []};

    
    this.updateDate = this.updateDate.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.requestNews = this.requestNews.bind(this);
  }

  componentDidMount () {
    // this.requestNews();
  }

  updateDate(date) {
    this.setState({date}, () => {
      this.toggleCalendar();
      this.requestNews();
    });
  }

  toggleCalendar (e) {
    e && e.preventDefault()
    this.setState({calendarOpen: !this.state.calendarOpen})
  }

  requestNews () {
    let url = 'http://localhost:5000/news/' + this.state.date.format("DD-MM-YY"); 

    axios.get(url).then(
      res => {
        this.setState({newsList: res.data.response});
      }, 
      err => {
        console.log("Não conseguiu buscar do banco!")
      }
    );
  }

  render() {
    return (
      <div>
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
          
          <NewsList list={this.state.newsList} />
        </div>
        
        <div style={{height: 60 + 'px'}}></div>
      </div>
    );
  }
}


export default Home;