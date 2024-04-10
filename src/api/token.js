export const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  let token = '';
  // Если в адрессной строке есть '/auth'
  if (location.pathname.includes('/auth')) {
    // Получение token из адресной строки
    token = new URLSearchParams(location.hash.substring(1)).get('access_token');

    setToken(token);
  }

  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer'));
  }

  return token;
};
