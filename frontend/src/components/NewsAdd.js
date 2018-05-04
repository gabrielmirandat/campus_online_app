import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

class NewsAdd extends Component {
	constructor(props) {
		super(props);

		this.state = {
			key: null,
			valid: false,
			item: {}
		}
	}

	handleKeyChange = (e) => {
		console.log(e.target.value)
		this.setState({key: e.target.value});
	}

	handleSignIn = () => {
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

	handleNewsAdd = (e) => {
		e.preventDefault();
		console.log(this.state.item)
		let url = 'http://localhost:5000/addnews/'; 

		axios.post(url, this.state.item).then(
      res => {
				console.log(res.data.response);
			}, 
      err => {
        alert("Erro ao adicionar noticia!");
      }
    );
	}

	handleItem = (e) => {
		let itemState = this.state.item;
		this.setState({item: {...itemState, [e.target.name]: e.target.value}});
	}
	
	render() {
			if (!this.state.valid) {
				return (
					<div className="key-login">
						<p> <Link to='/'>Home</Link> </p>
						<h3>Chave de Acesso</h3>
						<input type="password" placeholder="chave" onChange={(e) => {this.setState({key: e.target.value})}}/>
						<button onClick={this.handleSignIn.bind(this)}> Acessar </button>
				</div>
				);
			} else {
				return (
					<div className="news-add">
						<form onSubmit={this.handleNewsAdd}>
							<p> <Link to='/'>Home</Link> </p>
							<h3>Titulo</h3>
							<input type="text" placeholder="titulo" name="titulo" onChange={this.handleItem}/>
							<h3>Resumo</h3>
							<textarea rows="4" cols="50" placeholder="resumo" name="resumo" onChange={this.handleItem}/>
							<h3>Texto</h3>
							<textarea rows="4" cols="50" placeholder="texto" name="texto" onChange={this.handleItem}/>
							<h3>Link Externo</h3>
							<input type="text" placeholder="link" name="link" onChange={this.handleItem}/>
							<h3>Link Video</h3>
							<input type="text" placeholder="video" name="video" onChange={this.handleItem}/>
							<h3>Link Foto</h3>
							<input type="text" placeholder="foto" name="foto" onChange={this.handleItem}/>
							<h3>Link Audio</h3>
							<input type="text" placeholder="audio" name="audio" onChange={this.handleItem}/>
							<button type="submit"> Adicionar </button>
						</form>
					</div>
				);
			}
	}
};

export default NewsAdd;