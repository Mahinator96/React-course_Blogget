import style from './List.module.css';
import Post from './Post';

export const List = (props) => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 24,
      date: '2024-02-24T09:45:00Z',
      id: 11,
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 25,
      date: '2024-03-25T10:45:00Z',
      id: 113,
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 26,
      date: '2024-04-26T11:45:00Z',
      id: 155,
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 27,
      date: '2024-05-27T12:45:00Z',
      id: 123,
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
