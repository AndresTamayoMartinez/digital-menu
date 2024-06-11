import { useEffect } from "react";
import "../css/Category.css";

const Category = ({ categories, menuSelection, categorieSelection, setCategorieSelection, activeCategorie, setActiveCategorie }) => {
    
    useEffect(() => {
        if (categories != null && categories.length > 0) {
            setActiveCategorie(categories[0].name);
            setCategorieSelection(categories[0].name);
        }
    }, [categories, setActiveCategorie]);

    const handleClick = (category) => {
        setCategorieSelection(category);
        setActiveCategorie(category);
    };

    return (
        <div className="category-wrapper">
            <ul className="category-carousel">
                {categories.map((categorie, key) => (
                    <li 
                        className={`card ${activeCategorie === categorie.name ? 'active' : ''}`}
                        key={key}
                        onClick={() => handleClick(categorie.name)}
                    >
                        {categorie.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Category;