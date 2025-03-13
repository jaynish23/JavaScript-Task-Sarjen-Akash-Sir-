import React, { useState,useEffect } from 'react'
import  Axios  from 'axios'
import { Link } from 'react-router-dom';
import "./ProductList.css";


function ProductList() {

    const [products,setProduct] = useState([])

    useEffect(() => {
        Axios.get("https://fakestoreapi.com/products")
            .then(res => setProduct(res.data))
            .catch(err => console.error("Error fetching products:", err));
    }, []);
    

    return (
        <div className="product-list-container">
            <h1>Products</h1>
            {products.map(product => (
                <div className="product-card" key={product.id}>
                    <h3>{product.title}</h3>
                    <img src={product.image} width={150} alt="" />
                    <p>${product.price}</p>
                    <Link to={`/product/${product.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};
export default ProductList
