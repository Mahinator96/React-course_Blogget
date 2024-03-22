import PropTypes from 'prop-types';

import style from './Thumbnail.module.css';
import notphoto from '../img/notphoto.jpg';

export const Thumbnail = ({ title, src }) => {
  // console.log(exists);
  if (!src.includes('https://')) {
    src = notphoto;
  }

  return <img className={style.img} src={src} alt={title} />;
};

Thumbnail.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  exists: PropTypes.number,
};
