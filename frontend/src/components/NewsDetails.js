import React, { Component } from 'react';
import { Imagem, Video, Audio } from './Media';
import {Link} from 'react-router-dom'

import '../style/LongNews.css';

class NewsDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			item: localStorage.getItem("newsItem")
		}
	}

	componentDidMount () {
		console.log(this.state.item);
	}

	render () {
		return (
			<div className="longNews">
				<p> <Link to='/'>Home</Link> </p>
				<div className="headline">{this.state.item.titulo}</div>
				<div className="adtInfo">
					<div className="autor">{this.state.item.autor}</div>
					
				</div>
				<div className="media">
					<Video link={this.state.item.video} />
					<Imagem link={this.state.item.imagem} />
					<Audio link={this.state.item.audio} />
				</div>
				<div className="texto" dangerouslySetInnerHTML={{__html: this.state.item.texto}}></div>
				<div style={{height: 60 + 'px'}}></div>
			</div>
		);
	}
}

export default NewsDetails;

