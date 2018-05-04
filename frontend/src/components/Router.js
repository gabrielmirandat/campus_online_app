import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from './Home';
import NewsDetails from './NewsDetails';
import NewsAdd from './NewsAdd';
import KeyLogin from './KeyLogin'
import axios from 'axios';

const AuthUser = () => {
	let url = 'http://localhost:5000/access/'
	let key = localStorage.getItem("key")
	axios.post(url, key).then(
		res => {
			if(res.data.length)
				return <NewsAdd/>
			else
				return <KeyLogin/>
		}, 
		err => {
				console.log("Erro na requisição da chave!")
				return null;
		}
	);
};

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/details/:id' component={NewsDetails}/>
      <Route path='/addnews' render={AuthUser}/>
    </Switch>
  </main>
)

export default Router;

// NewsDetails
// NewsAdd