import "../css/MenuBody.css"
import { db } from "./FirebaseConnection.js";
import { collection, getDocs, query, where, } from "firebase/firestore";
import { MdFastfood } from "react-icons/md";
import { RiDrinks2Fill } from "react-icons/ri";
import { LuCakeSlice } from "react-icons/lu";
import { BiSolidDrink } from "react-icons/bi";
import { useState, useEffect } from "react";
import Category from "./Category.jsx";
import ProductCards from "./ProductCards.jsx";

const MenuBody = ({ menuSection }) => {
    menuSection != null ? menuSection = menuSection : menuSection = "food";
    const [ categorieSelection, setCategorieSelection ] = useState("");
    const [ menuSelection, setMenuSelection ] = useState(menuSection);
    const [ activeCategorie, setActiveCategorie ] = useState(1);
    const [ categories, setCategories ] = useState([]);
    const [ trigger, setTrigger ] = useState(true);
    const [ activeMenu, setActiveMenu ] = useState("food")
    
    useEffect(() => {
        if(trigger){
            const getCategories = collection(db, "categories");
            const q = query(getCategories, where("idCategory", "==", menuSelection));
            getDocs(q).then((resp) => {
                setCategories(
                    resp.docs.map((doc) => {
                        return {...doc.data()}
                    })
                )
            });
            setTrigger(false);
        }
    },[trigger]);

    return(
        <div className="menubody-container">
            <div className="categories-container">
                <h1>
                    {(() => {
                        switch (menuSelection) {
                            case "food":
                                return "Comida";
                            case "drinks":
                                return "Bebidas";
                            case "alcohol":
                                return "Alcohol";
                            case "desserts":
                                return "Postres";
                            default:
                                return "";
                        }
                    })()}
                </h1>
                <Category 
                    categories={categories} 
                    categorieSelection={categorieSelection} 
                    menuSelection={menuSelection} 
                    setCategorieSelection={setCategorieSelection}
                    activeCategorie={activeCategorie}
                    setActiveCategorie={setActiveCategorie}
                />
            </div>
            <div className="product-container">
                <ProductCards 
                    activeMenu={activeMenu}
                    categorieSelection={categorieSelection}
                />
            </div>
            <div className="bottom-menu">
                <div className="menu-container">
                    <div className={activeMenu == "food" ? "active" : ""}>
                        <MdFastfood 
                            className="menu-icon"
                            onClick={() => {
                                setMenuSelection("food");
                                setTrigger(true);
                                setActiveMenu("food");
                            }}
                        />
                        <p>Comida</p>
                    </div>
                    <div className={activeMenu == "drinks" ? "active" : ""}>
                        <RiDrinks2Fill 
                            className="menu-icon" 
                            onClick={() => {
                                setMenuSelection("drinks");
                                setTrigger(true);
                                setActiveMenu("drinks");
                            }}
                        />
                        <p>Bebidas</p>
                    </div>
                    <div className={activeMenu == "desserts" ? "active" : ""}>
                        <LuCakeSlice 
                            className="menu-icon" 
                            onClick={() => {
                                setMenuSelection("desserts");
                                setTrigger(true);
                                setActiveMenu("desserts");
                            }}
                        />
                        <p>Postres</p>
                    </div>
                    <div className={activeMenu == "alcohol" ? "active" : ""}>
                        <BiSolidDrink 
                            className="menu-icon" 
                            onClick={() => {
                                setMenuSelection("alcohol");
                                setTrigger(true);
                                setActiveMenu("alcohol");
                            }}
                        />
                        <p>Alcohol</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBody;