import React from "react";
import "./Counter.css"; // Import the CSS file

class LocalCounter extends React.Component {
  constructor(props) {
    super(props);
    // Get the initial count value from localStorage, or default to 0
    const savedCount = localStorage.getItem("count") || 0;

    this.state = {
      count: Number(savedCount), // Convert it to a number since localStorage stores everything as strings
    };
  }

  // Update the count in both state and localStorage
  updateCount = (newCount) => {
    this.setState({ count: newCount }, () => {
      localStorage.setItem("count", newCount); // Save the new count to localStorage
    });
  };

  render() {
    return (
      <div className="counter-container">
        <h1>Counter: {this.state.count}</h1>

        
        <div className="buttons">
          <input
            type="button"
            value="Increment"
            onClick={() => this.updateCount(this.state.count + 1)}
          />
          <input
            type="button"
            value="Decrement"
            onClick={() => this.updateCount(this.state.count - 1)}
          />
        </div>

        <hr />
        <h2>{this.state.count === 0 ? "Counter is at zero" : ""}</h2>
      </div>
    );
  }
}

export default LocalCounter;