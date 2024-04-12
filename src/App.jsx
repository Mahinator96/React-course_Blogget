import Header from './components/Header';
import Main from './components/Main';
import { updateToken } from './store/tokenReducer';
import { getToken } from './api/token';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
