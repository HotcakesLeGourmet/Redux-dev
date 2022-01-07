import React, { useState } from 'react';
import './AddArticle.css';

const AddArticle = ({ saveArticle }) => {
  const [article, setArticle] = useState();

  const handleArticleData = (e) => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    });
  };
  const addNewArticle = (e) => {
    e.preventDefault();
    saveArticle(article);
  };

  return (
    <form onSubmit={addNewArticle} className='add-article'>
      <div className="xd" data-required="(required)" >
      <input
        type='text'
        id='title'
        placeholder='Title (Max. 12 letters)'
        onChange={handleArticleData}
        className='inputxd'
      />
      </div>
      <input
        type='text'
        id='body'
        placeholder='Body (Max. 500 letters)'
        onChange={handleArticleData}
        data-required='description'
      />
      <button>Add article</button>
    </form>
  );
};
export default AddArticle;
