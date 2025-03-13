import React from "react";
import "./Style.css";

class FormValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      gender: "",
      country: "",
      errors: {},
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validateForm = () => {
    let errors = {};

    if (this.state.name.length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }

    if (this.state.username.length < 3) {
      errors.username = "Username must be at least 3 characters.";
    } 

    if (!this.state.email.endsWith("@gmail.com")) {
      errors.email = "Email must be a @gmail.com address.";
    }

    if (this.state.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    if (!this.state.gender) {
      errors.gender = "Please select your gender.";
    }

    if (!this.state.country) {
      errors.country = "Please select your country.";
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      alert("Form submitted successfully!");
      this.setState({
        name: "",
        username: "",
        email: "",
        password: "",
        gender: "",
        country: "",
        errors: {},
      });
    }
  };

  render() {
    return (
      <div className="form-container">
        <h2>Form Validation</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <span className="error">{this.state.errors.name}</span>

          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <span className="error">{this.state.errors.username}</span>

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <span className="error">{this.state.errors.email}</span>

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <span className="error">{this.state.errors.password}</span>

          <label>Gender:</label>
          <div className="radio-group">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={this.state.gender === "Male"}
              onChange={this.handleChange}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={this.state.gender === "Female"}
              onChange={this.handleChange}
            />{" "}
            Female
          </div>
          <span className="error">{this.state.errors.gender}</span>

          <label>Country:</label>
          <select
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
          >
            <option value="">Select</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          <span className="error">{this.state.errors.country}</span>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormValidation;