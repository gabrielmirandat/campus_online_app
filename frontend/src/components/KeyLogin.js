import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'

import '../style/LongNews.css';

class KeyLogin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			key: localStorage.getItem("key")
		}
  	}
  
  	componentDidMount() {
		return <Redirect to={{ pathname: "/addnews" }}/>;
	}

	handleSignIn(key) {
		localStorage.setItem(key, JSON.stringify(key));
		this.setState({key});
		return <Redirect to={{ pathname: "/addnews" }}/>;
	}

	render () {
		return (
			<div className="key-login">
				<p> <Link to='/'>Home</Link> </p>
				<form onSubmit={this.handleSignIn.bind(this)}>
					<h3>Key</h3>
					<input type="password" ref="key" placeholder="key" />
					<input type="submit" value="Login" />
				</form>
			</div>
		);
	}
}

export default KeyLogin;

