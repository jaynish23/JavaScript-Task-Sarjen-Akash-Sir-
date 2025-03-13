import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";


const Cart = ({ cart, removeFromCart }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="cart-container">
            <h1>Cart</h1>
            {cart.length === 0 ? <p>No items in cart</p> : cart.map((item, index) => (
                <div key={index} className="cart-item">
                    <h3>{item.title}</h3>
                    <img src={item.image} width={150} alt="" />
                    <p>${item.price}</p>
                    <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
            ))}
            <h2>Total: ${total.toFixed(2)}</h2>
            <button>Buy Now</button>
            <Link to="/">Back to Products</Link>
        </div>
    );
};

export default Cart;
