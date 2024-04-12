import axios from 'axios';
import { URL_API } from '../../api/const';

export const POSTDATA_REQUEST = 'POSTDATA_REQUEST';
export const POSTDATA_REQUEST_SUCCESS = 'POSTDATA_REQUEST_SUCCESS';
export const POSTDATA_REQUEST_ERROR = 'POSTDATA_REQUEST_ERROR';

export const postDataRequest = () => ({
  type: POSTDATA_REQUEST,
  error: '',
});

export const postDataRequestSuccess = (data) => ({
  type: POSTDATA_REQUEST_SUCCESS,
  data,
});

export const postDataRequestError = (error) => ({
  type: POSTDATA_REQUEST_ERROR,
  error,
});

export const postDataRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;

  dispatch(postDataRequest());

  axios(`${URL_API}/comments/${id}.json?limit=4`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data }) => {
      const modalContent = data[0].data.children[0].data;
      const comments = data[1];
      const contentModal = { modalContent, comments };
      dispatch(postDataRequestSuccess(contentModal));
      // setModalContent(data[0].data.children[0].data);
      // setComments(data[1]);
    })
    .catch((err) => {
      console.log(err);
      dispatch(postDataRequestError(err.toString()));
    });
};
