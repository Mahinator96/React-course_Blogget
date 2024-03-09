import React from 'react';
import propTypes from 'prop-types';

import { ReactComponent as LoginIcon } from './img/login.svg';
import style from './Auth.module.css';

export const Auth = ({ auth }) => (
  <button className={style.button}>
    {auth ? auth : <LoginIcon className={style.svg} />}
  </button>
);

Auth.propTypes = {
  auth: propTypes.string,
};
