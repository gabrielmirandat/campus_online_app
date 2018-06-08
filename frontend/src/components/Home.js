import React, { Component } from 'react';
import NewsList from './NewsList'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';

import 'react-datepicker/dist/react-datepicker.css';
import '../style/App.css';
import '../style/Loading.css';
import loadingImage from '../loading.gif'

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {date: moment(), 
                  calendarOpen: false, 
                  newsList: [], 
                  loading: false};

    
    this.updateDate = this.updateDate.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.requestNews = this.requestNews.bind(this);
  }

  componentDidMount() {
    document.querySelectorAll(".calendar-button input").forEach( (calBtn) => {calBtn.setAttribute("readonly", "readonly");} );
    this.requestNews();
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
    this.setState({ loading: true });
    let url = 'http://app.campus.fac.unb.br/news/' + this.state.date.format("YYYY-MM-DD"); 

    axios.get(url).then(
      res => {
        this.setState({newsList: []});
        this.setState({newsList: res.data.response, loading: false});
      }, 
      err => {
        console.log("Não conseguiu buscar do banco!");
	this.setState({ loading: false });
      }
    );
  }

  render() {
    return (
      <div id="Home">
        { this.state.loading && <img className="centered" src={loadingImage} /> }
        <div className="app-content">
          <div className="calendar-button" id="calendar-region">
           <DatePicker
                dateFormat="DD/MM/YYYY"
                minDate={moment("2018-05-21")}
                maxDate={moment()}
                selected={this.state.date}
                onChange={this.updateDate}
                withPortal
           />
          </div>
          <NewsList list={this.state.newsList} />
         </div>
       </div>
    );
  }
}


export default Home;
