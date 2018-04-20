import React from 'react';
import '../style/NewsItem.css';

const NewsItem = ({newsItem, key}) => {

  return (
    <div className="news-item">
      <div className="news-titulo"> {newsItem.titulo} </div>
      <div className="news-resumo"> {newsItem.resumo} </div>
      <div className="news-texto"> {newsItem.texto} </div>
      <div className="news-data"> {newsItem.data} </div>
      <div className="news-link"> {newsItem.link} </div>
    </div>
  );
};

export default NewsItem;