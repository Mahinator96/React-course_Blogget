import formatDate from '../../utils/formatDate';
import PropTypes from 'prop-types';

import style from './Time.module.css';

export const Time = ({ date }) => (
  <time className={style.date} dateTime={date}>
    {formatDate(date)}
  </time>
);

Time.propTypes = {
  date: PropTypes.number,
};
