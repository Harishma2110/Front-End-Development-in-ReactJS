import React, { Component } from "react";
import Card from "./subComponents/Card";

class ConceptsOfLearning extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#FFFEF1",
          height: "110vh",
          position: "relative",
          zIndex: "2"
        }}
        className="hide"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "5%",
            right: "0px"
          }}
        >
          <Card />
        </div>
        <img
          src={require("../Assets/tree.png")}
          style={{
            position: "absolute",
            bottom: "0px",
            left: "-15%",
            width: "40%"
          }}
          className="hide"
        />
      </div>
    );
  }
}

export default ConceptsOfLearning;
