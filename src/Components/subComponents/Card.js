import React, { Component } from "react";

const Card = () => {
  return (
    <div
      style={{
        background: "#73BE37",
        height: "100%",
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "30px",
        flexDirection: "column",
        margin: "15%",
        marginTop: "10%"
      }}
    >
      <h4 style={{ color: "white", fontWeight: "800", margin: "2%" }}>
        CONCEPTS OF LEARNING
      </h4>
      <div
        style={{
          background: "white",
          height: "86%",
          width: "97%",
          margin: "1%",
          borderRadius: "30px"
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-sm"
              style={{ marginLeft: "7%", marginTop: "3%" }}
            >
              lorem ipsum is "Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum" fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            </div>
            <div
              className="col-sm"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2%"
              }}
            >
              <img
                src={require("../../Assets/cartoon.png")}
                style={{
                  width: "60%"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
