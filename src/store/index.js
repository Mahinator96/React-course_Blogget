import { tokenMiddleware, tokenReducer } from './tokenReducer';
import { authReducer } from './auth/authReducer';
import { bestPostReducer } from './bestPost/bestPostReducer';
import { configureStore } from '@reduxjs/toolkit';
import { commentReducer } from './commentReducer';
import postDataSlice from './postData/postDataSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    bestPost: bestPostReducer,
    postData: postDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
