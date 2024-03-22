import style from './List.module.css';
import Post from './Post';
import { useContext } from 'react';
import { postsContext } from '../../../context/postsContext';

export const List = () => {
  const { posts } = useContext(postsContext);

  return (
    <ul className={style.list}>
      {posts.map((postData) => {
        const data = postData.data;

        return <Post key={data.id} postData={data} />;
      })}
    </ul>
  );
};
