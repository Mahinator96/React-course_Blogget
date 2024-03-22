import PropTypes from 'prop-types';

// Подключаю компоненты
import Thumbnail from './Thumbnail';
import Content from './Content';
import Rating from './Rating';
import Time from './Time';
import Delete from './Delete';

import style from './Post.module.css';

export const Post = ({ postData }) => {
  const { title, author, ups, created, thumbnail: src } = postData;
  return (
    <li className={style.post}>
      <Thumbnail title={title} src={src} />

      <Content title={title} author={author} />

      <Delete />

      <Rating ups={ups} />

      <Time date={created} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
