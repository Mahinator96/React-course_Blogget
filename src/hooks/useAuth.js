import { useEffect, useState } from 'react';
import { URL_API } from '../api/const';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../store';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = useSelector((state) => state.token);
  const dispath = useDispatch();
  // Запрос на авторизацию
  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: { Authorization: `bearer ${token}` },
    })
      // Если запрос с ошибкой - отправляес в catch
      .then((response) => {
        if (response.status === 401) {
          // Отправка !!СТРОКИ!! статуса ошибки
          throw new Error(response.status);
        }

        return response.json();
      })
      // Получаем имя из данных и картинку
      .then(({ name, icon_img: iconImg }) => {
        // Обрезаем
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({ name, img });
      })
      /* Если токен не действителен (или неправильной логин или пароль)
      - очищаем auth */
      .catch((err) => {
        console.error(err);
        setAuth({});
        dispath(deleteToken());
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
