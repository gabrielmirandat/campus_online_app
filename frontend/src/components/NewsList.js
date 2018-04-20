import React from 'react';
import NewsItem from './NewsItem'
import '../style/NewsList.css';

const NewsList = ({newsList}) => {

  return (
    <div className="news-list">
      {newsList.map((newsItem, index) => <NewsItem newsItem={newsItem} key={index} />)}
    </div>
  );
};

export default NewsList;