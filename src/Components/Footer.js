import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#FFFEF1",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          className="fluid-container"
          style={{ marginTop: "7%", marginBottom: "3%" }}
          className="footer"
        >
          <div
            className="row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div className="col-lg-3 col-sm-3 " style={{ marginTop: "8%" }}>
              <img
                src={require("../Assets/pencil.png")}
                style={{
                  width: "100%"
                }}
              />
            </div>
            <div
              className="col-lg-3 col-sm-3 "
              style={{ marginTop: "5%", color: "#86939E" }}
            >
              <h4>Shankaram</h4>

              <p>
                A D Patel Institiute of Technology New Vallabh Vidhyanagar,
                Vitthal Udyognagar Anand-1212
              </p>
              <br />
              <p>Shankaram</p>
              <br />
              <p>Shankaram</p>
            </div>
            <div
              className="col-lg-3 col-sm-3"
              style={{ marginTop: "4%", color: "#86939E" }}
            >
              <h4>Our Services</h4>

              <p>Mobile App Development</p>
              <p>Web Application Development</p>
              <p>UI/UX Design</p>
              <p>Software Development Partner</p>
              <p>And Many More</p>
            </div>
            <div
              className="col-lg-3 col-sm-3"
              style={{ marginTop: "3%", color: "#86939E" }}
            >
              <h4>About Us</h4>

              <p> Company</p>
              <p>Portfolio</p>
              <p>Client Stories</p>
              <p>Career</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
