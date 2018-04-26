import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NewsAdd extends Component {
	constructor(props) {
		super(props);
	}

	handleSignIn(e) {
		e.preventDefault()
		let username = this.refs.username.value
		let password = this.refs.password.value
		this.props.onSignIn(username, password)
	}

	render() {
		return (
			<div className="news-add">
				<p> <Link to='/'>Home</Link> </p>
				<form onSubmit={this.handleSignIn.bind(this)}>
					<h3>Login</h3>
					<input type="text" ref="username" placeholder="usuário" />
					<input type="password" ref="password" placeholder="senha" />
					<input type="submit" value="Login" />
				</form>
    		</div>
		);
	}
};

export default NewsAdd;