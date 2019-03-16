import React, { Component } from "react";

class TestimonialCards extends Component {
  render() {
    return (
      <div className="card" style={{ borderRadius: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "#0065E0",
            borderRadius: "20px 20px 0px 0px "
          }}
        >
          <div
            style={{
              height: "50px",
              width: "50px"
            }}
          />
          <img
            src={require("../../Assets/Oval.png")}
            style={{ width: "60px", margin: "5%" }}
          />

          <h6 style={{ color: "white" }}>{this.props.name}</h6>
          <h6 style={{ color: "white" }}>{this.props.location}</h6>
          <br />
        </div>
        <div className="card-body">
          <img
            src={require("../../Assets/quote.png")}
            style={{ width: "30px" }}
          />

          <p className="card-text">{this.props.content}</p>
          <img
            src={require("../../Assets/quote.png")}
            style={{ width: "30px" }}
            align="right"
          />
        </div>
      </div>
    );
  }
}

export default TestimonialCards;
