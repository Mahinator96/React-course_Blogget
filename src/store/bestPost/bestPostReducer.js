import {
  BESTPOST_REQUEST,
  BESTPOST_REQUEST_SUCCESS,
  BESTPOST_REQUEST_ERROR,
} from './action';

const initialState = {
  loading: true,
  data: {},
  error: '',
};

export const bestPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case BESTPOST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case BESTPOST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };

    case BESTPOST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
