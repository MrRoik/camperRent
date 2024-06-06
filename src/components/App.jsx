import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { AppBar } from './AppBar/AppBar';
import css from './App.module.css';
import Footer from './Footer/Footer';

const HomePage = lazy(() => import('../pages/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

function App() {
  return (
    <div className={css.containerMain}>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
