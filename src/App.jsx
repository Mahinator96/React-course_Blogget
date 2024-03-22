import Header from './components/Header';
import Main from './components/Main';
import { AuthContextProvider } from './context/authContext';
import { PostsContextProvider } from './context/postsContext';
import { TokenContextProvider } from './context/tokenContext';

function App() {
  return (
    <PostsContextProvider>
      <TokenContextProvider>
        <AuthContextProvider>
          <Header />
          <Main />
        </AuthContextProvider>
      </TokenContextProvider>
    </PostsContextProvider>
  );
}

export default App;
