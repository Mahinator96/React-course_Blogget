import { useEffect, useState } from 'react';
import { URL_API } from '../api/const';

export const useBestPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${URL_API}/best.json?limit=4`)
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data.data.children);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(posts);
  return [posts];
};
