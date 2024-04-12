import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postDataRequestAsync } from '../store/postData/action';

export const useCommentsData = (id) => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.postData.data);

  useEffect(() => {
    dispatch(postDataRequestAsync(id));
  }, []);

  // console.log(posts);
  return [content];
};
