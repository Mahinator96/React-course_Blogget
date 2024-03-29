import { useContext, useRef } from 'react';
import { Text } from '../../../UI/Text';
import style from './FormComment.module.css';
import { authContext } from '../../../context/authContext';

export const FormComment = (props) => {
  const { auth } = useContext(authContext);
  const refTextarea = useRef(null);
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(refTextarea.current.value);
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <Text size={14} tsize={18}>
        {auth.name ? auth.name : 'Имя авторизованного пользователя'}
      </Text>
      <textarea className={style.textarea} ref={refTextarea}></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
