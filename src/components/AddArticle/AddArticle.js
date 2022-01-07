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
      <div
        className='add-article-titleInput'
        data-required='(Max. 12 characters)'
      >
        <input
          type='text'
          id='title'
          placeholder='Title '
          onChange={handleArticleData}
        />
      </div>
      <div
        className='add-article-bodyInput'
        data-required='(Max. 500 characters)'
      >
        <input
          type='text'
          id='body'
          placeholder='Body'
          onChange={handleArticleData}
          data-required='description'
        />
      </div>
      <button>Add article</button>
    </form>
  );
};
export default AddArticle;
