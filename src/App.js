import React, { Component } from "react";
import FirstScreen from "./components/first-screen";
import { Routes, Route } from "react-router-dom";
import SecondScreen from "./components/second-screen";

class App extends Component {
  // This is the entry point to the Application.

  state = {
    input: "",
  };

  // Controller method for input field on first-screen
  // to update this.state.input.
  handleUpdateInput = (input) => {
    this.setState({
      input: input,
    });
  };

  // Resets this.state.input to an empty string.
  clearInput = () => {
    this.setState({
      input: "",
    });
  };

  render() {
    return (
      <div className="container-sm">
        <Routes>
          <Route
            path="/"
            element={
              <FirstScreen
                input={this.state.input}
                onUpdateInput={this.handleUpdateInput}
                clearInput={this.clearInput}
              />
            }
          />
          <Route
            path="/second-screen"
            element={<SecondScreen input={this.state.input} />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
