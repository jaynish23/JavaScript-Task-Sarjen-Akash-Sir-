import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetail";
import Cart from "./Cart";
import "./App.css";

const App = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");

    useEffect(() => {
        setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    }, []); // ✅ Ensure authentication updates when storage changes

    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <Router>
            <nav className="navbar">
                <Link to="/signIn">Sign in</Link>
                <Link to="/signUp">Sign up</Link>
                <Link to="/home">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
            </nav>
            <Routes>
                <Route path="/signIn" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/home" element={<Home />} /> 
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </Router>
    );
};

export default App;
