import React, { Component } from 'react';
import Moment from 'moment';

class Media extends Component {
  constructor(props, mediaLink = "") {
    super(props);

    this.mediaLink = mediaLink;
  }
  render() {
    return("");
  }
}

class Imagem extends Media {
  constructor(props, mediaLink) {
    super(props, mediaLink);
  }
  render() {
    return( <img src={this.mediaLink} /> );
  }
}
class Video extends Media {
  constructor(props, mediaLink) {
    super(props, mediaLink);
  }
  render() {
    return( <img src={this.mediaLink} /> ); // TODO: Render como video
  }
}
class Audio extends Media {
  constructor(props, mediaLink) {
    super(props, mediaLink);
  }
  render() {
    return( <img src={this.mediaLink} /> ); // TODO: Render como audio
  }
}

class News extends Component {

  constructor ( props, headline = "", resumo = "", data = "DD/MM/YYYY - HH:mm", texto = "", mediaType = null, mediaLink = null ) {
    super(props);

    switch (mediaType) {
      case 0:
        this.media = new Imagem(props, mediaLink);
        break;
      case 1:
        this.media = new Video(props, mediaLink);
        break;
      case 2:
        this.media = new Audio(props, mediaLink);
        break;
      default:
        this.media = new Media(props, mediaLink);
        break;
    }

    this.headline = headline;
    this.resumo = resumo;
    this.data = data;
    this.texto = texto;
  }

  render(i) {
    return (
      <div className="news" key={i}>
          <div className="media">{this.media.render()}</div>
          <div className="headline">{this.headline}</div>
          <div className="adtInfo">
            <div className="resumo">{this.resumo}</div>
            <div className="timestamp">{this.data}</div>
          </div>
          <div className="texto" dangerouslySetInnerHTML={{__html: this.texto}}></div>
      </div>
    );
  }

  static compare( a, b ) {
    var dataa = new Moment(a.data, "DD/MM/YYYY - HH:mm");
    var datab = new Moment(b.data, "DD/MM/YYYY - HH:mm");
    if( dataa > datab ) return -1;
    else if( dataa < datab ) return 1;
    else return 0;
  }
}

export default News;