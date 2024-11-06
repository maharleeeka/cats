import { Outlet, RouteObject } from 'react-router-dom';
import { Cats } from '../pages/Cats';
import PublicRoutes from '@/routes/public';
import CatInfo from '../pages/CatInfo';
import { APP_ROUTES } from '@/constants/route';

const CatRoutes: RouteObject = {
  element: (
    <PublicRoutes>
      <Outlet />
    </PublicRoutes>
  ),
  children: [
    {
      path: APP_ROUTES.ROOT,
      element: <Cats />,
    },
    {
      path: APP_ROUTES.CAT_INFO,
      element: <CatInfo />,
    },
  ],
};

export default CatRoutes;
