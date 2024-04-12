import {
  POSTDATA_REQUEST,
  POSTDATA_REQUEST_ERROR,
  POSTDATA_REQUEST_SUCCESS,
} from './action';

const initialState = {
  status: 'loading',
  data: {},
  error: '',
};

export const postDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTDATA_REQUEST:
      return {
        ...state,
        status: 'loading',
      };

    case POSTDATA_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: '',
        status: 'load',
      };

    case POSTDATA_REQUEST_ERROR:
      return {
        ...state,
        error: action.errors,
        status: 'error',
      };

    default:
      return state;
  }
};
