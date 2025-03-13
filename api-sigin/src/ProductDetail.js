import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import "./ProductDetail.css";


const ProductDetails = ({ addToCart }) => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        Axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => alert(err));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="product-details-container">
            <h1>{product.title}</h1>
            <img src={product.image} width={200} alt="" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to="/cart">Go to Cart</Link>
        </div>
    );
};

export default ProductDetails;
