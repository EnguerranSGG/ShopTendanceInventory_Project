import { useSelector } from 'react-redux';
import './App.css';
import { isEmpty } from './components/utils';
import Product from './components/products';
import NewProduct from './components/newProduct';

function App() {
  const products = useSelector(state => state.productsReducer);

  return (
    <>
    <Header />
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
  </header>  
  );
}

export default App;
