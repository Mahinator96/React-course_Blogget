import { Text } from '../../../UI/Text';
import style from './FormComment.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../store/commentReducer';
import { useAuth } from '../../../hooks/useAuth';

export const FormComment = () => {
  const value = useSelector((state) => state.comment.comment);
  const dispatch = useDispatch();
  const [auth] = useAuth();
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <Text size={14} tsize={18}>
        {auth.name ? auth.name : 'Имя авторизованного пользователя'}
      </Text>
      <textarea
        className={style.textarea}
        value={value}
        onChange={handleChange}
      ></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
