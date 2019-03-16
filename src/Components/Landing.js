import React, { Component } from "react";

import Header from "./subComponents/Header";
class Landing extends Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          width: "auto",
          background: "#FFFFFF",
          position: "relative"
        }}
      >
        <Header />
        <img
          src={require("../Assets/boy.png")}
          style={{
            position: "absolute",
            height: "110%"
          }}
        />
        <img
          src={require("../Assets/wave.png")}
          style={{
            left: "0px",
            bottom: "3%",
            position: "absolute",
            width: "100vh"
          }}
          className="responsive"
        />

        <div className="row">
          <div
            className="col-xl-7 col-sm-12"
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <img
              src={require("../Assets/shankaram.png")}
              style={{ width: "60vh" }}
              className="responsive"
            />

            <br />
            <div
              style={{
                height: "2.5rem",
                width: "9.5rem",
                background: "#24D39B",
                borderRadius: "100px",
                textDecoration: "none",
                color: "white",
                fontWeight: "650",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer"
              }}
            >
              GET STARTED
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
