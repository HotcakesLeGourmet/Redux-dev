import React from 'react';
import './Article.css';

const article = ({ article }) => {
  return (
    <div className='article'>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <button>Delete</button>
    </div>
  );
};

export default article;
