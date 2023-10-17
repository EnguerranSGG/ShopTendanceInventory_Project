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

        if (!isPositiveNumber(basePrice) || !isPositiveNumber(salePrice)) {
            alert("Attention, les prix de base et de vente doivent être positifs.");
            return;
        }

        const product = {
            title: newProduct.current[0].value,
            description: newProduct.current[1].value,
            categories: newProduct.current[5].value,
            basePrice,
            salePrice,
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
        <button class="btn" id="btnForm" onClick={focus}>Ajouter un nouveau produit</button>
        <div className="newProduct">
            <form ref={newProduct} onSubmit={e => handleNewProduct(e)}>
            <h2> Nouveau produit :</h2>
                <div><input type="text" placeholder="Nom" required /></div>
                <div><input type="text" id="description" placeholder="Description" required /></div>
                <div><input type="number" placeholder="Prix de base" required /></div>
                <div><input type="number" placeholder="Prix de vente" required /></div>
                <div><input type="URL" placeholder="URL de l'image" /></div>
                <div><select name="categorie" placeholder="Catégorie" required>
                    <option> Catégorie </option>
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
                <div className="btnsForm"><input class="btn" id="btnAdd" type="submit" value="Ajouter le nouveau produit" />
                <button class="btn" id="btnX" onClick={close}>X</button></div>
            </form>
        </div></>);
};

export default NewProduct;