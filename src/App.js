import './App.css';
import NewProduct from './components/newProduct';
import { NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AllProducts, MenProducts, WomenProducts, BabiesProducts, TeenageProducts } from './components/filters';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Header /></>,
    errorElement: <h1>Page not found</h1>,
    children: [
      {
        path: '',
        element: <><AllProducts /></>
      },
      {
        path: 'Hommes',
        element: <><MenProducts /></>
      },
      {
        path: 'Femmes',
        element: <><WomenProducts /></>
      },
      {
        path: 'Ados',
        element: <><TeenageProducts /></>
      },
      {
        path: 'Bebes',
        element: <><BabiesProducts /></>
      }
    ]
  }
]);

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
        <NavLink to={'/'} className="all">Tous les articles</NavLink>
        <NavLink to={'/Hommes'}>Hommes</NavLink>
        <NavLink to={'/Femmes'}>Femmes</NavLink>
        <NavLink to={'/Ados'}>Ados</NavLink>
        <NavLink to={'/Bebes'}>Bébés</NavLink>
      </nav>
      <NewProduct />
      <div><Outlet /></div>
    </header>
  );
}

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
