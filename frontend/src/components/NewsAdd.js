import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

class NewsAdd extends Component {
	constructor(props) {
		super(props);

		this.state = {
			key: null,
			valid: false
		}
	}

	handleKeyChange(e) {
		console.log(e.target.value)
		this.setState({key: e.target.value});
	}

	handleSignIn() {
		console.log(this.state.key)
		let url = 'http://localhost:5000/access/'; 

    axios.post(url, {"chave":this.state.key}).then(
      res => {
				console.log(res.data)
				if(res.data.response.length)
					this.setState({valid:true});
				else 
					alert("Chave inválida!");
      }, 
      err => {
        alert("Erro ao logar com chave!");
      }
    );
	}
	
	render() {
			if (!this.state.valid) {
				return (
					<div className="key-login">
						<p> <Link to='/'>Home</Link> </p>
						<h3>Chave de Acesso</h3>
						<input type="password" placeholder="chave" onChange={this.handleKeyChange.bind(this)} />
						<button onClick={this.handleSignIn.bind(this)}> Acessar </button>
				</div>
				);
			} else {
				return (
					<div className="news-add">
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
	}
};

export default NewsAdd;