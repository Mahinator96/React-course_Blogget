import {
  BESTPOST_REQUEST,
  BESTPOST_REQUEST_SUCCESS,
  BESTPOST_REQUEST_ERROR,
  BESTPOST_REQUEST_SUCCESS_AFTER,
} from './action';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
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
        isLast: !action.after,
      };

    case BESTPOST_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.posts],
        error: '',
        after: action.after,
        isLast: !action.after,
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
