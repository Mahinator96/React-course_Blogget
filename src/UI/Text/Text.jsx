import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Text.module.css';

export const Text = (prop) => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    fw,
    className,
    href,
    center,
    children,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    { [style[`${fw}`]]: fw },
    { [style.center]: center },
    { [style[`fs${size}`]]: size }, // Условие - если передали size
    { [style[`fst${tsize}`]]: tsize }, // Условие - если передали tsize
    { [style[`fsd${dsize}`]]: dsize } // Условие - если передали dsize
  );

  return (
    <As className={classes} href={href}>
      {children}
    </As>
  );
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  href: PropTypes.string,
  fw: PropTypes.number,
  center: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
