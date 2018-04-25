import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Moment from 'moment';
import { Imagem, Video, Audio } from './Media';

import '../style/LongNews.css';

class NewsDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			titulo: props.item.headline,
			autor: props.item.autor,
			data: new Moment(props.item.data, "DD/MM/YYY - HH:mm"),
			texto: props.item.texto,
			video: props.item.video,
			imagem: props.item.imagem,
			audio: props.item.audio
		};
	}

	render() {
		return (
			<div className="longNews">
				<div className="headline">{this.state.titulo}</div>
				<div className="adtInfo">
					<div className="autor">{this.state.autor}</div>
					<div className="timestamp">{this.state.data.format("DD/MM/YY - HH[h]mm")}</div>
				</div>
				<div className="media">
					<Video link={this.state.video} />
					<Imagem link={this.state.imagem} />
					<Audio link={this.state.audio} />
				</div>
				<div className="texto" dangerouslySetInnerHTML={{__html: this.state.texto}}></div>
			</div>
		);
	}
}

NewsDetails.defaultProps = {
	dados: {
		titulo: "titulo",
		autor: "autor",
		data: new Moment(),
		texto: "<p>Lorem Ipsum? Dolor Sit Amet!</p>"+
			   "<p>Lorem Ipsum Dolor Sit Amet...</p>",
		video: null,
		imagem: null,
		audio: null
	}
};

export default NewsDetails;