import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
const ScrollToTop = React.lazy(() => import('../components/utilities/scrolling/index'));
const Home = React.lazy(() => import('../pages/home/home'));
const NotFound = React.lazy(() => import('../pages/notFound/404'));

function AppRoutes() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route exact path='/' element={<Home />} />
      </Routes>{' '}
    </>
  );
}
export default AppRoutes;
