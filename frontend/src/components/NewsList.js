import React, { Component } from 'react';

import NewsItem from './NewsItem';

import '../style/NewsList.css';

class NewsList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: []
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ list: nextProps.list });  
	}

	componentDidMount(){
		console.log("NewsList", this.state.list);
	}

	render() {
		return(
			<div className="shortNewsList">
				{this.state.list.map( (listItem, id) => {
					console.log(id);
					return (
						<NewsItem item={listItem} key={id} id={id} />
					);
				} )}
				<div style={{height: 120 + 'px'}}></div>
			</div>
		);
	}
}

export default NewsList;