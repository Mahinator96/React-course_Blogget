import axios from 'axios';
import { URL_API } from '../../api/const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postDataRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, { getState }) => {
    const token = getState().token.token;

    if (!token) return;

    return axios(`${URL_API}/comments/${id}.json?limit=4`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(
        ({
          data: [
            {
              data: {
                children: [{ data: post }],
              },
            },
            {
              data: { children },
            },
          ],
        }) => {
          const comments = children.map((item) => item.data);
          return { post, comments };
        }
      )
      .catch((err) => ({
        error: err.toString(),
      }));
  }
);
