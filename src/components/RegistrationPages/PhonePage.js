import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./RegistrationPages.css";

class PhonePage extends Component {
  handleBtn = (type) => (event) => {
    if (type === "back") {
      this.props.history.push("/location");
    }

    if (type === "next") {
      this.props.history.push("/interest");
    }
  };

  render() {
    return (
      <div className="container">
        <Button onClick={this.handleBtn("back")}>Back</Button>
        <h3>About You</h3>
        <h2>What is your phone number?</h2>
        <div className="input">
          <input
            placeholder="Phone Number"
            type="number"
            name="zipcode"
            pattern="[0-9] {8}"
          />
        </div>
        <div>
          <Button onClick={this.handleBtn("next")}>Next</Button>
        </div>
      </div>
    );
  }
}

export default PhonePage;
