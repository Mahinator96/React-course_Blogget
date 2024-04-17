import style from './Home.module.css';
import { Text } from '../../../UI/Text';

export const Home = (props) => {
  console.log('hello from <Home />');
  return (
    <div className={style.wrapper}>
      <Text As='h1' className={style.title}>
        Стартовая страница
      </Text>

      <Text As='p' className={style.welcome}>
        Добро пожаловать!
      </Text>

      <Text As='p' className={style.changeCategory}>
        Выберите категорию
      </Text>
    </div>
  );
};
