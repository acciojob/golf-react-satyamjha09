import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, // Controls whether the ball is rendered
      ballPosition: { left: "0px" }, // Tracks the ball's position
    };
    this.renderBallOrButton = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Handles the start button click
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  // Handles the Right Arrow key press
  handleKeyDown(event) {
    if (event.keyCode === 39) { // 39 is the keyCode for the Right Arrow key
      this.setState((prevState) => {
        const newPosition = parseInt(prevState.ballPosition.left, 10) + 5;
        return { ballPosition: { left: `${newPosition}px` } };
      });
    }
  }

  // Adds the event listener when the component mounts
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // Removes the event listener when the component unmounts
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // Renders either the ball or the start button
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    );
  }
}

export default App;