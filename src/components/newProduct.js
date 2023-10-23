import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct, getProducts } from "../actions/products.actions";
import { isPositiveNumber } from "./utils";
import { focus } from "./utils";
import { close } from "./utils";

const NewProduct = () => {

    const newProduct = useRef();
    const dispatch = useDispatch();
    const handleNewProduct = async (e) => {
        e.preventDefault();

        const basePrice = newProduct.current[2].value;
        const salePrice = newProduct.current[3].value;
        const categories = newProduct.current[5].value

        if (!isPositiveNumber(basePrice) || !isPositiveNumber(salePrice)) {
            alert("Attention, les prix de base et de vente doivent être positifs.");
            return;
        }

        if (categories === "Catégorie") {
            alert("Attention, vous devez sélectionner au moins une catégorie.");
            return;
        }

        const product = {
            title: newProduct.current[0].value,
            description: newProduct.current[1].value,
            basePrice,
            salePrice,
            categories,
            imageUrl: newProduct.current[4].value
        }

        await dispatch(addProduct(product));
        dispatch(getProducts());

        newProduct.current.reset();
        newProduct.current.querySelectorAll('input[type="text"], input[type="number"], input[type="URL"]').forEach((input) => {
            input.value = "";
        });
    }

    return (<>
        <button className="btn" id="btnForm" onClick={focus}>Ajouter un nouveau produit</button>
        <div className="newProduct">
            <form ref={newProduct} onSubmit={e => handleNewProduct(e)}>
                <h2> Nouveau produit :</h2>
                <div><input type="text" placeholder="Nom" required /></div>
                <div><input type="text" id="description" placeholder="Description" required /></div>
                <div><input type="number" placeholder="Prix de base" required /></div>
                <div><input type="number" placeholder="Prix de vente" required /></div>
                <div><input type="URL" placeholder="URL de l'image" /></div>
                <div><select name="categories" placeholder="Catégorie" required>
                    <option> Catégorie </option>
                    <option value="Hommes">Vétements pour homme</option>
                    <option value="Femmes">Vétements pour femme</option>
                    <option value="Ados">Vétements pour ado</option>
                    <option value="Bébés">Vétements pour bébé"</option>
                </select></div>
                <div className="btnsForm"><input className="btn" id="btnAdd" type="submit" value="Ajouter le nouveau produit" />
                    <button className="btn" id="btnX" onClick={close}>X</button></div>
            </form>
        </div></>);
};

export default NewProduct;