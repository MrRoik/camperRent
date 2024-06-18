import css from './Location.module.css';

const Location = () => {
  return (
    <div>
      <p className={css.text}>Location</p>
      <input type="text" placeholder="Kyiv, Ukraine" className={css.input} />
    </div>
  );
};

export default Location;
