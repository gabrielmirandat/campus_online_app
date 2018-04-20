import React, { Component } from 'react';
import NewsItem from './NewsItem'
import testImg from '../icon.png'

import '../style/NewsItem.css';

class NewsList extends Component {
  constructor(props) {
    super(props);

    this.news = props.newsList.map( (element, index) => {
      return new NewsItem( element.titulo, element.resumo, element.data, element.texto, element.foto, element.link )
    });
    this.news.sort( NewsItem.Compare );

    this.addNews( new NewsItem(
                            "Microsoft anuncia nova logo",
                            "Mudança total de identidade visual",
                            "20/04/2018 - 11h10",
                            "<p>De forma completamente inesperada, a Microsoft anunciou uma nova identidade visual.</p>\
                            <p>Completamente diferente de tudo que já foi feito antes, essa nova identidade está mais minimalista.</p>\
                            <p>A controvérsia foi grande mas designers do mundo inteiro concordam que com certeza representa a nova era na qual a Microsoft está passando.</p>",
                            0, testImg) );
    this.addNews( new NewsItem(
                            "Campus Online agora também em aplicativo",
                            "Novo veículo de comunicação mais fácil para os usuários",
                            "20/04/2018 - 9h30",
                            "<p>Os alunos de Jornalismo da Faculdade de Comunicação (FAC) em parceria com alunos de Engenharia e Ciência da Computação do Departamento de Ciência da Computação (CIC) liberaram hoje o acesso ao novo aplicativo para acesso mais rápido às notícias do Campus Online.</p>\
                            <p>Esse aplicativo não precisa ser instalado através de uma loja como aplicativos mais tradicionais, afirmam os estudantes. Basta salvar o site em seu celular e o acesso será idêntico ao de um aplicativo normal.</p>\
                            <p>E o que vocês acharam disso? Promissor? Vocês vão usar? Nós aqui da redação adoramos a ideia e todos os nossos parentes já estão usando!</p>") );
  }

  addNews( news ) {
    this.news.push( news );
    this.news.sort( NewsItem.compare );
  }

  render() {
    return(
      <div className="newsList">{this.news.map( (value, index) => { return value.render(index); } )}</div>
    );
  }
}

export default NewsList;