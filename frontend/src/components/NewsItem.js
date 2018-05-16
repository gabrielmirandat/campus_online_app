import React, { Component } from 'react';
import { Imagem, Video, Audio } from './Media';
import moment from 'moment';

import '../style/ShortNews.css';

class NewsItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			item: props.item,
			key: props.id,
		};
	}

	componentDidMount() {
		console.log("NewsItem", this.state.item);
	}

	render() {
		return (
			<div className="shortNews">
				<div className="headline">{this.state.item.titulo}</div>
				<div className="adtInfo">
					<div className="timestamp"> {moment(this.state.item.data).format("DD/MM/YY - HH:mm:ss")} </div>
				</div>
				<div className="media">
					<Video link={this.state.item.link_video} />
					<Imagem link={this.state.item.link_imagem} />
				</div>
				<div className="texto" dangerouslySetInnerHTML={{__html: this.state.item.texto}}></div>
				{this.state.item.link && <a className="link" href={this.state.item.link}>Leia mais...</a>}
			</div>
		);
	}
}

export default NewsItem;