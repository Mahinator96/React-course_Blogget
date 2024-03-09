import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';

import style from './Main.module.css';

export const Main = (props) => (
  <main className={style.main}>
    <Layout>
      <Tabs />

      <List />
    </Layout>
  </main>
);
