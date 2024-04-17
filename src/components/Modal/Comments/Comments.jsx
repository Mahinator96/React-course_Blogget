import PropTypes from 'prop-types';
import style from './Comments.module.css';
import { ItemComments } from './ItemComments/ItemComments';

export const Comments = ({ comments }) => (
  <ul className={style.list}>
    {!comments
      ? 'Загрузка'
      : comments.data.children
      ? comments.data.children.map((comment) => {
          {
            /* console.log(comment.data); */
          }
          if (comment.kind === 'more') {
            return;
          } else {
            return (
              <ItemComments
                key={comment.data.id}
                author={comment.data.author}
                content={comment.data.body}
                date={comment.data.created}
              />
            );
          }
        })
      : 'Нет комментариев'}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.object,
};
