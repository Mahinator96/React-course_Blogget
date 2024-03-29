import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import { useEffect, useRef } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';

export const Modal = ({ id, closeModal }) => {
  const overlayRef = useRef(null);
  const [modalContent, comments] = useCommentsData(id);

  // const { title, author, selftext: markdown } = modalContent;
  console.log(modalContent);
  console.log(comments);

  // if (!markdown) {
  //   markdown = 'Описания к данному посту нет';
  // }

  const handleClick = (e) => {
    const target = e.target;

    if (
      target === overlayRef.current ||
      target.closest('button') ||
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
        <h2 className={style.title}>
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
            {!modalContent ? 'Загрузка...' : modalContent.selftext}
          </Markdown>
        </div>

        <p className={style.author}>
          {!modalContent ? 'Загрузка...' : modalContent.author}
        </p>

        <button className={style.close} onClick={() => {}}>
          <CloseIcon />
        </button>
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
