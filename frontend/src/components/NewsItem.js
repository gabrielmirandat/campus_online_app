import React from 'react';
import Moment from 'moment';
import Modal from './Modal';

import '../style/NewsItem.css';

class Media {
  constructor(mediaLink = "") {
    this.state = {
      mediaLink: mediaLink
    };
  }
  render() {
    return("");
  }
}

class Imagem extends Media {
  constructor(mediaLink) {
    super(mediaLink);
  }
  render() {
    return( <img src={this.state.mediaLink} /> );
  }
}
class Video extends Media {
  constructor(mediaLink) {
    super(mediaLink);
  }
  render() {
    return( <img src={this.state.mediaLink} /> ); // TODO: Render como video
  }
}
class Audio extends Media {
  constructor(mediaLink) {
    super(mediaLink);
  }
  render() {
    return( <img src={this.state.mediaLink} /> ); // TODO: Render como audio
  }
}

class NewsItem {

  constructor ( headline = "", autor = "", resumo = "", data = Moment(), texto = "", mediaType = null, mediaLink = null ) {
    var media;
    switch (mediaType) {
      case 0:
        media = new Imagem(mediaLink);
        break;
      case 1:
        media = new Video(mediaLink);
        break;
      case 2:
        media = new Audio(mediaLink);
        break;
      default:
        media = new Media(mediaLink);
        break;
    }

    this.state = {
      media: media,
      headline: headline,
      autor: autor,
      resumo: resumo,
      data: new Moment(data, "DD/MM/YYYY - HH:mm"),
      texto: texto,
      showFull: false
    };

    this.ShowModal = this.ShowModal.bind(this);
    this.HideModal = this.HideModal.bind(this);
  }

  render(i) {
    const modal =  this.state.showFull ? (
      <Modal>
        <div id="newsItemFull" onClick={ this.HideModal }>
          <div className="media">{this.state.media.render()}</div>
          <div className="headline">{this.state.headline}</div>
          <div className="adtInfo">
            <div className="autor">{this.state.autor}</div>
            <div className="timestamp">{this.state.data.format("HH[h]mm")}</div>
          </div>
          <div className="texto" dangerouslySetInnerHTML={{__html: this.state.texto}}></div>
        </div>
      </Modal> ) : null;
    return (
      <div className="newsItem" key={i} onClick={ this.ShowModal }>
        <div className="media">{this.state.media.render()}</div>
        <div className="headline">{this.state.headline}</div>
        <div className="adtInfo">
          <div className="autor">{this.state.autor}</div>
          <div className="timestamp">{this.state.data.format("HH[h]mm")}</div>
        </div>
        <div className="resumo">{this.state.resumo}</div>
        
        {modal}

      </div>
    );
  }

  ShowModal() {
    this.state.showFull = true;
  }

  HideModal() {
    this.state.showFull = false;
  }

  static compare( a, b ) {
    var dataa = new Moment(a.data, "DD/MM/YYYY - HH:mm");
    var datab = new Moment(b.data, "DD/MM/YYYY - HH:mm");
    if( dataa > datab ) return -1;
    else if( dataa < datab ) return 1;
    else return 0;
  }
}

export default NewsItem;