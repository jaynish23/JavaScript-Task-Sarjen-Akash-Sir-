import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        const user = JSON.parse(localStorage.getItem("currentUser")) || null;
        this.state = { user };
    }

    handleLogout = () => {
        localStorage.removeItem("isAuthenticated"); // Remove authentication flag
        localStorage.removeItem("currentUser"); // Remove user details
        window.location.reload(); // Refresh the page to update UI
    };

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Welcome {this.state.user ? this.state.user.username : "Guest"}!</h1>

                {this.state.user ? (
                    <button onClick={this.handleLogout}>Logout</button>
                ) : (
                    <Link to="/signIn">
                        <button>Login</button>
                    </Link>
                )}
            </div>
        );
    }
}

export default Home;
