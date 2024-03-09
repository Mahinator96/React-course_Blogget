import PropTypes from 'prop-types';

import style from './Thumbnail.module.css';
import notphoto from '../img/notphoto.jpg';

export const Thumbnail = ({ title }) => (
  <img className={style.img} src={notphoto} alt={title} />
);

Thumbnail.propTypes = {
  title: PropTypes.string,
};
