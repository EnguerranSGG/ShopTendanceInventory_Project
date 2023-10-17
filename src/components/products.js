import { focus } from "./utils";
const Product = ({ product }) => {
    return (
        <>
            <div className="product" onClick={focus}>
                <img src={product.imageUrl} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Prix de base : {product.basePrice}€</p>
                <p>Prix de vente : {product.salePrice}€</p>
                <p>{product.categories}</p>
            </div>
            <div className="product_default">
                <img src={product.imageUrl} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Prix : {product.salePrice}€</p>
            </div></>
    );
}

export default Product;