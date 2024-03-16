// Закончил на 41:14
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { authURL } from '../../../api/auth';
import { Text } from '../../../UI/Text';

import { ReactComponent as LoginIcon } from './img/login.svg';
import style from './Auth.module.css';
import { URL_API } from '../../../api/const';

export const Auth = ({ token, delToken }) => {
  const [auth, setAuth] = useState({});
  const [logout, setLogout] = useState(false);

  // Запрос на авторизацию
  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: { Authorization: `bearer ${token}` },
    })
      // Если запрос с ошибкой - отправляес в catch
      .then((response) => {
        if (response.status !== 200) {
          // Отправка !!СТРОКИ!! статуса ошибки
          throw new Error(response.status);
        }

        return response;
      })
      .then((response) => response.json())
      // Получаем имя из данных и картинку
      .then(({ name, icon_img: iconImg }) => {
        // Обрезаем
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({ name, img });
      })
      /* Если токен не действителен (или неправильной логин или пароль)
      - очищаем auth */
      .catch((err) => {
        if (err.message === '401') {
          delToken;
          console.error('Error 401. Password or Login not correct');
          // console.log(err);
        }
        console.error(err);
        setAuth({});
      });
  }, [token]);

  /* Показать кнопку 'Выйти' при нажитии на аватар,
  если зарегестрирован пользователь */
  const showLogout = () => {
    if (auth) {
      setLogout(!logout);
    }
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn} onClick={showLogout}>
          <img
            className={style.img}
            src={auth.img}
            alt={`Аватар ${auth.name}`}
            title={auth.name}
          />
        </button>
      ) : (
        <Text className={style.authLink} As='a' href={authURL}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
      {logout && (
        <button className={style.logout} onClick={delToken}>
          Выйти
        </button>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
