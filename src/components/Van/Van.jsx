import css from './Van.module.css';
import Button from '../Button/Button';
import icons from '../../images/icons.svg';
import { FaStar } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';

const Van = ({ item, clickHeart }) => {
  return (
    <div className={css.box_card}>
      <img src="../../images/Car/car1@1x.jpg" alt="car_1" />
      <div>
        <div>
          <h3>{item.name}</h3>
          <h4>&euro;{item.price.toFixed(2)}</h4>
          <button type="button" onClick={() => clickHeart(item.id)}>
            <svg width="24" height="24">
              <use href={`${icons}#icon-heart`}></use>
            </svg>
          </button>
        </div>
        <div>
          <FaStar size={16} />
          <span>{item.rating}</span>
          <p>{item.reviews} Reviews</p>
          <span>
            <SlLocationPin size={16} />
            {item.location}
          </span>
        </div>
        <p>{item.description}</p>
        <ul>
          <li>
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
