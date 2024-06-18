import icons from '../../images/icons.svg';
import css from './Vehicle.module.css';

const Vehicle = () => {
  return (
    <div>
      <p className={css.text}>Filters</p>
      <h2 className={css.title}>Vehicle equipment</h2>
      <ul className={css.box_equipment}>
        <li className={css.box_filters}>
          <svg width="33" height="33">
            <use href={`${icons}#icon-P_D`}></use>
          </svg>
          <p className={css.text_filter}>Automatic</p>
        </li>
        <li className={css.box_filters}>
          <svg width="33" height="33">
            <use href={`${icons}#icon-dishes`}></use>
          </svg>
          <p className={css.text_filter}>Kitchen</p>
        </li>
        <li className={css.box_filters}>
          <svg width="33" height="33">
            <use href={`${icons}#icon-tv`}></use>
          </svg>
          <p className={css.text_filter}>TV</p>
        </li>
        <li className={css.box_filters}>
          <svg width="33" height="33">
            <use href={`${icons}#icon-shower`}></use>
          </svg>
          <p className={css.text_filter}>Shower/WC</p>
        </li>
      </ul>
      <h2 className={css.title}>Vehicle type</h2>
      <ul className={css.box_equipment}>
        <li className={css.box_filters}>
          <svg width="40" height="28">
            <use href={`${icons}#icon-van_3`}></use>
          </svg>
          <p className={css.text_filter}>Van</p>
        </li>
        <li className={css.box_filters}>
          <svg width="40" height="28">
            <use href={`${icons}#icon-van_2`}></use>
          </svg>
          <p className={css.text_filter}>
            Fully
            <br /> Integrated
          </p>
        </li>
        <li className={css.box_filters}>
          <svg width="40" height="28">
            <use href={`${icons}#icon-van_1`}></use>
          </svg>
          <p className={css.text_filter}>Alcove</p>
        </li>
      </ul>
    </div>
  );
};

export default Vehicle;
