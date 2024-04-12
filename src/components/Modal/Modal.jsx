import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import { useEffect, useRef } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import { Comments } from './Comments/Comments';
import { FormComment } from './FormComment/FormComment';
import { useSelector } from 'react-redux';
import Preloader from '../../UI/Preloader';

export const Modal = ({ id, closeModal }) => {
  const overlayRef = useRef(null);
  const status = useSelector((state) => state.postData.status);
  const [content] = useCommentsData(id);

  let modalContent = 'Пусто';
  let comments = 'Пусто';

  if (status === 'load') {
    modalContent = content.modalContent;
    comments = content.comments;
  }

  const handleClick = (e) => {
    const target = e.target;

    if (
      target === overlayRef.current ||
      target.closest('button#btn_close-modal') ||
      e.key === 'Escape'
    ) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && <Preloader size={200} />}
        {status === 'error' && 'Ошибка...'}
        {status === 'load' && (
          <>
            {/* // const modalContent = modalContent;
  // const comments = content[1]; */}
            <h2 className={style.title}>
              {console.log}
              {!modalContent ? 'Загрузка...' : modalContent.title}
            </h2>

            <div className={style.content}>
              <Markdown
                options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank',
                      },
                    },
                  },
                }}
              >
                {!modalContent
                  ? 'Загрузка...'
                  : modalContent.selftext === ''
                  ? 'Нет описания к посту'
                  : modalContent.selftext}
              </Markdown>
            </div>

            <p className={style.author}>
              {!modalContent ? 'Загрузка...' : modalContent.author}
            </p>

            <FormComment />

            <Comments comments={comments} />

            <button
              className={style.close}
              id='btn_close-modal'
              onClick={() => {}}
            >
              <CloseIcon />
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
