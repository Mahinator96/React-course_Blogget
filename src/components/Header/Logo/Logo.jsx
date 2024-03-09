import React from 'react';
import style from './Logo.module.css';

import { ReactComponent as LogoIcon } from './img/logo.svg';

export const Logo = (props) => (
  <a className={style.link} href='/'>
    <LogoIcon className={style.logo} />
  </a>
);
