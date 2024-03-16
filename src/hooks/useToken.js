import { useState, useEffect } from 'react';

export const useToken = (state) => {
  const [token, setToken] = useState(state);

  useEffect(() => {
    // Если в адрессной строке есть '/auth'
    if (location.pathname.includes('/auth')) {
      // Получение token из адресной строки
      const token = new URLSearchParams(location.hash.substring(1)).get(
        'access_token'
      );

      setToken(token);
    }

    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer'));
    }
  }, []);

  // Сохранение в LocalStorage token, чтобы авторизация не слетала
  useEffect(() => {}, [token]);
  if (token) {
    localStorage.setItem('bearer', token);
  }

  // Удаление токена
  const delToken = () => {
    if (token) {
      localStorage.removeItem('bearer');
      // Исзменить поисковую строку на главную страницу
      location.href = location.origin;
    }
  };

  return [token, delToken];
};
