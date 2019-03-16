import React, { Component } from "react";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      suggestion: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#DEF4FF",
          height: "100%",
          width: "100%",
          position: "relative",
          zIndex: "2"
        }}
      >
        <img
          src={require("../Assets/slant1.png")}
          style={{
            width: "105%",
            position: "absolute",
            top: "-170px",
            left: "-3px",
            zIndex: "1"
          }}
          className="hide"
        />
        <div
          style={{
            zIndex: "3",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "2%",
            marginTop: "0px"
          }}
        >
          <h3 className="font-heading m">CONTACT US</h3>
          <h4 className="font-sub">Feel Free to Share Your Views With Us</h4>
        </div>

        <div
          style={{
            position: "relative",
            zIndex: "4",
            maxWidth: "45%",
            marginTop: "5%",
            left: "10%"
          }}
        >
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Suggestion</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Your Suggestions"
                name="suggestion"
                value={this.state.suggestion}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary" value="submit">
              Submit
            </button>
          </form>
        </div>

        <img
          src={require("../Assets/slant2.png")}
          style={{
            width: "105%",
            position: "absolute",
            bottom: "-150px",
            left: "-10px",
            zIndex: "1"
          }}
          className="hide"
        />
        <img
          src={require("../Assets/contactUsImage.png")}
          style={{
            width: "40%",
            position: "absolute",
            bottom: "0px",
            right: "-5%",
            zIndex: "2"
          }}
        />
      </div>
    );
  }
}

export default ContactUs;
