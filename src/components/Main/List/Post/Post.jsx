import PropTypes from 'prop-types';

// Подключаю компоненты
import Thumbnail from './Thumbnail';
import Content from './Content';
import Rating from './Rating';

import Delete from './Delete';

import style from './Post.module.css';
import Time from '../../../../UI/Time';

export const Post = ({ id, postData }) => {
  const {
    title,
    author,
    ups,
    created,
    thumbnail: src,
    selftext: markdown,
  } = postData;
  return (
    <li className={style.post}>
      <Thumbnail title={title} src={src} />

      <Content title={title} author={author} markdown={markdown} id={id} />

      <Delete />

      <Rating ups={ups} />

      <Time date={created} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
  id: PropTypes.string,
};
