import { useContext, useRef } from 'react';
import { Text } from '../../../UI/Text';
import style from './FormComment.module.css';
import { authContext } from '../../../context/authContext';

export const FormComment = (props) => {
  const { auth } = useContext(authContext);
  const textareaRef = useRef(null);
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(textareaRef.current.value);
  };

  return (
    <form className={style.form}>
      <Text size={14} tsize={18}>
        {auth.name ? auth.name : 'Имя авторизованного пользователя'}
      </Text>
      <textarea className={style.textarea} ref={textareaRef}></textarea>
      <button className={style.btn} onClick={handlerSubmit}>
        Отправить
      </button>
    </form>
  );
};
