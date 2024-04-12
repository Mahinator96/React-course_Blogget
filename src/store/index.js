import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenMiddleware, tokenReducer } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { thunk } from 'redux-thunk';
import { authReducer } from './auth/authReducer';
import { bestPostReducer } from './bestPost/bestPostReducer';
import { postDataReducer } from './postData/postDataReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  bestPost: bestPostReducer,
  postData: postDataReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk))
);
