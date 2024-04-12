// import style from './AuthLoader.module.css';
import RingLoader from 'react-spinners/RingLoader';
import PropTypes from 'prop-types';

export const Preloader = ({ size }) => (
  <RingLoader color='#cc6633' css={{ display: 'block' }} size={size} />
);

Preloader.propTypes = {
  size: PropTypes.number,
};
