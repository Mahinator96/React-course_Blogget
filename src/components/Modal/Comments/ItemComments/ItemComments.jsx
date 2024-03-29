import PropTypes from 'prop-types';
import { Text } from '../../../../UI/Text';
import Date from '../../../../UI/Time';
import style from './ItemComments.module.css';

export const ItemComments = ({ author, content, date }) => (
  <li className={style.item}>
    <Text As={'h3'} className={style.author} size={18} tsize={22}>
      {author}
    </Text>
    <Text As={'p'} className={style.comment} size={14} tsize={18}>
      {content}
    </Text>

    <Date date={date} />
  </li>
);

ItemComments.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.number,
};
