import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Moment from 'moment';
import { Imagem, Video, Audio } from './Media';

import '../style/LongNews.css';

class LongNews extends Component {
	constructor(props) {
		super(props);

		this.state = {
			headline: props.dados.headline,
			autor: props.dados.autor,
			data: new Moment(props.dados.data, "DD/MM/YYY - HH:mm"),
			texto: props.dados.texto,
			linkVideo: props.dados.video,
			linkImagem: props.dados.imagem,
			linkAudio: props.dados.audio
		};

		this.fechar = this.fechar.bind(this);
	}

	render() {
		return (
			<div className="longNews" onClick={this.fechar}>
				<div className="headline">{this.state.headline}</div>
				<div className="adtInfo">
					<div className="autor">{this.state.autor}</div>
					<div className="timestamp">{this.state.data.format("DD/MM/YY - HH[h]mm")}</div>
				</div>
				<div className="media">
					<Video link={this.state.linkVideo} />
					<Imagem link={this.state.linkImagem} />
					<Audio link={this.state.linkAudio} />
				</div>
				<div className="texto" dangerouslySetInnerHTML={{__html: this.state.texto}}></div>
			</div>
		);
	}

	fechar() {
		let modalRoot = document.getElementById( "modal" );

		modalRoot.setAttribute( "hidden", "" );
		ReactDOM.render( null, modalRoot);
	}
}

LongNews.defaultProps = {
	dados: {
		headline: "headline",
		autor: "autor",
		data: new Moment(),
		texto: "<p>Lorem Ipsum? Dolor Sit Amet!</p>"+
			   "<p>Lorem Ipsum Dolor Sit Amet...</p>",
		linkVideo: null,
		linkImagem: null,
		linkAudio: null
	}
};

export default LongNews;