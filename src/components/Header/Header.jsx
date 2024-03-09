import React from 'react';
import style from './Header.module.css';

import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Heading from './Heading';
import Auth from './Auth';

export const Header = (props) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading text='Blogget' />
        <Search />
        <Auth />
      </div>
    </Layout>
  </header>
);
