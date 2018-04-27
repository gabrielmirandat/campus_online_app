import React, { Component } from 'react';

import '../style/Media.css';

class Imagem extends Component {
	constructor (props) {
		super(props);

		this.state = {
			link: props.link,
			alt: props.alt
		}
	}

	render() {
		return this.state.link ? ( <img src={this.state.link} alt={this.state.alt} /> ) : null;
	}
}

class Video extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			link: props.link,
			alt: props.alt
		}
	}

	render() {
		return this.state.link ? ( <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe> ) : null; // TODO: Render como video
	}
}

class Audio extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			link: props.link,
			alt: props.alt
		}
	}

	render() {
		return this.state.link ? ( <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34019569&amp;color=0066cc"></iframe> ) : null; // TODO: Render como audio
	}
}

export { Imagem, Video, Audio };