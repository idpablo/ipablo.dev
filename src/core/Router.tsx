import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '@constants';
import LoadingFallback from './LoadingFallback';

const HomePage = lazy(() => import('@pages/Home').then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('@pages/About').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('@pages/Contact').then(module => ({ default: module.ContactPage })));
const NotFoundPage = lazy(() => import('@pages/NotFound').then(module => ({ default: module.NotFoundPage })));

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
