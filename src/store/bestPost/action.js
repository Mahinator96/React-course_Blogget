import axios from 'axios';
import { URL_API } from '../../api/const';

export const BESTPOST_REQUEST = 'BESTPOST_REQUEST';
export const BESTPOST_REQUEST_SUCCESS = 'BESTPOST_REQUEST_SUCCESS';
export const BESTPOST_REQUEST_ERROR = 'BESTPOST_REQUEST_ERROR';

export const bestPostRequest = () => ({
  type: BESTPOST_REQUEST,
  error: '',
});

export const bestPostRequestSuccess = (data) => ({
  type: BESTPOST_REQUEST_SUCCESS,
  data,
});

export const bestPostRequestError = (error) => ({
  type: BESTPOST_REQUEST_ERROR,
  error,
});

export const bestPostRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;

  if (!token) return;

  dispatch(bestPostRequest());

  axios(`${URL_API}/best.json?limit=4`)
    .then(({ data: { data } }) => {
      // console.log(data);
      dispatch(bestPostRequestSuccess(data.children));
    })
    .catch((err) => {
      console.log(err);
      dispatch(bestPostRequestError(err.toString()));
    });
};
