import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { authURL } from '../../../api/auth';
import { Text } from '../../../UI/Text';

import { ReactComponent as LoginIcon } from './img/login.svg';
import style from './Auth.module.css';
// import { tokenContext } from '../../../context/tokenContext';
import { authContext } from '../../../context/authContext';
import { useDispatch } from 'react-redux';
import { deleteToken } from '../../../store';

export const Auth = () => {
  // const token = useSelector((state) => state.token);
  const dispath = useDispatch();
  // const { delToken } = useContext(tokenContext);
  const [showLogout, setShowLogout] = useState(false);
  const { auth, clearAuth } = useContext(authContext);

  /* Показать кнопку 'Выйти' при нажитии на аватар,
  если зарегестрирован пользователь */
  const getOut = () => {
    if (auth) {
      setShowLogout(!showLogout);
    }
  };

  const logOut = () => {
    // delToken();
    dispath(deleteToken);
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn} onClick={getOut}>
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
      {showLogout && (
        <button className={style.logout} onClick={logOut}>
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
