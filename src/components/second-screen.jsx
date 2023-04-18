import React, { Component } from "react";
import { MdArrowBack } from "react-icons/md";
import { RxBorderDashed } from "react-icons/rx";
import { Link } from "react-router-dom";
import Card from "./card";

class SecondScreen extends Component {
  // Second Screen: Parse user's input and render
  // them in cards.
  state = {
    parsedInput: this.props.input.replace(/\s/g, ""),
    colorDict: {},
  };

  componentDidMount() {
    this.setColorProfile(); // Generates color profile
  }

  // This method generates/returns a random rgb() value
  getRandomColor = () => {
    const red = Math.floor(Math.random() * 56);
    const green = Math.floor(Math.random() * 56);
    const blue = Math.floor(Math.random() * 56);
    return `rgb(${red + 150}, ${green + 150}, ${blue + 150})`;
  };

  // This method updates this.state.colorDict to contains
  // a unique color profile for each unique character in
  // this.props.input
  setColorProfile() {
    const charArray = this.state.parsedInput.split("");
    let tmpDict = {};
    for (let i = 0; charArray[i]; i++) {
      if (tmpDict[charArray[i]]) {
        continue;
      } else {
        tmpDict[charArray[i]] = this.getRandomColor();
      }
    }

    this.setState({ colorDict: tmpDict });
  }

  // Removes duplicates from this.state.input
  handleRemoveDuplicates = (index) => {
    const array = this.state.parsedInput.split("");
    let newString = "";

    for (let i = 0; i < array.length; i++) {
      if (array[i] !== array[index] || i === index) {
        newString += array[i];
      }
    }

    this.setState({
      parsedInput: newString,
    });
  };

  render() {
    return (
      <div className="mt-5 mb-5">
        <h2 className="mb-5">
          <Link to="/" className="mr-3">
            <MdArrowBack size="2rem" />
          </Link>{" "}
          Duplicate Character Remover
        </h2>

        {this.state.parsedInput.split("").length ===
        new Set(this.state.parsedInput).size ? (
          <div className="alert alert-success">
            <p>All dulplicates were removed! </p>
            <h6 style={{ display: "inline-block" }}>
              {" "}
              <span className="badge badge-success bg-success">
                Original String
              </span>{" "}
              {this.props.input} <RxBorderDashed /> {this.state.parsedInput}{" "}
              <span className="badge badge-success bg-success">New String</span>{" "}
            </h6>
          </div>
        ) : (
          ""
        )}

        <div className="mb-5">
          {this.state.parsedInput.split("").map((e, i) => (
            <Card
              value={e}
              index={i}
              key={i}
              onDelete={this.handleRemoveDuplicates}
              colorDict={this.state.colorDict}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SecondScreen;
