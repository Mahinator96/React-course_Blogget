// import { useSelector } from 'react-redux';
import style from './List.module.css';
import { useBestPosts } from '../../../hooks/useBestPosts';
import Post from './Post';
import { useSelector } from 'react-redux';

export const List = () => {
  // const posts = useSelector((state) => state.bestPost.data);
  const [posts, loading] = useBestPosts();
  const token = useSelector((state) => state.token.token);

  // console.log(posts);
  // console.log(loading);

  return (
    <ul className={style.list}>
      {/* {console.log(posts)} */}
      {/* {loading ? console.log(loading) : console.log(posts)} */}
      {!token ? (
        <p>Authorization</p>
      ) : loading ? (
        <p>load...</p>
      ) : (
        posts.map((postData) => {
          const data = postData.data;

          return <Post key={data.id} postData={data} id={data.id} />;
        })
      )}
      {/* {console.log('bestPosts: ', posts)} */}
    </ul>
  );
};
