import React from 'react';
import News from './News'

const NewsList = (props) => {
  
  return (
    <ul className="col-md-4 list-group">
      <News/>
    </ul>
  );
};

export default NewsList;