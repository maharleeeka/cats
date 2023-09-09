import CatRoutes from '../features/cats/routes';
import { useRoutes } from 'react-router-dom';

const Routes = () => {
  return useRoutes([CatRoutes]);
};

export default Routes;
