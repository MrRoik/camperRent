import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import css from './Layout.module.css';
import Footer from './Footer/Footer';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div className={css.containerMain}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
