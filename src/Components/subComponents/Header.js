import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div
        style={{
          height: "50px",
          width: "100%",
          position: "absolute",
          top: "0px",
          zIndex: "1"
        }}
      >
        <div className="row">
          <div
            className="col-sm-12 col-xl-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              src={require("../../Assets/logo.png")}
              style={{
                height: "70px",
                width: "auto",
                marginTop: "2%"
              }}
            />
          </div>
          <div
            className="col-sm-12 col-xl-6 "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <p className="menu" style={{ cursor: "pointer" }}>
              About
            </p>
            <p className="menu" style={{ cursor: "pointer" }}>
              Home
            </p>
            <p className="menu" style={{ cursor: "pointer" }}>
              Blog
            </p>
            <p className="menu" style={{ cursor: "pointer" }}>
              Contact
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
