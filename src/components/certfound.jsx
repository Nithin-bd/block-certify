import React, { Component } from "react";
import b1 from "../bg6.jpg";
class CertFound extends Component {
  state = { name: "", sender: "", course: "" };
  render() {
    return (
      <div
        className="container "
        style={{
          fontFamily: "Montserrat",
          backgroundImage: `url(${b1})`,
          fontWeight: "bold",
          border: "3px solid black",
          fontSize: "20px",
          marginTop: "10px",
          opacity: "0.7",
          color: "#ffffff"
        }}
      >
        <div style={{ borderBottom: " 1px solid black" }}>
          <h4 style={{ opacity:"1" }}>Certificate with following details found</h4>
        </div>
        <div>
          Name:
          <span
            style={{ marginLeft: "10px", borderBottom: " 2px solid black" }}
          >
            {this.props.details[0]}
          </span>
        </div>
        <div>
          Course:
          <span
            style={{ marginLeft: "10px", borderBottom: " 2px solid black" }}
          >
            {this.props.details[1]}
          </span>
        </div>
        <div>
          Issued by:
          <span
            style={{ marginLeft: "10px", borderBottom: " 2px solid black" }}
          >
            {this.props.details[2]}
          </span>
        </div>
        <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
          email:
          <span style={{ borderBottom: " 2px solid black" }}>
            {" " + this.props.details[3]}
          </span>
        </div>
      </div>
    );
  }
}

export default CertFound;
