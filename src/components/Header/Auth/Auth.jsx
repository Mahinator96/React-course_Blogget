import { useState } from 'react';
import PropTypes from 'prop-types';
import { authURL } from '../../../api/auth';
import { Text } from '../../../UI/Text';

import { ReactComponent as LoginIcon } from './img/login.svg';
import style from './Auth.module.css';
// import { tokenContext } from '../../../context/tokenContext';
import { useDispatch } from 'react-redux';
import { deleteToken } from '../../../store/tokenReducer';
import { useAuth } from '../../../hooks/useAuth';
import Preloader from '../../../UI/Preloader';

export const Auth = () => {
  // const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  // const { delToken } = useContext(tokenContext);
  const [showLogout, setShowLogout] = useState(false);
  const [auth, loading, clearAuth] = useAuth();

  /* Показать кнопку 'Выйти' при нажитии на аватар,
  если зарегестрирован пользователь */
  const getOut = () => {
    if (auth) {
      setShowLogout(true);
    }
  };

  const logOut = () => {
    // delToken();
    setShowLogout(false);
    dispatch(deleteToken());
    clearAuth();
  };

  return (
    <div className={style.container}>
      {loading ? (
        <Preloader size={30} />
      ) : auth.name ? (
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
