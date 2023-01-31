import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/errorPage/ErrorPage';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path : '',
      element : <Layout></Layout>,
      errorElement : <ErrorPage></ErrorPage>,
      children:[
        {
          path : '/',
          element : <Home></Home>,
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
