import { useEffect, useState } from 'react';
import { URL_API } from '../api/const';

export const useBestPosts = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    if (posts) return;

    fetch(`${URL_API}/best`)
      .then((response) => response.json)
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err));
  });

  return [posts];
};
