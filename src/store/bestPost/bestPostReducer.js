import {
  BESTPOST_REQUEST,
  BESTPOST_REQUEST_SUCCESS,
  BESTPOST_REQUEST_ERROR,
} from './action';

const initialState = {
  loading: true,
  posts: [],
  error: '',
  after: '',
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
        posts: action.posts,
        error: '',
        after: action.after,
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
