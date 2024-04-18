import { createSlice } from '@reduxjs/toolkit';
import { postDataRequestAsync } from './action';

const initialState = {
  post: {},
  comments: [],
  status: '',
  error: '',
};

export const postDataSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(postDataRequestAsync.pending.type, (state) => {
        state.error = '';
        state.status = 'loading';
      })
      .addCase(postDataRequestAsync.fulfilled.type, (state, action) => {
        state.post = action.payload.post;
        state.comments = action.payload.comments;
        state.error = '';
        state.status = 'loaded';
      })
      .addCase(postDataRequestAsync.rejected.type, (state, action) => {
        state.error = action.error;
        state.status = 'error';
      });
  },
});

export default postDataSlice.reducer;
