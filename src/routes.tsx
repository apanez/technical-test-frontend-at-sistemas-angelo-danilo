import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import ProtectedRoute from './components/protectedRoute/protectedRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute><Home /></ProtectedRoute>,
  },
  {
    path: '/login',
    element: <Login />
  }
]);

export default routes
