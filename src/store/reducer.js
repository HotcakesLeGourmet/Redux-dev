/* eslint-disable default-case */
import * as actionTypes from './actionTypes';
const initialState = {
  articles: [
    {
      id: 1,
      title: 'Example post',
      body: `But ere she from the church-door stepped She smiled and told us why: It was a wicked woman's curse, Quoth she, and what care I? She smiled, and smiled, and passed it off Ere from the door she stept  lorem ipsum`,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle = {
        id: Math.random(), // not really unique but it's just an example
        title: action.article.title,
        body: action.article.body,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
  }
  return state;
};
export default reducer;
