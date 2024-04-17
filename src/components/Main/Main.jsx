import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import Modal from '../Modal';
import Home from './Home';
import NotFountPage from './NotFoundPage';

import style from './Main.module.css';
import { Route, Routes } from 'react-router-dom';

export const Main = (props) => (
  <main className={style.main}>
    <Layout>
      <Tabs />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFountPage />} />
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route>
      </Routes>
    </Layout>
  </main>
);
