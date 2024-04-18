import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postDataRequestAsync } from '../store/postData/action';

export const useCommentsData = (id) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postData.post);
  const comments = useSelector((state) => state.postData.comments);

  useEffect(() => {
    dispatch(postDataRequestAsync(id));
  }, []);
  // console.log(posts);
  return [post, comments];
};
