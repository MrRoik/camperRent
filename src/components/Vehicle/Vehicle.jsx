import { Fragment } from 'react';
import icons from '../../images/icons.svg';
import css from './Vehicle.module.css';

const Vehicle = () => {
  return (
    <Fragment>
      <p className={css.text}>Filters</p>
      <h2 className={css.title}>Vehicle equipment</h2>
      <div className={css.box_equipment}>
        <div className={css.box_filters}>
          <svg width="33" height="33">
            <use href={`${icons}#icon-P_D`}></use>
          </svg>
          <p className={css.text_filter}>Automatic</p>
        </div>
        <div className={css.box_filters}>
          <svg width="33" height="33">
            <use href={`${icons}#icon-dishes`}></use>
          </svg>
          <p className={css.text_filter}>Kitchen</p>
        </div>
        <div className={css.box_filters}>
          <svg width="33" height="33">
            <use href={`${icons}#icon-tv`}></use>
          </svg>
          <p className={css.text_filter}>TV</p>
        </div>
        <div className={css.box_filters}>
          <svg width="33" height="33">
            <use href={`${icons}#icon-shower`}></use>
          </svg>
          <p className={css.text_filter}>Shower/WC</p>
        </div>
      </div>
      <h2 className={css.title}>Vehicle type</h2>
      <div className={css.box_equipment}>
        <div className={css.box_filters}>
          <svg width="40" height="28">
            <use href={`${icons}#icon-van_3`}></use>
          </svg>
          <p className={css.text_filter}>Van</p>
        </div>
        <div className={css.box_filters}>
          <svg width="40" height="28">
            <use href={`${icons}#icon-van_2`}></use>
          </svg>
          <p className={css.text_filter}>
            Fully
            <br /> Integrated
          </p>
        </div>
        <div className={css.box_filters}>
          <svg width="40" height="28">
            <use href={`${icons}#icon-van_1`}></use>
          </svg>
          <p className={css.text_filter}>Alcove</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Vehicle;
