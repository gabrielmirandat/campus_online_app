import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NewsAdd extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="key-login">
				<p> <Link to='/'>Home</Link> </p>
				<form onSubmit={this.handleSignIn.bind(this)}>
					<h3>Titulo</h3>
					<input type="text" ref="titulo" placeholder="titulo" />
					<h3>Resumo</h3>
					<input type="text" ref="resumo" placeholder="resumo" />
					<input type="submit" value="Adicionar" />
				</form>
			</div>
		);
	}
};

export default NewsAdd;