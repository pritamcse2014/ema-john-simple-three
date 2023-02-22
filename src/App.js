import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Main from './layouts/Main';
import { productsAndCartLoader } from './loaders/ProductsAndCartLoader';

function App() {
  const router = createHashRouter([
    {
      path : '/',
      element : <Main></Main>,
      children : [
        {
          path : '/',
          loader : () => {
            return fetch('products.json');
          },
          element : <Shop></Shop>
        },
        {
          path : '/orders',
          loader : productsAndCartLoader,
          // () => {
          //   return fetch('products.json')
          // },
          element : <Orders></Orders>
        },
        {
          path : '/inventory',
          element : <Inventory></Inventory>
        },
        {
          path : '/about',
          element : <About></About>
        },
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
