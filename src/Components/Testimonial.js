import React, { Component } from "react";
import { relative } from "path";
import TestimonialCards from "../Components/reusableComponents/TestimonialCards";

class Testimonial extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#DEF4FF",

          zIndex: "2",
          position: "relative"
        }}
      >
        <div
          style={{
            zIndex: "3",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "2%",
            marginTop: "0%"
          }}
        >
          <h3 className="font-heading m">TESTIMONIALS</h3>
          <h4 className="font-sub">Here's what our Student's say</h4>
        </div>
        <img
          src={require("../Assets/ellipse.png")}
          style={{
            position: "absolute",
            top: "-20%",
            left: "-50%"
          }}
          className="hide"
        />

        <div
          className="card-deck"
          style={{
            padding: "5%",
            paddingBottom: "4%",
            paddingTop: "0%",
            zIndex: "4"
          }}
        >
          <TestimonialCards
            name="Kunal Parikh"
            location="ADIT"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <TestimonialCards
            name="Kunal Parikh"
            location="ADIT"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <TestimonialCards
            name="Kunal Parikh"
            location="ADIT"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    );
  }
}

export default Testimonial;
