import { useSelector } from 'react-redux';
import { isEmpty } from './utils';
import Product from './products';


export function FilteredProducts({ category }) {
    const products = useSelector(state => state.productsReducer);
    const filteredProducts = (products?.filter) ?
    products.filter(product => product.categories === category) :
    null;

    if (category === '') {
        return <main>
            <div className='products'>
                {!isEmpty(products) && products.map((product, index) => (
                    <Product product={product} key={index} />
                ))}
            </div>
        </main>
    } else {
        return <main>
            <div className='products'>
                {!isEmpty(filteredProducts) && filteredProducts.map((product, index) => (
                    <Product product={product} key={index} />
                ))}
            </div>
        </main>
    }
}

