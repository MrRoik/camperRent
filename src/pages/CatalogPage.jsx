import { useSelector } from 'react-redux';
import Button from '../components/Button/Button';
import CatalogList from '../components/CatalogList/CatalogList';
import Location from '../components/Location/Location';
import Vehicle from '../components/Vehicle/Vehicle';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import css from './Pages.module.css';
import { selectIsError, selectIsLoading } from '../redux/advert/selectors';

export default function CatalogPage() {
  const loader = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  return (
    <main className={css.container_catalog}>
      <div className={css.box_filter}>
        <Location />
        <Vehicle />
        <Button>Search</Button>
      </div>
      <div className={css.box_catalog}>
        {loader && <Loader />}
        {error && <ErrorMessage />}
        <CatalogList />
        <p>This is Catalog car</p>
      </div>
    </main>
  );
}
