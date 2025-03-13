import React, { use } from "react";
import "./SignUp.css";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
    this.state = { 
        name: "",
        email: "",
        username : "",
        password : "",
        confirmPassword : "",
        error : {} //added error to state
     }
    }
    handleChange = (e) => {
        this.setState ({[e.target.name] : e.target.value})
        // console.log(e.target.value);
        
    }
    handleSubmit = (e) =>{
        e.preventDefault();

        const {name,email,username,password,confirmPassword} =this.state;
        let error ={}


// validation logic
if (!name.trim() || name.length <= 2) {
    error.name = "Name must be at least 2 characters long!";
}

        if (!email) {
            error.email = "email is required"
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            error.email = "Invalid email format.";
        }
        if(!username.trim()){
            error.username = "username is required!"
        }
        if(!password){
            error.password = "password is required"
        }
        else if(password.length<=6)
        {
            error.password ="password must be atleast 6 chracters"
        }
        if(password != confirmPassword){
            error.confirmPassword ="Password is not valid"
        }

        this.setState({error}) //update the error in the state

        //if there is no validation error then save user detail 
// in this code the object data will be overwrite if we want to add multiple user then the code will be another 
        // if (Object.keys(error).length === 0) {
        //     localStorage.setItem(
        //         "user",
        //         JSON.stringify({
        //             name: this.state.name,
        //             username: this.state.username,
        //             email: this.state.email,
        //             password: this.state.password,
        //         })
        //     );
        //     alert("Registration successful");
        // }

        if (Object.keys(error).length === 0) {
            let users = JSON.parse(localStorage.getItem("users")) || []; // Get existing users or initialize an empty array
            const newUser = { name, email, username, password };
            
            users.push(newUser); // Add new user to the array

            localStorage.setItem("users", JSON.stringify(users)); // Save updated users array in local storage
            
            alert("Registration Successful!");
            window.location.href = "/signin"; // Redirect to SignIn page
        }
        
    }
    render() { 
        return ( 
            <>
            <br />
            <div className="signup-container">
            <label htmlFor="name">name: </label>
            <input type="text" name="name" placeholder="full name" onChange={this.handleChange} />
            {this.state.error.name && <p style={{color: "red"}}>{this.state.error.name}</p>}
<br />
            <label htmlFor="email id:">email id</label>
            <input type="email" name="email" placeholder="email" onChange={this.handleChange} />
            {this.state.error.email && <p style={{color: "red"}}>{this.state.error.email}</p>}
<br />
            <label htmlFor="username">username:</label>
            <input type="text" name="username" onChange={this.handleChange} placeholder="username" />
            {this.state.error.username && <p style={{color: "red"}}>{this.state.error.username}</p>}
<br />
<label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="name@gmai.com" onChange={this.handleChange} />
                {this.state.error.password && <p style={{color: "red"}}>{this.state.error.password}</p>}
                <br />
                
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange} />
                {this.state.error.confirmPassword && <p style={{color: "red"}}>{this.state.error.confirmPassword}</p>}
                
<br />
            <input type="button" value="submit" onClick={this.handleSubmit}/>

            {/* {error.name && <p style={{color : "red"}}>{error.name}</p>} */}
            </div>
            </>
         );
    }
}
 
export default SignUp;