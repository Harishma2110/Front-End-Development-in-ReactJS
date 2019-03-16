import React, { Component } from "react";
import "./App.css";
import Landing from "./Components/Landing";
import ConceptsOfLearning from "./Components/ConceptsOfLearning";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import PhotoSection from "./Components/PhotoSection";
import ContactUs from "./Components/ContactUs";

class App extends Component {
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <img
          src={require("./Assets/backgrondPhoto.png")}
          style={{ height: "100%" }}
        />
        <div className="center-div">
          <Landing />

          <ConceptsOfLearning />

          <Testimonial />

          <PhotoSection />

          <ContactUs />

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
