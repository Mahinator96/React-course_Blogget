// import { useSelector } from 'react-redux';
import style from './List.module.css';
import Post from './Post';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bestPostRequestAsync } from '../../../store/bestPost/action';

export const List = () => {
  const posts = useSelector((state) => state.bestPost.posts);
  const endList = useRef(null);
  const dispath = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) dispath(bestPostRequestAsync());
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
