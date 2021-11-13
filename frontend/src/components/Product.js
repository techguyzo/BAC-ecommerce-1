import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
    return( <div className="product">
        <img src="https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
        alt="product name" />
        <div className="product__info">
            <p className="info__name">Product 1</p>
            <p className="info__description">Desciprifoekfsksksv ndjsandjanchbhcnjxnsxnj n</p>
            <p className="info__price">RM100.00</p>

            <Link to={`product/${1111}`} className="info__button">View</Link>
        </div>
            
        </div>
    );
};

export default Product;