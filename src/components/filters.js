import { useSelector } from 'react-redux';
import { isEmpty } from './utils';
import Product from './products';


export function AllProducts() {
    const products = useSelector(state => state.productsReducer);

    return <main>
        <div className='products'>
            {!isEmpty(products) && products.map((product, index) => (
                <Product product={product} key={index} />
            ))}
        </div>
    </main>
}

export function MenProducts() {
    const products = useSelector(state => state.productsReducer);
    const menProducts = products.filter(product => product.categories === "Hommes");

    return <main>
        <div className='products'>
            {!isEmpty(menProducts) && menProducts.map((product, index) => (
                <Product product={product} key={index} />
            ))}
        </div>
    </main>
}

export function WomenProducts() {
    const products = useSelector(state => state.productsReducer);
    const womenProducts = products.filter(product => product.categories === "Femmes");

    return <main>
        <div className='products'>
            {!isEmpty(womenProducts) && womenProducts.map((product, index) => (
                <Product product={product} key={index} />
            ))}
        </div></main>
}

export function TeenageProducts() {
    const products = useSelector(state => state.productsReducer);
    const teenageProducts = products.filter(product => product.categories === "Ados");

    return <main>
        <div className='products'>
            {!isEmpty(teenageProducts) && teenageProducts.map((product, index) => (
                <Product product={product} key={index} />
            ))}
        </div></main>
}

export function BabiesProducts() {
    const products = useSelector(state => state.productsReducer);
    const babiesProducts = products.filter(product => product.categories === "Bébés");

    return <main>
        <div className='products'>
            {!isEmpty(babiesProducts) && babiesProducts.map((product, index) => (
                <Product product={product} key={index} />
            ))}
        </div></main>
}
