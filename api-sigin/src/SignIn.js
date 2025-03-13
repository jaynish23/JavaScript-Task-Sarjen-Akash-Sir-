import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            email: "",
            password: "",
            error: {} 
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        
        const { username, email, password } = this.state;
        let users = JSON.parse(localStorage.getItem("users")) || []; // Get all registered users
        let error = {};

        // Field Validations
        if (!username.trim()) {
            error.username = "Username is required.";
        }

        if (!email.trim()) {
            error.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            error.email = "Invalid email format.";
        }

        if (!password) {
            error.password = "Password is required.";
        }

        // Find user in localStorage
        const userExists = users.find(user => user.username === username && user.email === email && user.password === password);

        if (!userExists) {
            error.general = "Invalid credentials. Please check your details or sign up.";
        }

        // If any errors exist, update state and stop login attempt
        if (Object.keys(error).length > 0) {
            this.setState({ error });
            return;
        }

        // If authentication is successful, store session details
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("currentUser", JSON.stringify(userExists)); // Store logged-in user
        alert("Login Successful!");

        // Redirect to home without reloading
        this.props.navigate("/home");
    };

    render() {
        return (
            <div>
                <div className="signin-container">
                    <h2>Sign In</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            name="username" 
                            onChange={this.handleChange} 
                        />
                        {this.state.error.username && <p style={{ color: "red" }}>{this.state.error.username}</p>}
                        <br />

                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            onChange={this.handleChange} 
                        />
                        {this.state.error.email && <p style={{ color: "red" }}>{this.state.error.email}</p>}
                        <br />

                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            onChange={this.handleChange} 
                        />
                        {this.state.error.password && <p style={{ color: "red" }}>{this.state.error.password}</p>}
                        <br />

                        {this.state.error.general && <p style={{ color: "red" }}>{this.state.error.general}</p>}

                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
}

function withNavigation(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}

export default withNavigation(SignIn);
