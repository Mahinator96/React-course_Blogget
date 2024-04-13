// import { useSelector } from 'react-redux';
import style from './List.module.css';
import { useBestPosts } from '../../../hooks/useBestPosts';
import Post from './Post';
import { useEffect, useRef } from 'react';

export const List = () => {
  const [posts] = useBestPosts();
  const endList = useRef(null);

  useEffect(() => {
    if (!posts.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) console.log('see see');
      },
      { rootMargin: '100px' }
    );

    observer.observe(endList.current);
  }, [endList.current]);

  return (
    <ul className={style.list}>
      {posts.map((postData) => {
        const data = postData.data;

        return <Post key={data.id} postData={data} id={data.id} />;
      })}

      <li className={style.end} ref={endList}></li>
    </ul>
  );
};
