import { useContext } from 'react';
import { Text } from '../../../UI/Text';
import style from './FormComment.module.css';
import { authContext } from '../../../context/authContext';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../store';

export const FormComment = () => {
  const value = useSelector((state) => state.comment);
  const dispath = useDispatch();
  const { auth } = useContext(authContext);
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  const handleChange = (e) => {
    dispath(updateComment(e.target.value));
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
