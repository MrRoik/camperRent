import css from './Van.module.css';
import Button from '../Button/Button';
import icons from '../../images/icons.svg';
import { Link } from 'react-router-dom';

const Van = ({ item, clickHeart }) => {
  return (
    <div className={css.box_card}>
      <img src={item.gallery[0]} alt={item.name} className={css.img_card} />
      <div className={css.box_desc_card}>
        <div className={css.header_card}>
          <h3 className={css.name_card}>{item.name}</h3>
          <div className={css.box_price_card}>
            <h4 className={css.name_card}>&euro;{item.price.toFixed(2)}</h4>
            <button className={css.btn_heart} type="button" onClick={() => clickHeart(item.id)}>
              <svg width="24" height="24">
                <use href={`${icons}#icon-heart`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.box_rating_card}>
          <svg width="16px" height="16px" className={css.icon_star}>
            <use href={`${icons}#icon-star`}></use>
          </svg>
          <Link to="" className={css.reviews_rating}>
            {item.rating}({item.reviews[0].reviewer_rating} Reviews)
          </Link>
          <div className={css.box_location}>
            <svg width="16px" height="16px" className={css.location_icon}>
              <use href={`${icons}#icon-map-pin`}></use>
            </svg>
            {item.location}
          </div>
        </div>
        <p className={css.description_card}>{item.description}</p>
        <ul className={css.box_options_card}>
          <li className={css.options_card}>
            <svg width="20" height="20">
              <use href={`${icons}#icon-bed`}></use>
            </svg>
            <p>{item.details.beds} beds</p>
          </li>
        </ul>
        <Button type="button">Show more</Button>
      </div>
    </div>
  );
};

export default Van;
