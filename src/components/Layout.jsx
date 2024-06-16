import { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import css from './Layout.module.css';
import Footer from './Footer/Footer';

export const Layout = () => {
  return (
    <Fragment className={css.containerMain}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </Fragment>
  );
};
