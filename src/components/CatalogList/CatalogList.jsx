import { useSelector } from 'react-redux';

import Van from '../Van/Van';
import css from './CatalogList.module.css';
import { selectAdverts } from '../../redux/advert/selectors';

const CatalogList = () => {
  const catalog = useSelector(selectAdverts);

  return (
    <ul className={css.itemCard}>
      {catalog.map(item => {
        return (
          <li key={item._id} className={css.listCard}>
            <Van item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default CatalogList;
