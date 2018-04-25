import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Moment from 'moment';
import NewsItem from './NewsItem';
import NewsDetails from './NewsDetails';
import testImg from '../icon.png'

import '../style/NewsList.css';

class NewsList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: props.list
		}
	}

	componentDidMount () {
		this.addNews( {
			titulo: "Microsoft anuncia nova logo",
			autor: "Fulano da Silva Sousa",
			data: "20/04/2018 - 11h10",
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
			data: "20/04/2018 - 9h30",
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
		this.state.list.push( news );
		this.state.list.sort( NewsList.compareNews );
	}

	static compareNews( a, b ) {
		var dataa = new Moment(a.data, "DD/MM/YYYY - HH:mm");
		var datab = new Moment(b.data, "DD/MM/YYYY - HH:mm");
		if( dataa > datab ) return -1;
		else if( dataa < datab ) return 1;
		else return 0;
	}

	render() {
		return(
			<div className="shortNewsList">
				{this.state.list.map( (listItem, index) => {
					return (
						<NewsItem item={listItem} key={index} />
					);
				} )}
			</div>
		);
	}
}

export default NewsList;