import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#FFFEF1",
          position: "relative"
        }}
      >
        <img
          src={require("../Assets/rectangles.png")}
          style={{
            position: "absolute",
            top: "-200px",
            left: "0px",
            width: "100%"
          }}
          className="hide"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: "10%"
          }}
        >
          <img
            src={require("../Assets/studing.png")}
            style={{
              margin: "10%",
              width: "60%",
              zIndex: "2"
            }}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
