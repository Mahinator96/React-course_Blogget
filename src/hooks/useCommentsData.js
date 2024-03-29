import { useContext, useEffect, useState } from 'react';
import { URL_API } from '../api/const';
import { tokenContext } from '../context/tokenContext';

export const useCommentsData = (id) => {
  const { token } = useContext(tokenContext);
  const [comments, setComments] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    fetch(`${URL_API}/comments/${id}.json?limit=4`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setModalContent(data[0].data.children[0].data);
        setComments(data[1]);
        // setComment(data.data.children);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(posts);
  return [modalContent, comments];
};
