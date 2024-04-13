import axios from 'axios';
import { URL_API } from '../../api/const';

export const BESTPOST_REQUEST = 'BESTPOST_REQUEST';
export const BESTPOST_REQUEST_SUCCESS = 'BESTPOST_REQUEST_SUCCESS';
export const BESTPOST_REQUEST_ERROR = 'BESTPOST_REQUEST_ERROR';
export const BESTPOST_REQUEST_SUCCESS_AFTER = 'BESTPOST_REQUEST_SUCCESS_AFTER';

export const bestPostRequest = () => ({
  type: BESTPOST_REQUEST,
  error: '',
});

export const bestPostRequestSuccess = (data) => ({
  type: BESTPOST_REQUEST_SUCCESS,
  posts: data.children,
  after: data.after,
});

export const bestPostRequestSuccessAfter = (data) => ({
  type: BESTPOST_REQUEST_SUCCESS_AFTER,
  posts: data.children,
  after: data.after,
});

export const bestPostRequestError = (error) => ({
  type: BESTPOST_REQUEST_ERROR,
  error,
});

export const bestPostRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  const after = getState().bestPost.after;
  const loading = getState().bestPost.loading;
  const isLast = getState().bestPost.isLast;

  if (!token || loading || isLast) return;

  dispatch(bestPostRequest());

  axios(`${URL_API}/best.json?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data }) => {
      if (after) {
        dispatch(bestPostRequestSuccessAfter(data.data));
      } else {
        dispatch(bestPostRequestSuccess(data.data));
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(bestPostRequestError(err.toString()));
    });
};
