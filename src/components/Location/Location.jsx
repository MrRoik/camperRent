import { Fragment } from 'react';
import css from './Location.module.css';

const Location = () => {
  return (
    <Fragment>
      <p className={css.text}>Location</p>
      <input type="text" placeholder="Kyiv, Ukraine" className={css.input} />
    </Fragment>
  );
};

export default Location;
