import style from './NotFoundPage.module.css';
import { Text } from '../../../UI/Text';

export const NotFoundPage = (props) => {
  console.log('hello from <NotFoundPage />');
  return (
    <div className={style.wrapper}>
      <Text As='h1' className={style.errorText}>
        404
      </Text>
    </div>
  );
};
