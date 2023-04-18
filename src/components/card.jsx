import React, { Component } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

class Card extends Component {
  // Just Card Component
  render() {
    return (
      <>
        <div
          className="alert d-inline-block m-1"
          onClick={() => this.props.onDelete(this.props.index)}
          style={{ backgroundColor: this.props.colorDict[this.props.value] }}
        >
          <h5>
            {this.props.value} <RiDeleteBinLine />
          </h5>
        </div>
      </>
    );
  }
}

export default Card;
