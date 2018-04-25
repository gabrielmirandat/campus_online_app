import React, { Component } from 'react';
import Moment from 'moment';
import { Imagem, Video, Audio } from './Media';
import {Redirect} from 'react-router-dom'

import '../style/ShortNews.css';

class NewsItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			item: props.item
		};

		this.handleClick = this.handleClick.bind(this);
	}

	
	handleClick() {
		this.setState({redirect: true});
	}

	render() {
		if (this.state.redirect) {
			return <Redirect push to="/details" params={{item: this.state.item}} />;
		}
		
		return (
			<div className="shortNews" onClick={this.handleClick}>
				<div className="headline">{this.state.item.titulo}</div>
				<div className="adtInfo">
					<div className="autor">{this.state.item.autor}</div>
					<div className="timestamp">{this.state.item.data.format("HH[h]mm")}</div>
				</div>
				<div className="resumo">{this.state.item.resumo}</div>
			</div>
		);
	}
}

NewsItem.defaultProps = {
	dados: {
		titulo: "headline",
		autor: "autor",
		data: new Moment(),
		resumo: "resumo",
		video: null,
		imagem: null,
		audio: null
	}
};

export default NewsItem;