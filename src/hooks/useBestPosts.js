import { useEffect, useState } from 'react';
import { URL_REDDIT } from '../api/const';

export const useBestPosts = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetch(`${URL_REDDIT}/best.json?limit=4`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data.children);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(posts);
  return [posts];
};
