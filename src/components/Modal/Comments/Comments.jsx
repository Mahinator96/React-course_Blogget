import PropTypes from 'prop-types';
import style from './Comments.module.css';
import { ItemComments } from './ItemComments/ItemComments';

export const Comments = ({ comments }) => (
  <ul className={style.list}>
    {!comments
      ? 'Загрузка'
      : comments
      ? comments.map((comment) => {
          {
            console.log(comment);
          }
          if (comment.kind === 'more') {
            return;
          } else {
            return (
              <ItemComments
                key={comment.id}
                author={comment.author}
                content={comment.body}
                date={comment.created}
              />
            );
          }
        })
      : 'Нет комментариев'}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
};
