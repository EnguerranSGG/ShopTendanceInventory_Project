import './App.css';
import NewProduct from './components/newProduct';
import { NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FilteredProducts } from './components/filter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Header /></>,
    errorElement: <h1>Désolé mais cette page n'existe pas.</h1>,
    children: [
      {
        path: '',
        element: <><FilteredProducts category={''}/></>
      },
      {
        path: 'Hommes',
        element: <><FilteredProducts category={'Hommes'} /></>
      },
      {
        path: 'Femmes',
        element: <><FilteredProducts category={'Femmes'} /></>
      },
      {
        path: 'Ados',
        element: <><FilteredProducts category={'Ados'} /></>
      },
      {
        path: 'Bebes',
        element: <><FilteredProducts category={'Bébés'} /></>
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
