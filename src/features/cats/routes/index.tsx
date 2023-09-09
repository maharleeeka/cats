import React from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import { Cats } from './Cats';
import PublicRoutes from '@/routes/public';

const CatRoutes: RouteObject = {
  element: (
    <PublicRoutes>
      <Outlet />
    </PublicRoutes>
  ),
  children: [
    {
      path: '/*',
      element: <Cats />,
    },
  ],
};

export default CatRoutes;
