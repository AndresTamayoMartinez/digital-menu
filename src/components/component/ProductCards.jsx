import { useState, useEffect } from "react";
import { db } from "./FirebaseConnection.js";
import { collection, getDocs, query, where, } from "firebase/firestore";
import "../css/ProductCards.css"

const ProductCards = ({ activeMenu, categorieSelection }) => {
    const [ productList, setProductList ] = useState([]);

    useEffect(() => {
        if (activeMenu && categorieSelection) {
            const getProducts = collection(db, activeMenu);
            const q = query(getProducts, where("categoryName", "==", categorieSelection));
            getDocs(q).then((resp) => {
                setProductList(
                    resp.docs.map((doc) => ({ ...doc.data() }))
                );
            });
        }
    }, [activeMenu, categorieSelection]);

    return(
        <div className="product-wrapper">
            <ul className="product-carousel">
                {productList.map((product, index) => (
                    <li className="card" key={index}>
                        <div className="card-container">
                            <img src={product.urlImage} alt={product.name} />
                            <p className="name">{product.name}</p>
                            <p className="price">${product.price}</p>
                            <p className="description">{product.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductCards;