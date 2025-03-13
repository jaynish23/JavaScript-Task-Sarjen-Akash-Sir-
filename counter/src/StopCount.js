import React from "react";
import "./Counter.css"; 

class StopCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Start countdown from 0
      isActive: false,
      isPaused: false,
    };
    this.interval = null; // Store the interval reference
  }

  start = () => {
    if (!this.state.isActive) {
      // Start the countdown if it's not already active
      this.interval = setInterval(() => {
        this.setState((prevState) => ({
          count: prevState.count + 1,
          isActive: true,
          isPaused: false,
        }));
      }, 1000);
    }
  };

  pause = () => {
    // Pause the countdown and clear the interval
    clearInterval(this.interval);
    this.setState({
      isActive: false,
      isPaused: true,
    });
  };

  stop = () => {
    // Stop the countdown and reset to 0
    clearInterval(this.interval);
    this.setState({
      count: 0, // Reset to 0 when you stop
      isActive: false,
      isPaused: false,
    });
  };

  render() {
    return (
      <div className="counter-container">
        <h1>Counter: {this.state.count}</h1>

        {/* Button container */}
        <div className="buttons">
          <input
            type="button"
            value="Start"
            onClick={this.start}
            disabled={this.state.isActive}
          />
          <input
            type="button"
            value="Stop"
            onClick={this.stop}
            disabled={!this.state.isActive}
          />
          <input
            type="button"
            value="Pause"
            onClick={this.pause}
            disabled={this.state.isPaused}
          />
        </div>

        <hr />
        <h2>{this.state.isPaused ? "Paused" : ""}</h2>
      </div>
    );
  }
}

export default StopCount;