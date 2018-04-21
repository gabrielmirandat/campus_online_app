import React, { Component } from 'react';
import Moment from 'moment';
import { Imagem, Video, Audio } from './Media';

import '../style/ShortNews.css';

class ShortNews extends Component {
	constructor(props) {
		super(props);

		this.state = {
			index: props.index,
			headline: props.dados.headline,
			autor: props.dados.autor,
			data: new Moment(props.dados.data, "DD/MM/YYY - HH:mm"),
			resumo: props.dados.resumo,
			linkVideo: props.dados.video,
			linkImagem: props.dados.imagem,
			linkAudio: props.dados.audio
		};

		this.callback = {
			onClick: props.onClick
		};

		this.meClicou = this.meClicou.bind(this);
	}

	render() {
		return (
			<div className="shortNews" onClick={this.meClicou}>
				<div className="media">
					<Video link={this.state.linkVideo} />
					<Imagem link={this.state.linkImagem} />
					<Audio link={this.state.linkAudio} />
				</div>
				<div className="headline">{this.state.headline}</div>
				<div className="adtInfo">
					<div className="autor">{this.state.autor}</div>
					<div className="timestamp">{this.state.data.format("HH[h]mm")}</div>
				</div>
				<div className="resumo">{this.state.resumo}</div>
			</div>
		);
	}

	meClicou() {
		this.callback.onClick(this.state.index);
	}
}

ShortNews.defaultProps = {
	dados: {
		headline: "headline",
		autor: "autor",
		data: new Moment(),
		resumo: "resumo",
		linkVideo: null,
		linkImagem: null,
		linkAudio: null
	},
	index: null
};

export default ShortNews;