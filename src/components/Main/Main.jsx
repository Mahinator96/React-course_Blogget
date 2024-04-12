import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';

import style from './Main.module.css';
// import { PostsContextProvider } from '../../context/postsContext';

export const Main = (props) => (
  <main className={style.main}>
    <Layout>
      <Tabs />

      {/* <PostsContextProvider> */}
      <List />
      {/* </PostsContextProvider> */}
    </Layout>
  </main>
);
