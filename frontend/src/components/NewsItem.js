import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

import '../style/ShortNews.css';

class NewsItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			item: props.item,
			key: props.id,
			redirect: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		console.log(this.state);
	}

	handleClick() {
		this.setState({redirect: true});
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to={{ 
				pathname: `/details/${this.state.key}`, 
				query: {item: this.state.item}
			}}/>;
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

export default NewsItem;