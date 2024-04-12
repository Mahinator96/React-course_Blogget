import { useEffect } from 'react';
import { bestPostRequestAsync } from '../store/bestPost/action';
import { useSelector, useDispatch } from 'react-redux';

export const useBestPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.bestPost.data);
  const loading = useSelector((state) => state.bestPost.loading);

  useEffect(() => {
    dispatch(bestPostRequestAsync());
  }, []);

  // console.log(loading);
  return [posts, loading];
};
