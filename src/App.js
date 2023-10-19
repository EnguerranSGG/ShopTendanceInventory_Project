import { useSelector } from 'react-redux';
import './App.css';
import { isEmpty } from './components/utils';
import Product from './components/products';
import NewProduct from './components/newProduct';
import { NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <h1>Page not found</h1>,
    children: [
      {
        path: 'Tous',
        element: <h1>Tous les articles</h1>
      },
      {
        path: 'Hommes',
        element: <h1>Hommes</h1>
      },
      {
        path: 'Femmes',
        element: <h1>Femmes</h1>
      },
      {
        path: 'Ados',
        element: <h1>Ados</h1>
      },
      {
        path: 'Bebes',
        element: <h1>Bébés</h1>
      }
    ]
  }
]);
function App() {
  const products = useSelector(state => state.productsReducer);

  return (
    <>
      <RouterProvider router={router} />
      <NewProduct />
      <main>
        <div className='products'>
          {!isEmpty(products) && products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </div>
      </main>
    </>
  );
}

function Header() {
  return (
    <header>
      <div className='h1'>
        <h1>Shop Tendance</h1>
      </div>
      <div className='h2'>
        <h2> Inventory Management</h2>
      </div>
      <nav>
        <NavLink to={'/'}>Tous les articles</NavLink>
        <NavLink to={'/Hommes'}>Hommes</NavLink>
        <NavLink to={'/Femmes'}>Femmes</NavLink>
        <NavLink to={'/Ados'}>Ados</NavLink>
        <NavLink to={'/Bebes'}>Bébés</NavLink>
      </nav>
      <div><Outlet /></div>
    </header>
  );
}

export default App;
