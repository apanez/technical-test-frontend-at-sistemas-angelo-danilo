import { createBrowserRouter } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />
  }
]);

export default routes
