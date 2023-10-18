import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, editProduct } from "../actions/products.actions";
const Product = ({ product }) => {
    const [editToggle, setEditToggle] = useState(false);
    const editedProduct = useRef(null);
    const dispatch = useDispatch();

    const handleEdit = async (e) => {
        e.preventDefault();

        const productData = {
            id: product.id,
            title: editedProduct.current.title.value,
            description: editedProduct.current.description.value,
            basePrice: editedProduct.current.basePrice.value,
            salePrice: editedProduct.current.salePrice.value,
            categories: editedProduct.current.categories.value,
            imageUrl: editedProduct.current.imageUrl.value,
        };

        dispatch(editProduct(productData));
    };

    return (
        <>
            <div className="product">
                <img src={product.imageUrl} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Prix de base : {product.basePrice}€</p>
                <p>Prix de vente : {product.salePrice}€</p>
                <p>{product.categories}</p>
                <button id="btnMod" onClick={() => setEditToggle(!editToggle)}>Modifier</button><button id="btnMod" onClick={() => dispatch(deleteProduct(product.id))}>Supprimer</button>
            </div>
            {editToggle ? (
                <div className="editProduct"><form onSubmit={handleEdit} ref={editedProduct}>
                    <h2>Modifier ce produit :</h2>
                    <div><p>Nom :</p><input type="text" name="title" placeholder="Nom" defaultValue={product.title} /></div>
                    <div><p>Description :</p><input type="text" name="description" placeholder="Description" defaultValue={product.description} /></div>
                    <div><p>Prix de base :</p><input type="number" name="basePrice" placeholder="Prix de base" defaultValue={product.basePrice} /></div>
                    <div><p>Prix de vente :</p><input type="number" name="salePrice" placeholder="Prix de vente" defaultValue={product.salePrice} />
                        <div><p>Catégorie :</p>
                            <select name="categories" placeholder="Catégorie" defaultValue={product.categories} required>
                                <option value="VétementsHomme"> Vétements pour homme</option>
                                <option value="VétempentsFemme">Vétements pour femme</option>
                                <option value="ChaussuresHomme">Chaussures pour homme</option>
                                <option value="ChaussuresFemme">Chaussures pour femme</option>
                                <option value="AccessoiresHomme">Accessoires pour homme</option>
                                <option value="AccessoiresFemme">Accessoires pour femme</option>
                                <option value="AccessoiresUnisexe">Accessoires unisexe</option>
                                <option value="VétementsSport">Vétements de sport</option>
                                <option value="ChaussuresSport">Chaussures de sport</option>
                                <option value="AccessoiresSport">Accessoires de sport</option>
                            </select></div>
                        <div><p>URL de l'image :</p></div><input type="url" name="imageUrl" placeholder="URL de l'image" defaultValue={product.imageUrl} /></div>
                    <div><input className="btn" id="btnAdd" type="submit" value="Modifier" /><button className="btn" id="btnX" onClick={() => setEditToggle(false)}>X</button></div></form></div>) : (
                <p className="default">{product.content}</p>
            )
            }
        </>
    );
}

export default Product;