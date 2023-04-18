import React, { Component } from "react";
import { Link } from "react-router-dom";

class FirstScreen extends Component {
  // First Screen: takes user input and update App component

  state = {
    warning: "",
  };

  componentDidMount() {
    this.props.clearInput(); // Clears inputs on mount
  }

  // This method basically checks if user had input a valid
  // string and then update this.state.warning if otherwise.
  handleSubmit = () => {
    if (/^\s*$/.test(this.props.input)) {
      return this.setState({
        warning: (
          <div className="alert alert-warning">
            Please provide a non-empty value!
          </div>
        ),
      });
    }
  };

  render() {
    return (
      <div className="pt-5 pb-5">
        <h2 className="mb-5">Duplicate Character Remover</h2>
        {this.state.warning}
        <div className="mb-3 input-group">
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-describedby="submit"
            value={this.props.input}
            onChange={(e) => {
              this.props.onUpdateInput(e.target.value);
            }}
          />
          <button
            className="btn btn-primary btn-lg"
            type="button"
            id="submit"
            onClick={this.handleSubmit}
          >
            <Link
              to={
                this.props.input.replace(/\s/g, "") != ""
                  ? "/second-screen"
                  : ""
              }
              className="text-white text-decoration-none"
            >
              Submit
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default FirstScreen;
