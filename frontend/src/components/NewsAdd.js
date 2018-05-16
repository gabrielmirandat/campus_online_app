import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios';

import '../style/NewsAdd.css';

class NewsAdd extends Component {
	constructor(props) {
		super(props);

		this.state = {
			key: null,
			valid: false,
			item: {},
			redirect: false
		}
	}

	handleKeyChange = (e) => {
		console.log(e.target.value)
		this.setState({key: e.target.value});
	}

	handleSignIn = () => {
		console.log(this.state.key)
		let url = 'http://app.campus.fac.unb.br/access/'; 

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
		let url = 'http://app.campus.fac.unb.br/addnews/'; 

		axios.post(url, this.state.item).then(
      		res => {
				console.log(res.data.response);
				this.setState({ redirect: true });
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
						<p> <Link className="btn" to='/'>Home</Link> </p>
						<h3>Chave de Acesso</h3>
						<input type="password" placeholder="chave" onChange={(e) => {this.setState({key: e.target.value})}}/>
						<button onClick={this.handleSignIn.bind(this)}> Acessar </button>
				</div>
				);
			} else {
				if (this.state.redirect) {
					return <Redirect to='/'/>;
				}

				return (
					<div className="news-add">
						<form onSubmit={this.handleNewsAdd}>
							<p> <Link className="btn" to='/'>Home</Link> </p>
							<h3>Titulo</h3>
							<input type="text" placeholder="Título da notícia" name="titulo" onChange={this.handleItem}/>
							<h3 hidden>Resumo</h3>
							<textarea hidden rows="4" cols="50" placeholder="resumo" name="resumo" onChange={this.handleItem}/>
							<h3>Texto</h3>
							<textarea rows="4" cols="50" placeholder="Texto da notícia" name="texto" onChange={this.handleItem}/>
							<h3>Link Externo</h3>
							<input type="text" placeholder="Link para leia mais" name="link" onChange={this.handleItem}/>
							<h3>Link Video</h3>
							<input type="text" placeholder="Vídeo" name="link_video" onChange={this.handleItem}/>
							<h3>Link Foto</h3>
							<input type="text" placeholder="Foto" name="link_foto" onChange={this.handleItem}/>
							<h3>Link Audio</h3>
							<input type="text" placeholder="Áudio" name="link_audio" onChange={this.handleItem}/>
							<p>
							<button type="submit">Adicionar</button>
							</p>
						</form>
						<div style={{height: 120 + 'px'}}></div>
					</div>
				);
			}
	}
};

export default NewsAdd;