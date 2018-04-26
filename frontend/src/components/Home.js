import React, { Component } from 'react';
import NewsList from './NewsList'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';

import testImg from '../icon.png'
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

  componentWillMount () {
    this.requestNews();

		this.addNews( {
			titulo: "Microsoft anuncia nova logo",
			autor: "Fulano da Silva Sousa",
			data: moment(),
			resumo: "Mudança total de identidade visual é de agradar os olhos mas causa polêmica e divide especialistas "+
					"e usuários. Principal reclamação é que não parece mais se tratar da mesma empresa.",
			texto: "<p>De forma completamente inesperada, a Microsoft anunciou uma nova identidade visual.</p>"+
				   "<p>Completamente diferente de tudo que já foi feito antes, essa nova identidade está mais minimalista.</p>"+
				   "<p>A controvérsia foi grande mas designers do mundo inteiro concordam que com certeza representa a nova era na qual a Microsoft está passando.</p>",
			video: null,
			imagem: testImg,
			audio: null
		} );

		this.addNews( {
			titulo: "Campus Online agora também em aplicativo",
			autor: "Ciclano Alves de Almeida",
			data: moment(),
			resumo: "Novo veículo de comunicação mais fácil para os usuários é liberado. Com recursos de integração e sem "+
					"nescessidade de instalação, é esperado que um grande número de pessoas comece a utilizá-lo nas próximas semanas.",
			texto: "<p>Os alunos de Jornalismo da Faculdade de Comunicação (FAC) em parceria com alunos de Engenharia e Ciência da Computação do Departamento de Ciência da Computação (CIC) liberaram hoje o acesso ao novo aplicativo para acesso mais rápido às notícias do Campus Online.</p>"+
				   "<p>Esse aplicativo não precisa ser instalado através de uma loja como aplicativos mais tradicionais, afirmam os estudantes. Basta salvar o site em seu celular e o acesso será idêntico ao de um aplicativo normal.</p>"+
				   "<p>E o que vocês acharam disso? Promissor? Vocês vão usar? Nós aqui da redação adoramos a ideia e todos os nossos parentes já estão usando!</p>",
			video: null,
			imagem: null,
			audio: null
		} );
	}

	addNews( news ) {
    this.state.newsList.push( news );
		// this.state.newsList.sort( NewsList.compareNews );
	}

	static compareNews( a, b ) {
		// var dataa = new Moment(a.data, "DD/MM/YYYY - HH:mm");
		// var datab = new Moment(b.data, "DD/MM/YYYY - HH:mm");
		// if( dataa > datab ) return -1;
		// else if( dataa < datab ) return 1;
		// else return 0;
  }
  
  updateDate(date) {
    this.setState({date}, () => {
      this.toggleCalendar();
      // this.requestNews();
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
          
          <NewsList list={this.state.newsList} />
          
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
          
        </div>
        
        <div style={{height: 60 + 'px'}}></div>
      </div>
    );
  }
}


export default Home;