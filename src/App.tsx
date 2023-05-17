import { RouterProvider } from 'react-router-dom';
import { styled } from 'styled-components';
import routes from './routes';
import './App.css';

const Layout = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <Layout>
      <RouterProvider router={routes} />
    </Layout>
  );
}

export default App;
