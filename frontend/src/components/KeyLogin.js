import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewsAdd from './NewsAdd'
import {Link} from 'react-router-dom'

import '../style/LongNews.css';

class KeyLogin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			key: null
		}
  }
  
  componentDidMount() {
    // if(check service get key login local) valid
    return <Redirect to={{ 
      pathname: "/addnews"
    }}/>;
	}

	render () {
		return (
      <input type="text" name="fname">Key</input>
		);
	}
}

export default NewsDetails;

